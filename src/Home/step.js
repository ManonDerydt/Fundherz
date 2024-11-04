import React, {useState} from 'react';
import Fade from "react-reveal/Fade";
import img from "../assets/new-web/com.png";
import volt from "../assets/new-web/volt.png";
class Step extends React.Component {
    render() {

        return (
            <div className="content-com">

                <div className="d-flex-desktop content-step">
                    <img src={img} className="img-step"/>
                    <Fade bottom>
                        <div className="txt-step">
                            <h2 className="title-community">Une communauté de<br/><span className="violet-color">femmes déterminées</span>
                            </h2>
                            <p className="text-step color-black">

                                Rejoignez la communauté Fundherz, un espace d'entraide constitué femmes ambitieuses et déterminées.
                                Participez à nos événements et webinaires pour
                                enrichir votre réseau et partager vos expériences ! Inscrivez-vous
                                pour rester informée.
                            </p>
                            <a href="https://discord.gg/fCaeQtyq" target="_blank">
                                <button className="btn-com-2 d-flex-desktop" >
                                    <p>Je rejoins la communauté</p>
                                </button>
                            </a>


                        </div>
                    </Fade>

                </div>
            </div>
        )
    }
}

export default Step

