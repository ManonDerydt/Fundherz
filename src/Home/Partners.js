import React from 'react';
import Fade from "react-reveal/Fade";
import bg from "../assets/solution/pic-14.png"

class Partners extends React.Component {
    render() {
        return (
            <div className="">
                <Fade bottom delay={200}>
                    <div className="solutions">
                        <div id="step" className="content-solutions d-flex-desktop">
                            <div className="block-1-solution">
                                <h2 className="title-step">Dépasse tes limites et ose le pas<span className="color-orange"><br/>Pitchersales te soutient.</span></h2>
                                <p className="txt-solutions">
                                    Ton succès est notre priorité, nous sommes là pour t'épauler. Quelque soit ton niveau, nous nous chargeons de l'organisation, de la mise en place de tes présentations et de ton parcours de financement.
                                </p>
                                <a href="https://i59ic371bmw.typeform.com/to/dWincwIG" target="_blank">
                                    <button className="btn-cta-end">Je découvre</button>
                                </a>
                            </div>

                            <img src={bg} className="gift"/>
                        </div>
                    </div>
                </Fade>
            </div>
        )
    }
}

export default Partners

