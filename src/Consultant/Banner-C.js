import React, {useState} from 'react';
import Fade from "react-reveal/Fade";
import img from "../assets/new-web/img.png"
import img2 from "../assets/new-web/img2.png"
import img3 from "../assets/new-web/img3.png"
import feu from "../assets/new-web/feu.png"
import volt from "../assets/new-web/volt.png"
import { useCountUp } from "use-count-up";
class BannerC extends React.Component {


    render() {
        return (
            <div className="content-headband">
                <div className="content-main">
                    <h2 className="title-parcours text-center violet-color">
                        Le parcours en<br/><span className="color-black">4 points clés</span>
                    </h2>

                    <div className="d-flex-desktop content-numbers">

                        <Fade bottom delay={100}>
                            <div className="content-items">
                                <h2 className="mini-title-content violet-color">1.</h2>
                                <h2 className="mini-title-content-2">Financier</h2>

                                <p className="text-banner-content">
                                    Nous analysons vos besoins et structurons votre offre pour trouver les financements adaptés.
                                </p>
                            </div>
                        </Fade>

                        <Fade bottom delay={300}>
                            <div className="content-items">
                                <h2 className="mini-title-content violet-color">2.</h2>
                                <h2 className="mini-title-content-2">Business</h2>

                                <p className="text-banner-content">
                                    Nous créons votre data room complète en structurant vos différents dossiers d'investissement.
                                </p>
                            </div>
                        </Fade>

                        <Fade bottom delay={500}>
                            <div className="content-items">
                                <h2 className="mini-title-content violet-color">3.</h2>
                                <h2 className="mini-title-content-2">Juridique</h2>

                                <p className="text-banner-content">
                                  Nous vous accompagnons juridiquement jusqu'à la négociation avec vos investisseurs.
                                </p>
                            </div>
                        </Fade>

                        <Fade bottom delay={700}>
                            <div className="content-items">
                                <h2 className="mini-title-content violet-color">4.</h2>
                                <h2 className="mini-title-content-2">Pitch oral</h2>

                                <p className="text-banner-content">
                                    Nous perfectionnons votre discours pour convraincre vos futurs financeurs et investisseurs.
                                </p>
                            </div>
                        </Fade>

                    </div>


                </div>


            </div>
        )
    }
}

export default BannerC