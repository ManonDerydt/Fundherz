import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import './Reequilibre.css';

// 50 pièces = 100 % des financements. Une seule côté fondatrices au départ (2 %).
const TOTAL = 50;
const START_RIGHT = 1;
const MOVES = TOTAL / 2 - START_RIGHT;

const COIN_R = 0.34;
const COIN_H = 0.06;
const PIVOT_Y = 1.7;
const BEAM_HALF = 2.4;
const POST_H = 0.45;
const PLATE_T = 0.08;
const MAX_TILT = 0.2;
const FLIGHT = 0.12; // part du scroll pendant laquelle une pièce est en vol

const STEPS = [
    {
        label: "aujourd'hui",
        title: <>Une balance qui penche<br /><span className="violet-color">d'un seul côté.</span></>,
        text: "Sur 50 pièces investies, une seule revient à une équipe de fondatrices. C'est 2 % des financements.",
    },
    {
        label: 'on rééquilibre',
        title: <>Chaque levée accompagnée<br /><span className="violet-color">déplace une pièce.</span></>,
        text: "Pre seed ou seed, dilutif ou non dilutif : nous aidons les entrepreneuses à lever de 50k à 2M d'€.",
    },
    {
        label: "l'équilibre",
        title: <>Ensemble,<br /><span className="violet-color">rééquilibrons.</span></>,
        text: "Notre mission : lever 1 milliard d'euros pour les femmes qui entreprennent.",
        cta: true,
    },
];

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const Reequilibre = ({ onCta }) => {
    const sectionRef = useRef(null);
    const stageRef = useRef(null);
    const canvasRef = useRef(null);
    const counterRef = useRef(null);
    const leftLabelRef = useRef(null);
    const rightLabelRef = useRef(null);
    const progressRef = useRef(0);
    const [step, setStep] = useState(0);

    // Progression du scroll dans la section (0 → 1), sans re-render à chaque frame.
    useEffect(() => {
        const onScroll = () => {
            const el = sectionRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const run = rect.height - window.innerHeight;
            const p = run > 0 ? clamp(-rect.top / run, 0, 1) : 0;
            progressRef.current = p;
            setStep(p < 0.25 ? 0 : p < 0.8 ? 1 : 2);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const stage = stageRef.current;
        if (!canvas || !stage) return;

        let renderer;
        try {
            renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        } catch (e) {
            // Pas de WebGL : le texte reste lisible, sans la balance.
            return;
        }

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        const scene = new THREE.Scene();
        const pmrem = new THREE.PMREMGenerator(renderer);
        const envTexture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
        scene.environment = envTexture;
        scene.environmentIntensity = 0.85;

        const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
        const lookAt = new THREE.Vector3(0, 2.3, 0);

        const sun = new THREE.DirectionalLight(0xffffff, 1.4);
        sun.position.set(4, 9, 6);
        sun.castShadow = true;
        sun.shadow.mapSize.set(1024, 1024);
        sun.shadow.camera.left = -6;
        sun.shadow.camera.right = 6;
        sun.shadow.camera.top = 6;
        sun.shadow.camera.bottom = -6;
        sun.shadow.radius = 6;
        sun.shadow.bias = -0.0005;
        scene.add(sun);

        const world = new THREE.Group();
        scene.add(world);

        // Matériaux : pâte claire lilas, accents violets Fundherz, or pour les pièces.
        const clay = new THREE.MeshPhysicalMaterial({ color: '#F5EFFF', roughness: 0.45, clearcoat: 0.4, clearcoatRoughness: 0.3 });
        const violet = new THREE.MeshPhysicalMaterial({ color: '#9A41FF', roughness: 0.3, clearcoat: 0.7, clearcoatRoughness: 0.2 });
        const gold = new THREE.MeshStandardMaterial({ color: '#FFCD3B', metalness: 0.9, roughness: 0.28 });

        const disposables = [clay, violet, gold, envTexture, pmrem];
        const add = (geometry, material, parent = world) => {
            const m = new THREE.Mesh(geometry, material);
            m.castShadow = true;
            m.receiveShadow = true;
            parent.add(m);
            disposables.push(geometry);
            return m;
        };

        // Sol qui ne montre que l'ombre.
        const groundGeo = new THREE.PlaneGeometry(30, 30);
        const ground = new THREE.Mesh(groundGeo, new THREE.ShadowMaterial({ opacity: 0.12 }));
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        world.add(ground);
        disposables.push(groundGeo, ground.material);

        // Pied, colonne, pivot.
        add(new THREE.CylinderGeometry(1.0, 1.15, 0.22, 64), clay).position.y = 0.11;
        add(new THREE.CylinderGeometry(0.1, 0.13, PIVOT_Y, 32), clay).position.y = PIVOT_Y / 2;
        add(new THREE.SphereGeometry(0.17, 32, 16), violet).position.y = PIVOT_Y;

        // Fléau : pivote autour de l'axe Z.
        const beam = new THREE.Group();
        beam.position.y = PIVOT_Y;
        world.add(beam);
        add(new RoundedBoxGeometry(BEAM_HALF * 2 + 0.2, 0.13, 0.24, 4, 0.06), clay, beam);

        // Montants et plateaux : restent verticaux, suivent les bouts du fléau.
        const makePan = () => {
            const pan = new THREE.Group();
            world.add(pan);
            add(new THREE.CylinderGeometry(0.06, 0.06, POST_H, 20), violet, pan).position.y = POST_H / 2;
            add(new THREE.CylinderGeometry(0.95, 0.82, PLATE_T, 64), clay, pan).position.y = POST_H + PLATE_T / 2;
            return pan;
        };
        const leftPan = makePan();
        const rightPan = makePan();

        // Pièces : profil tourné avec un léger chanfrein.
        const h2 = COIN_H / 2;
        const coinGeo = new THREE.LatheGeometry([
            new THREE.Vector2(0, -h2),
            new THREE.Vector2(COIN_R - 0.035, -h2),
            new THREE.Vector2(COIN_R, -h2 + 0.018),
            new THREE.Vector2(COIN_R, h2 - 0.018),
            new THREE.Vector2(COIN_R - 0.035, h2),
            new THREE.Vector2(0, h2),
        ], 48);
        disposables.push(coinGeo);
        const coins = new THREE.InstancedMesh(coinGeo, gold, TOTAL);
        coins.castShadow = true;
        coins.receiveShadow = true;
        coins.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        world.add(coins);

        const jitter = Array.from({ length: TOTAL }, () => ({
            x: (Math.random() - 0.5) * 0.03,
            z: (Math.random() - 0.5) * 0.03,
            r: Math.random() * Math.PI,
        }));

        const panTop = new THREE.Vector3();
        const slot = (pan, j, i, out) => {
            panTop.copy(pan.position);
            out.set(panTop.x + jitter[i].x, panTop.y + POST_H + PLATE_T + h2 + j * COIN_H, panTop.z + jitter[i].z);
            return out;
        };

        const pointer = { x: 0, y: 0 };
        const onPointer = (e) => {
            pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
            pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
        };
        window.addEventListener('pointermove', onPointer, { passive: true });

        const resize = () => {
            const w = stage.clientWidth;
            const h = stage.clientHeight;
            if (!w || !h) return;
            renderer.setSize(w, h, false);
            camera.aspect = w / h;
            // Cadrage : toute la balance et l'arc des pièces restent dans le champ.
            const tan = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
            const dist = Math.max(3.5 / tan, 3.95 / (tan * camera.aspect));
            camera.position.set(0, lookAt.y + dist * 0.22, dist);
            camera.lookAt(lookAt);
            camera.updateProjectionMatrix();
        };
        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(stage);

        let visible = false;
        const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
        io.observe(stage);

        const dummy = new THREE.Object3D();
        const a = new THREE.Vector3();
        const b = new THREE.Vector3();
        const mid = new THREE.Vector3();
        const proj = new THREE.Vector3();
        const flightStep = (1 - FLIGHT) / (MOVES - 1);
        let smooth = progressRef.current;
        let angle = MAX_TILT * (TOTAL - 2 * START_RIGHT) / TOTAL;
        let angleVel = 0;
        const clock = new THREE.Clock();

        const placeLabel = (el, pan) => {
            if (!el) return;
            proj.set(pan.position.x, pan.position.y - 0.15, pan.position.z + 0.9);
            world.localToWorld(proj).project(camera);
            const x = (proj.x + 1) / 2 * stage.clientWidth;
            const y = (1 - proj.y) / 2 * stage.clientHeight;
            el.style.transform = `translate(${x}px, ${y}px) translate(-50%, 0)`;
        };

        let raf;
        const frame = () => {
            raf = requestAnimationFrame(frame);
            if (!visible) return;
            const t = clock.getElapsedTime();

            smooth += (progressRef.current - smooth) * (reduceMotion ? 1 : 0.1);
            // Courte pause au début (on lit « 2 % ») et à la fin (on voit l'équilibre).
            const u = clamp((smooth - 0.1) / 0.82, 0, 1);

            // Avancement de chaque pièce en vol, et masse posée de chaque côté.
            let landedRight = START_RIGHT;
            let leftCount = TOTAL - START_RIGHT;
            let movedShare = 0;
            const flights = [];
            for (let k = 0; k < MOVES; k++) {
                const f = clamp((u - k * flightStep) / FLIGHT, 0, 1);
                flights.push(f);
                if (f > 0) leftCount--;
                if (f >= 1) landedRight++;
                movedShare += ease(f);
            }

            const target = MAX_TILT * (leftCount - landedRight) / (leftCount + landedRight);
            if (reduceMotion) {
                angle = target;
            } else {
                angleVel += (target - angle) * 0.05;
                angleVel *= 0.88;
                angle += angleVel;
            }
            beam.rotation.z = angle;
            const c = Math.cos(angle);
            const s = Math.sin(angle);
            leftPan.position.set(-BEAM_HALF * c, PIVOT_Y - BEAM_HALF * s, 0);
            rightPan.position.set(BEAM_HALF * c, PIVOT_Y + BEAM_HALF * s, 0);

            // Pièces : 0..48 sur le plateau gauche (la 48 en haut part en premier), 49 à droite.
            for (let i = 0; i < TOTAL; i++) {
                dummy.rotation.set(0, jitter[i].r, 0);
                if (i === TOTAL - 1) {
                    slot(rightPan, 0, i, dummy.position);
                } else {
                    const k = TOTAL - 2 - i;
                    const f = k < MOVES ? flights[k] : 0;
                    if (f <= 0) {
                        slot(leftPan, i, i, dummy.position);
                    } else if (f >= 1) {
                        slot(rightPan, k + 1, i, dummy.position);
                    } else {
                        const e = ease(f);
                        slot(leftPan, i, i, a);
                        slot(rightPan, k + 1, i, b);
                        mid.addVectors(a, b).multiplyScalar(0.5);
                        mid.y = Math.max(a.y, b.y) + 1.6;
                        const inv = 1 - e;
                        dummy.position.set(
                            inv * inv * a.x + 2 * inv * e * mid.x + e * e * b.x,
                            inv * inv * a.y + 2 * inv * e * mid.y + e * e * b.y,
                            inv * inv * a.z + 2 * inv * e * mid.z + e * e * b.z,
                        );
                        dummy.rotation.set(e * Math.PI * 2, jitter[i].r, e * 0.6);
                    }
                }
                dummy.updateMatrix();
                coins.setMatrixAt(i, dummy.matrix);
            }
            coins.instanceMatrix.needsUpdate = true;

            if (counterRef.current) {
                const share = (START_RIGHT + movedShare) / TOTAL;
                counterRef.current.textContent = `${Math.round(share * 100)} %`;
            }

            if (!reduceMotion) {
                world.rotation.y += ((Math.sin(t * 0.25) * 0.18 + pointer.x * 0.2) - world.rotation.y) * 0.05;
                world.rotation.x += ((pointer.y * 0.04) - world.rotation.x) * 0.05;
            }

            placeLabel(leftLabelRef.current, leftPan);
            placeLabel(rightLabelRef.current, rightPan);
            renderer.render(scene, camera);
        };
        frame();

        return () => {
            cancelAnimationFrame(raf);
            ro.disconnect();
            io.disconnect();
            window.removeEventListener('pointermove', onPointer);
            coins.dispose();
            disposables.forEach((d) => d.dispose());
            renderer.dispose();
        };
    }, []);

    const current = STEPS[step];

    return (
        <section className="reeq" ref={sectionRef} aria-label="Rééquilibrer le financement">
            <div className="reeq-sticky">
                <div className="reeq-stage" ref={stageRef}>
                    <canvas className="reeq-canvas" ref={canvasRef} aria-hidden="true" />
                    <span className="reeq-tag" ref={leftLabelRef} aria-hidden="true">Le reste</span>
                    <span className="reeq-tag reeq-tag-her" ref={rightLabelRef} aria-hidden="true">Fondatrices</span>
                </div>

                <div className="reeq-content">
                    <div className="reeq-counter">
                        <span className="reeq-number" ref={counterRef}>2 %</span>
                        <span className="reeq-label">{current.label}</span>
                    </div>

                    <div className="reeq-text" key={step}>
                        <h2 className="reeq-title">{current.title}</h2>
                        <p className="reeq-body">{current.text}</p>
                        {current.cta && (
                            <button className="reeq-cta" onClick={onCta}>
                                Je veux lever des fonds
                            </button>
                        )}
                    </div>

                    <div className="reeq-dots" aria-hidden="true">
                        {STEPS.map((_, i) => (
                            <span key={i} className={i === step ? 'is-active' : ''} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reequilibre;
