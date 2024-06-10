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
                <h2 className="color-black text-center title-financement">Nous trouvons <br /><span
                    className="violet-color">vos financements</span></h2>
                <div className="text-financement color-black">
                    À la suite du parcours, nous vous aidons à trouver vos financements,
                    qu'ils proviennent de subventions publiques, prêts bancaires, business
                    angels ou de fonds de capital-risque. Notre objectif est de vous permettre de lever entre
                    50k et 500k€ et de propulser votre projet.
                </div>

                <button
                    className="link-btn-menu btn-com-f d-flex-desktop"
                    onClick={handleButtonClick}
                >
                    <img src={volt} className="volt" />
                    <p>Je dépose mon deck</p>
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