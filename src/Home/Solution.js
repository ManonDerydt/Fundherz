import React from 'react';
import success from '../assets/success.jpeg';
import pic1 from '../assets/solution/pic-13.png';
import pic3 from '../assets/solution/pic-12.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import rightArrow from '../assets/right-arrow.png';
import styled from 'styled-components';
import Fade from "react-reveal/Fade";
class Solution extends React.Component {
    render() {

        return (
            <div className="content-advantage">

                    <div className="small-content-advantage">

                        <div className="m-t-5">
                            <Fade bottom>
                                <div className="d-flex-desktop m-t-10 no-d-flex-tablet">
                                    <Fade>
                                        <img src={pic1} className="pic_solution"/>
                                    </Fade>
                                    <Fade bottom delay={200}>
                                        <div className="content-block-solution content-s-right">
                                            <p className="mini-title-solution color-orange">Concept</p>
                                            <h2 className="big-title-solution ">Pitch en ligne devant <span className="color-orange"><br/>un panel d'investisseurs.</span></h2>
                                            <p className="text-solution-right">
                                                Nous te proposons trois solutions pour trouver ton partenaire financier idéal. Selon ton choix, pitch ton projet devant 5, 10 ou 15 investisseurs spécialisés dans ton secteur d'activité.

                                                {/*Au delà du financement,*/}
                                                {/*ils t'accompagnerons dans le développement et le succès de ton projet.*/}
                                            </p>
                                        </div>
                                    </Fade>
                                </div>

                            </Fade>
                            <Fade bottom>
                                <div className="d-flex-desktop m-t-10 content-solution-mobile no-d-flex-tablet">
                                    <div className="content-block-solution">
                                        <p className="mini-title-solution  green-color m-l-0">Concept</p>
                                        <h2 className="big-title-solution big-title-solution-left">Des professionnels dédiés<span className="green-color"><br/> pour t'assister.</span></h2>
                                        <p className="text-solution-left">
                                            Tu n'es pas seul dans ta quête de financement. Nous mettons à ta disposition des ressources et des conseillers expérimentés en investissement
                                            pour t'accompagner dans ton pitch et ta levée de fonds.
                                        </p>
                                    </div>
                                    <Fade bottom>
                                        {/*<img src={pic2} className="pic_solution"/>*/}
                                    </Fade>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className="d-flex-desktop m-t-10 no-d-flex-tablet">
                                    <img src={pic3} className="pic_solution"/>
                                    <Fade bottom>
                                        <div className="content-block-solution content-s-right">
                                            <p className="mini-title-solution blue-color-o">Concept</p>
                                            <h2 className="big-title-solution m-l-10">Reçois ton financement<span className="blue-color-o"> <br/> en moins de 50 jours.</span></h2>
                                            <p className="text-solution-right">
                                                Selon l'intérêt des investisseurs pour ton projet, ils s'engagent à effectuer le processus d'étude et de financement dans un délai de 50 jours.
                                                Cet engagement vise à optimiser le démarrage et la progression de ta boîte sans délai superflu.
                                            </p>
                                        </div>
                                    </Fade>

                                </div>
                            </Fade>
                        </div>
                    </div>

            </div>
        );
    }
}

export default Solution;