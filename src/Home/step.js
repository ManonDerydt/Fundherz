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

                                La communauté Fundherz est un lieu de partage et d'entraide constitué de femmes
                                ambitieuses et déterminées.
                                Les membres se soutiennent mutuellement dans la
                                réalisation de leurs projets et peuvent participer à des événements et des occasions
                                pour favoriser les échanges et la collaboration entre les membres.
                                Rejoignez-nous et faites partie de ce réseau solidaire de femmes entrepreneures pour
                                décupler votre potentiel et vos opportunités !

                            </p>
                            <a href="https://discord.gg/fCaeQtyq" target="_blank">
                                <button className="btn-com-2 d-flex-desktop" >
                                    <img src={volt} className="volt"/>
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

