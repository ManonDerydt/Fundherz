import React from 'react';
import pic1 from '../assets/Investors/pic-2.png'
import fusée from '../assets/Investors/fusée.png'
import time from '../assets/Investors/time.png'
import purse from '../assets/Investors/purse.png'
import target from '../assets/Investors/target.png'
import alarm from '../assets/Investors/alarme.png'
import cloud from '../assets/Investors/cloud.png'
import jumelle from '../assets/Investors/jumelle.png'
import puzzle from '../assets/Investors/puzzle.png'
import plane from '../assets/Investors/plane.png'
import r1 from '../assets/Investors/reseau1.png'
import r2 from '../assets/Investors/reaseau2.png'
import r3 from '../assets/Investors/r3.png'
import pic4 from '../assets/solution/pic-2.png'
import pic5 from '../assets/Investors/pic-5.png'
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Background = styled.div`
  background-image: url(${pic1});
  background-size: cover;
  background-position: center;
  width: 34em;
  height: 40em;
  margin: 0 auto;
  border-radius: 1.875rem;
        `;

const BigBackground = styled.div`
  background-image: url(${pic5});
  background-size: cover;
  background-position: center;
  width: 34em;
  height: 40em;
  margin: 0 auto;
  border-radius: 1.875rem;
        `;
const TextContainer = styled.div`
  backdrop-filter: none!important; ; 
`;


class AdvantagesInvestors extends React.Component {
    render() {
        return (
            <div className="m-t-10 content-adv-i">
                <Fade bottom>
                    <div className="d-flex-desktop content-block-i">
                        <div className="block-i block-i-3">
                            {/*<img src={r1} className="r1"/>*/}
                            <h3 className="text-i-1">
                                <span className="pink-color">Diversifiez votre portefeuille. </span>
                                Accédez à une variété de startups triées sur le volet.
                            </h3>
                            <div className="text-center">
                                <img src={purse} className="img-i"/>
                            </div>
                        </div>

                        <Fade bottom delay={200}>
                            <div className="block-i block-i-5">
                                <h3 className="text-i-1 color-black">
                                    <span className="dark-orange">Investissez seul ou en groupe. </span>
                                    Bénéficiez d'une flexibilité d'investissement pour minimiser les risques.
                                </h3>
                                <div className="text-center">
                                    <img src={plane} className="img-i-p"/>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </Fade>

                <br className="desktop-only"/>
                <Fade bottom>
                    <div className="d-flex-desktop content-block-i">
                        <div className="block-i block-i-1">
                            <h3 className="text-i-1"><span className="violet-color">Stimuler l'écosystème entrepreneurial.</span> Contribuez à la fluidité du financement des jeunes startups.</h3>
                            <div className="text-center">
                                <img src={target} className="img-i-t"/>
                            </div>
                        </div>
                        <Fade delay={200} bottom>
                            <div className="block-i block-i-2">
                                <h3 className="text-i-1"><span className="grey-color">Economisez un temps précieux. </span><span className="color-black">Participez à des sessions de pitch en ligne groupé.</span></h3>
                                <div className="text-center">
                                    <img src={time} className="img-i-4"/>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </Fade>


                <br className="desktop-only"/>
                <Fade bottom>
                    <div className="d-flex-desktop content-block-i">
                        <div className="block-i block-i-6">
                            <h3 className="text-i-1">
                                <span className="dark-orange">Déléguez le sourcing des projets. </span><span className="color-black">
                                Confiez-nous vos enjeux de recherches actuelles.</span>
                            </h3>
                            <div className="text-center">
                                <img src={jumelle} className="img-i-j"/>
                            </div>

                        </div>
                        <Fade bottom delay={200}>
                            <div className="block-i block-i-4">
                                <div>
                                    <h3 className="text-i-1"><span className="dark-blue">Mise à jour régulière.</span> Recevez des alertes sur nos opportunités d'investissement.</h3>
                                    <div className="text-center">
                                        <img src={alarm} className="img-i-b"/>
                                    </div>

                                    {/*<h3 className="text-i-1"><span className="blue-color">Saisissez les bonnes opportunités</span><br/> Investistissez précocément dans des projets d'avenir.</h3>*/}
                                </div>
                            </div>
                        </Fade>
                    </div>
                </Fade>

            </div>
        )
    }
}

export default AdvantagesInvestors