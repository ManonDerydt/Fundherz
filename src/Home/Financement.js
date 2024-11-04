import React, { useState } from 'react';
import Fade from "react-reveal/Fade";
import volt from "../assets/new-web/volt.png";
import cross from "../assets/cross.png";

const Financement = () => {
    const [showIframe, setShowIframe] = useState(false);

    const handleButtonClick = () => {
        setShowIframe(true);
    };

    const handleCloseIframe = () => {
        setShowIframe(false);
    };

    return (
        <div className="d-flex-desktop content-f">
            <div className="content-icons-f">
                <Fade left>
                    <span className="border-icons-f">💰</span>
                </Fade>
                <Fade left delay={100}>
                    <span className="border-icons-f marge-i-2">🚀</span>
                </Fade>
                <Fade left delay={200}>
                    <span className="border-icons-f">💸</span>
                </Fade>
            </div>
            <div>
                <h2 className="color-black text-center title-financement">Le bon financement <br /><span
                    className="violet-color">au bon moment.</span></h2>
                <div className="text-financement color-black">
                    Nous vous aidons à obtenir les bons financements au bon moment, en dilutif comme en non dilutif ( subventions, prêts bancaires, business angels ou VC) pour lever entre 50k à 2M d'€ en phase de pre seed et seed.
                </div>

                <button
                    className="link-btn-menu btn-com-f d-flex-desktop"
                    onClick={handleButtonClick}
                >
                    <p className="white-color text-btn-header">Je veux lever des fonds</p>
                </button>
            </div>
            <div className="content-icons-f content-icons-f-mobile-2">
                <Fade right>
                    <span className="border-icons-f">🏆</span>
                </Fade>
                <Fade right delay={100}>
                    <span className="border-icons-f marge-i-5">📈</span>
                </Fade>
                <Fade right delay={200}>
                    <span className="border-icons-f">🤝</span>
                </Fade>
            </div>

            {showIframe && (
                <Fade right>
                    <div className="typeform-overlay">
                        <div className="typeform-container">
                            <iframe
                                id="typeform-iframe"
                                src="https://i59ic371bmw.typeform.com/to/JiN0MSYj"
                                style={{ width: '100%', height: '100%', border: 'none' }}
                                title="TypeForm"
                            />
                            <a className="close-button" onClick={handleCloseIframe}>
                                <img src={cross} className="cross-form"/>
                            </a>
                        </div>
                    </div>
                </Fade>
            )}
        </div>
    );
};

export default Financement;