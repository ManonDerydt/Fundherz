import React from "react";
import Fade from "react-reveal/Fade";
import pic1 from "../assets/1.png"
import pic2 from "../assets/2.png"
import pic3 from "../assets/3.png"

class HowItWorks extends React.Component {
    render() {
        return (
            <div>
                <Fade bottom>
                    <div className="m-t-10">
                        <p className="mini-title-offers color-orange">À votre tour</p>
                        <h2 className="special-color title-offers">Qu'est-ce que Pitchersales <br/><span className="color-orange">et en quoi ça consiste</span></h2>
                    </div>
                    <div className="d-flex-desktop content-block-H">
                        <Fade bottom delay={200}>
                            <div className="block-H block-H-1">
                                <img src={pic1} className="pic-todo"/>
                                <h3 className="txt-w">Inscrivez-vous en deux minutes</h3>
                                <p className="small-title-w">
                                    Tout se fait depuis l'application, simple et rapide. Zéro paperasse.
                                </p>
                            </div>
                        </Fade>
                        <Fade bottom delay={350}>
                            <div className="block-H block-H-2">
                                <img src={pic2} className="pic-todo"/>
                                <h3 className="txt-w">Nous mettons votre profil à jour</h3>
                                <p className="small-title-w">
                                    Nous créons votre profil investisseurs et et voyons quelle porteurs de projet ou startup répond à vos attentes.
                                </p>
                            </div>
                        </Fade>
                       <Fade bottom delay={450}>
                           <div className="block-H block-H-3">
                               <img src={pic3} className="pic-todo"/>
                               <h3 className="txt-w">Nous programmons vos futurs meetings</h3>
                               <p className="small-title-w">
                                   Nous vous enverrons les dates de meeting disponible pour assister aux pitchs des startup ou porteur de projet correspont à vos critères.
                               </p>
                           </div>
                       </Fade>
                    </div>
                </Fade>
            </div>
        )
    }
}

export default HowItWorks