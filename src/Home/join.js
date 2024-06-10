import React, { useState } from 'react';
import img from "../assets/new-web/img.png";
import volt from "../assets/new-web/volt.png";
import Fade from "react-reveal/Fade";
import cross from "../assets/cross.png";

const Join = () => {
    const [showIframe, setShowIframe] = useState(false);

    const handleButtonClick = () => {
        setShowIframe(true);
    };

    const handleCloseIframe = () => {
        setShowIframe(false);
    };

    return (
        <div className="content-join">
            <h2 className="title-content p-t-5">Une démo vaut mille discours, non ?</h2>
            <p className="text-banner text-center">
                <Fade bottom>
                    FundHerz a pour mission de prouver que les femmes ont pleinement leur place sur le
                    marché du financement. Devenez FundHerz pour faire valoir votre potentiel entrepreneurial
                    et créer un impact durable dans l'écosystème.
                </Fade>
            </p>
            <div className="d-flex-desktop content-btn-join">
                <button className="btn-banner-join d-flex-desktop" onClick={handleButtonClick}>
                    <img src={volt} className="volt" />
                    <p>Je dépose mon deck</p>
                </button>
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

export default Join;