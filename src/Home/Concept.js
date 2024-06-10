import React from 'react';
import Fade from 'react-reveal/Fade';
import pic1 from "../assets/Concept/pic-1.png"
import pic2 from "../assets/Concept/pic-2.png"
import pic3 from "../assets/Concept/pic-3.png"
import hand from "../assets/hand-top.png"
import invest from "../assets/invest.png"
import team from "../assets/team.png"
import consultant from "../assets/consultant.png"

class Concept extends React.Component {
    render() {
        return (
            <div>
                {/*<img src={splash} className="drow"/>*/}
                <Fade bottom >
                    <div  className="section-concept" id="concept">
                        <div className="w-100 content-box-meeting text-center">
                            <div>
                                <h2 className="special-color title-offers">Une nouvelle manière <br/><span className="color-orange">de lever des fonds.</span></h2>
                            </div>

                            <p className="text-concept">
                                Aujourd’hui, les levées de fonds sont pénibles. Ça prend du temps, de l’énergie et demande un réseau.
                                Pitchersales casse tout ce process ! Plus besoin de courir derrière les investisseurs ni d’envoyer des centaines de présentations. Les investisseurs viennent à toi et te donnent la chance de les convaincre autour de meetings en ligne.
                                L’investissement n’est plus réservé aux privilégiés ni aux initiés. Toi aussi, tu peux saisir ta chance et faire décoller ton projet.
                            </p>

                            <Fade bottom delay={100}>
                                <div className="block-text-meeting">
                                    <Fade bottom delay={200}>
                                        <div className="w-30">
                                            <img src={team} className="pic-concept"/>
                                            {/*<h3 className="txt-w">Une équipe à ta disposition</h3> */}
                                            <h3 className="txt-w text-center">1. Inscris-toi en moins<br/> de deux minutes</h3>
                                            <p className="small-title-w text-center">
                                                En quelques clics, ouvre les portes de ton financement. Tout se fait en ligne, simplement et sans paperasse.
                                            </p>
                                        </div>
                                    </Fade>

                                    <Fade  bottom delay={300}>
                                        <div className="w-30">
                                            <img src={invest} className="pic-concept"/>
                                            {/*<h3 className="txt-w">Des investisseurs au top</h3>*/}
                                            <h3 className="txt-w text-center">2. Choisi un nombre<br/> d'investisseurs</h3>
                                            <p className="small-title-w text-center">
                                                Nous mettons à ta disposition différentes solutions pour t'aider à convaincre les partenaires financiers.
                                            </p>
                                        </div>
                                    </Fade>

                                    <Fade bottom delay={400}>
                                        <div className="w-30">
                                            <img src={consultant} className="pic-concept"/>
                                            {/*<h3 className="txt-w">Des conseillers dédiés</h3>*/}
                                            <h3 className="txt-w text-center">3. Pitch ton projet<br/> en toute simplicité</h3>
                                            <p className="small-title-w text-center">
                                               C'est ton moment, prépare-toi à pitcher devant les investisseurs de ton secteur pour lever jusqu'à 50.000€.
                                            </p>
                                        </div>
                                    </Fade>
                                </div>
                                <button className="btn-cta-h btn-cta">
                                    Réserve ta place
                                </button>
                            </Fade>
                            {/*<div className="text-center">*/}
                            {/*    <div className="d-flex-desktop">*/}
                            {/*        <Fade left delay={900}>*/}
                            {/*            <div className="block-concept align-baseline">*/}
                            {/*                <h2 className="big-title-concept">*/}
                            {/*                    Obtenez un accès privilégié à un réseau diversifié d'investisseurs correspondant à vos*/}
                            {/*                    besoins et assurez le succès de votre levée de fonds*/}
                            {/*                    <p className="emoji-item-concept">&#128184;</p>*/}
                            {/*                </h2>*/}
                            {/*            </div>*/}
                            {/*        </Fade>*/}

                            {/*        <Fade right delay={1200}>*/}
                            {/*            <div className="block-concept align-baseline">*/}
                            {/*                <h2 className="big-title-concept">*/}
                            {/*                    Pitchez votre projet en ligne, atteignez des investisseurs au-delà de votre zone*/}
                            {/*                    géographique et touchez un public plus vaste que jamais*/}
                            {/*                    <p className="emoji-item-concept">&#128249;</p>*/}
                            {/*                </h2>*/}
                            {/*            </div>*/}
                            {/*        </Fade>*/}

                            {/*    </div>*/}
                            {/*    <div className="d-flex-desktop">*/}
                            {/*        <Fade left delay={1600}>*/}
                            {/*            <div className="block-concept align-baseline">*/}
                            {/*                <h2 className="big-title-concept">PitcherSales, c'est aussi une communauté solidaire de startups unies*/}
                            {/*                    qui se soutiennent dans la poursuite de leur réussite*/}
                            {/*                </h2>*/}
                            {/*                <p className="emoji-item-concept">&#127919;</p>*/}
                            {/*            </div>*/}
                            {/*        </Fade>*/}
                            {/*        <Fade right delay={1800}>*/}
                            {/*            <div className="block-concept align-baseline">*/}
                            {/*                <h2 className="big-title-concept">*/}
                            {/*                    Nous proposons des formations pour affiner vos pitchs et atteindre un niveau de performance optimal.*/}
                            {/*                    Faites la différence*/}
                            {/*                </h2>*/}
                            {/*                <p className="emoji-item-concept">&#128081;</p>*/}
                            {/*            </div>*/}
                            {/*        </Fade>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        {/*<a href="#step"><button className="learn-more learn-more-concept">Découvrir</button></a>*/}
                    </div>
                </Fade>
            </div>
        )
    }
}

export default Concept