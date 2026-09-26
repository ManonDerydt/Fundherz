import React, { useState } from 'react';
import Fade from "react-reveal/Fade";
import img from "../assets/new-web/com.png";
import volt from "../assets/new-web/volt.png";
import cross from "../assets/cross.png";

const Step = () => {
    const [showTypeform, setShowTypeform] = useState(false);

    const [showIframe, setShowIframe] = useState(false);

    const handleButtonClick = () => {
        setShowIframe(true);
    };

    const handleCloseIframe = () => {
        setShowIframe(false);
    };

    return (
        <div className="content-com">
            <div className="d-flex-desktop content-step">
                <img src={img} className="img-step" alt="Community" />
                <Fade bottom>
                    <div className="txt-step">
                        <h2 className="title-community">
                            Une communauté de<br /><span className="violet-color">femmes déterminées</span>
                        </h2>
                        <p className="text-step color-black">
                            Rejoignez la communauté Fundherz, un espace d'entraide constitué de femmes ambitieuses et déterminées.
                            Participez à nos événements et webinaires pour enrichir votre réseau et partager vos expériences ! Inscrivez-vous
                            pour rester informée.
                        </p>

                            <button className="btn-com-2 d-flex-desktop" onClick={handleButtonClick}>
                                <p>Je rejoins la communauté</p>
                            </button>
                    </div>
                </Fade>
                {showIframe && (
                    <Fade right>
                        <div className="typeform-overlay">
                            <div className="typeform-container">
                                <iframe
                                    id="typeform-iframe"
                                    src="https://i59ic371bmw.typeform.com/to/s7B7i5Vw"
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
        </div>
    );
};

export default Step;
