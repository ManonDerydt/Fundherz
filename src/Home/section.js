import React, {useState} from 'react';
import img1 from "../assets/new-web/section/founders.png";
import img2 from "../assets/new-web/section/investors.png";
import img3 from "../assets/new-web/section/organization.png";

class Section extends React.Component {

    render() {

        return (
            <div>
                <div className="content-constat">
                    <div>
                        <h2 className="title-content">Nos Convictions</h2>
                        <p >

                            Par leurs efforts les dirigeantes démontrent l’égalité face au succès. Par leurs actions, elles démontent les archaïsmes.
                            Par leur présence, elles encouragent les futures dirigeantes. Soutenir les fondatrices dans l’accès aux financements est nécessaire à la réussite économique et sociale de notre pays.

                            L’ambition s’apprend, le succès se travaille, l’égalité se construit.
                        </p>

                        <div className="d-flex-desktop content-block">
                            <div className="block1">
                                <img src={img1} className="img-section"/>
                                <h2 className="text-center">FOUNDERS</h2>
                                <p className="subtitle-section">
                                    Diminuez vos coûts d'acquisition de 50%, grâce à une tactique de
                                    parrainage qui transforme chaque client en un précieux partenaire.
                                </p>
                                <button className="btn-section">ça m'intéresse</button>
                            </div>
                            <div className="block2">
                            <img src={img2} className="img-section"/>
                                <h2 className="text-center">INVESTORS</h2>
                                <p className="subtitle-section">
                                Diminuez vos coûts d'acquisition de 50%, grâce à une tactique de
                                    parrainage qui transforme chaque client en un précieux partenaire.
                                </p>
                                <button className="btn-section">ça m'intéresse</button>
                            </div>
                            <div className="block3">
                                <img src={img3} className="img-section"/>
                                <h2 className="text-center">ASSOCIATIONS</h2>
                                <p className="subtitle-section">
                                    Diminuez vos coûts d'acquisition de 50%, grâce à une tactique de
                                    parrainage qui transforme chaque client en un précieux partenaire.
                                </p>
                                <button className="btn-section">ça m'intéresse</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Section

