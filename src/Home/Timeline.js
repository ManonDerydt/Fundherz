import React, { useState, useEffect } from 'react';
import Fade from "react-reveal/Fade";
import "../App.css";

const Timeline = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const points = [
        { id: 1, text: 'Découverte et analyse du projet.' },
        { id: 2, text: 'Identification de la stratégie financière.' },
        { id: 3, text: 'Contractualisation et onboarding.' },
        { id: 4, text: 'Formalisation des dossiers (BP, deck, etc).' },
        { id: 5, text: 'Préparation aux commissions (futurs financeurs).' },
        { id: 6, text: 'Négociation et transfert des fonds.' },
    ];

    return (
        <div>
            <div className="timeline-container">

                <div
                    className="timeline-line"
                    style={{height: `${scrollPosition}px`}}
                >
                </div>
                {points.map((point, index) => (
                    <div
                        key={point.id}
                        className="timeline-point"
                        style={{top: `${index * 200}px`}}
                    >
                        <Fade bottom delay={index * 200}>
                            <div className={`timeline-text ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <h3 className="number-line">{point.id}</h3>
                                {point.text}
                            </div>
                        </Fade>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Timeline;
