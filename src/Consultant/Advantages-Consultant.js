import React from 'react';
import success from '../assets/success.jpeg';
import pic1 from '../assets/solution/pic-13.png';
import pic3 from '../assets/team-building.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import rightArrow from '../assets/right-arrow.png';
import styled from 'styled-components';
import Fade from "react-reveal/Fade";

const NextArrowStyled = styled.div`
    background: url(${rightArrow}) no-repeat center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: -60px;
    transform: translateY(-50%);
    z-index: 10;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
class AdvantagesConsultant extends React.Component {
    render() {

        return (
            <div className="content-adv-c">

                <div>
                    {/*<h2 className="special-color title-offers">Une nouvelle approche <br/><span className="color-orange">de financement.</span></h2>*/}
                    <div className="m-t-5">
                        <Fade bottom>
                            <div className="d-flex-desktop m-t-10 no-d-flex-tablet">
                                <Fade>
{/*
                                    <img src={pic2} className="pic_solution"/>
*/}
                                </Fade>
                                <Fade bottom delay={200}>
                                    <div className="content-block-solution content-s-right">
                                        <p className="mini-title-solution red-color">Concept</p>
                                        <h2 className="big-title-solution ">Mentorez des startups <span className="red-color"><br/>pour leurs parcours de financement.</span></h2>
                                        <p className="text-solution-right">
                                            Nous vous offrons la possibilité d'accompagner les startups lors de leur levée de fonds auprès à des investisseurs.
                                            En fonction de l'offre sélectionnée, Les porteurs de projets peuvent pitcher devant 5, 10 ou 15 investisseurs.
                                        </p>
                                    </div>
                                </Fade>
                            </div>

                        </Fade>
                        <Fade bottom>
                            <div className="d-flex-desktop m-t-10 content-solution-mobile no-d-flex-tablet">
                                <div className="content-block-solution">
                                    <p className="mini-title-solution  dark-blue m-l-0">Concept</p>
                                    <h2 className="big-title-solution big-title-solution-left">Intégrez une équipe de <br/><span className="dark-blue">professionnels dévoués.</span></h2>
                                    <p className="text-solution-left">
                                        En tant que conseiller chez Pitchersales, vous faites partie intégrante de notre mission. Vous bénéficierez
                                        du soutien de notre équipe et de ressources adaptées pour optimiser votre coaching. Votre expertise combinée
                                        à nos outils assure la réussite des entrepreneurs que vous guiderez.
                                    </p>
                                </div>
                                <Fade bottom>
                                    <img src={pic3} className="pic_solution"/>
                                </Fade>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdvantagesConsultant;