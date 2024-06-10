import React from 'react';
import success from '../assets/success.jpeg';
import pic1 from '../assets/Investors/pic-8.png';
import pic3 from '../assets/Investors/pic-14.png';

import Slider from 'react-slick';
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
                    {/*<h2 className="special-color title-offers">Une nouvelle approche <br/><span className="color-orange">de financement.</span></h2>*/}
                    <div className="m-t-5">
                        <Fade bottom>
                            <div className="d-flex-desktop m-t-10 no-d-flex-tablet">
                                <Fade>
                                    <img src={pic1} className="pic_solution"/>
                                </Fade>
                                <Fade bottom delay={200}>
                                    <div className="content-block-solution content-s-right">
                                        <p className="mini-title-solution color-orange">Concept</p>
                                        <h2 className="big-title-solution ">Découvrez les projets<span className="color-orange"><br/> lors des meetings en ligne.</span></h2>
                                        <p className="text-solution-right">
                                            Nous matchons vos enjeux d'investissement et celles des startups pour vous mettre en relation lors de sessions de
                                            pitch en ligne groupé. En fonction de vos intérêts, vous pouvez assister
                                            aux différentes sessions proposées tout au long du mois.
                                        </p>
                                    </div>
                                </Fade>
                            </div>

                        </Fade>
                        <Fade bottom>
                            <div className="d-flex-desktop m-t-10 content-solution-mobile no-d-flex-tablet">
                                <div className="content-block-solution">
                                    <p className="mini-title-solution  green-color m-l-0">Concept</p>
                                    <h2 className="big-title-solution big-title-solution-left">Des professionnels dédiés<br/><span className="green-color"> guident les entrepreneurs.</span></h2>
                                    <p className="text-solution-left">
                                        Pour accompagner les porteurs de projet dans leur démarche, notre écosystème est composé de conseillers qui ont une expertise dans le domaine du
                                        financement afin de les accompagner tout au long de leurs parcours de levée de fonds.
                                    </p>
                                </div>
                                <Fade bottom>
                                    {/*<img src={pic2} className="pic_solution"/>*/}
                                </Fade>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="d-flex-desktop m-t-10  no-d-flex-tablet">
                                <img src={pic3} className="pic_solution"/>
                                <Fade bottom>
                                    <div className="content-block-solution content-s-right">
                                        <p className="mini-title-solution blue-color-o">Concept</p>
                                        <h2 className="big-title-solution m-l-10">Prenez votre décision<span className="blue-color-o"> <br/> endéans les 50 jours.</span></h2>
                                        <p className="text-solution-right">
                                            Selon la pertinence et l'attrait des projets présentés, nos investisseurs s'engagent à garantir un processus d'étude et d'investissement
                                            rapide, sous un délai de 50 jours. Cet engagement vise à accélérer le développement des projets et à dynamiser votre portefeuille
                                            d'investissement.
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