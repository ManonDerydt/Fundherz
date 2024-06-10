import React from 'react';
import Fade from 'react-reveal/Fade';
import invest from "../assets/invest.png"
import team from "../assets/team.png"
import consultant from "../assets/consultant.png"

class ConceptInvestors extends React.Component {
    render() {
        return (
            <div>
                {/*<img src={splash} className="drow"/>*/}
                <Fade bottom >
                    <div  className="section-concept" id="concept">
                        <div className="w-100 content-box-meeting text-center">
                            <div>
                                <h2 className="special-color title-offers">Une nouvelle manière de<br/><span className="red-color"> générer vos revenus.</span></h2>
                            </div>

                            <p className="text-concept">
                                Aujourd’hui, les levées de fonds sont pénibles pour les porteurs de projets. Ça prend du temps, de l’énergie et les investisseurs leur demande de l'expérience.
                                Il est crucial d'aider les startups à affiner leur projet et stratégie d'investissement. Avec Pitchersales,
                                nous vous mettons en relation avec ces startups pour les guider vers des présentations réussies devant des investisseurs.
                                Plus qu'un conseiller, devenez le mentor des futurs leaders.
                            </p>

                            <Fade bottom delay={100}>
                                <div className="block-text-meeting">
                                    <Fade bottom delay={200}>
                                        <div className="w-30">
                                            <img src={team} className="pic-concept"/>
                                            {/*<h3 className="txt-w">Une équipe à ta disposition</h3> */}
                                            <h3 className="txt-w text-center">1. Inscrivez-vous en moins <br/>de deux minutes</h3>
                                            <p className="small-title-w text-center">
                                                Tout se fait en ligne, plongez au cœur d'un écosystème de projets et startups prometteurs .
                                            </p>
                                        </div>
                                    </Fade>

                                    <Fade  bottom delay={300}>
                                        <div className="w-30">
                                            <img src={invest} className="pic-concept"/>
                                            {/*<h3 className="txt-w">Des investisseurs au top</h3>*/}
                                            <h3 className="txt-w text-center">2. Configurez votre profil conseiller</h3>
                                            <p className="small-title-w text-center">
                                                Définnissez votre expertise en terme de levée de fonds, de secteur d'activité et de montant.
                                            </p>
                                        </div>
                                    </Fade>

                                    <Fade bottom delay={400}>
                                        <div className="w-30">
                                            <img src={consultant} className="pic-concept"/>
                                            {/*<h3 className="txt-w">Des conseillers dédiés</h3>*/}
                                            <h3 className="txt-w text-center">3. Coacher les startups <br/>en ligne</h3>
                                            <p className="small-title-w text-center">
                                                Rencontrez les fondateurs, découvrez leurs projets et trouver la stratégie parfaite.
                                            </p>
                                        </div>
                                    </Fade>
                                </div>
                                <a href="https://i59ic371bmw.typeform.com/to/dWincwIG" target="_blank">
                                    <button className="btn-cta-c">
                                        Commencer l'aventure
                                    </button>
                                </a>
                            </Fade>
                        </div>
                    </div>
                </Fade>
            </div>
        )
    }
}

export default ConceptInvestors