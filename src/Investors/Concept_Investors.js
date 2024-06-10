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
                                <h2 className="special-color title-offers">Une nouvelle manière <br/><span className="violet-color">d'investir efficacement.</span></h2>
                            </div>

                            <p className="text-concept">
                                Aujourd'hui, trouver les bonnes startups/projets dans lesquels investir est compliqué. Cela nécessite une veille constante, du temps et un large réseau.
                                Avec Pitchersales, ce processus est révolutionné ! Plus besoin de chercher activement les meilleures opportunités. Elles viennent à vous,
                                vous permettant d'interagir et d'évaluer les startups/projets à fort potentiel lors de meetings en ligne. L'investissement ne se limite plus aux
                                propositions bien connues ou aux recommandations de réseau. Avec nous, découvrez et capitalisez sur les pépites de demain.
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
                                            <h3 className="txt-w text-center">2. Configurez votre profil d'investisseur</h3>
                                            <p className="small-title-w text-center">
                                                Personnalisez vos préférences en termes de secteur, du stade de maturité et d'investissement.
                                            </p>
                                        </div>
                                    </Fade>

                                    <Fade bottom delay={400}>
                                        <div className="w-30">
                                            <img src={consultant} className="pic-concept"/>
                                            {/*<h3 className="txt-w">Des conseillers dédiés</h3>*/}
                                            <h3 className="txt-w text-center">3. Écoutez les pitchs <br/>en ligne et lancez-vous</h3>
                                            <p className="small-title-w text-center">
                                                Rencontrez les fondateurs, découvrez leurs projets et selon vos intérêts, positionnez-vous seul ou en groupe.
                                            </p>
                                        </div>
                                    </Fade>
                                </div>
                                <a href="https://i59ic371bmw.typeform.com/to/dWincwIG" target="_blank">
                                    <button className="btn-cta-i">
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