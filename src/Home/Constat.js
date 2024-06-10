import React, {useState} from 'react';
import img from "../assets/girls.jpg";
import volt from "../assets/violet-volt.png";
import Fade from "react-reveal/Fade";

class Constat extends React.Component {

    render() {

        return (
            <div className="content-constat">
                <div className="d-flex-desktop content-constat">
                    <img src={img} className="img-constat"/>
                        <div className="txt-constat">
                            <h2 className="title-constat text-left">Engageons-nous pour des<br/><span className="violet-color">financements équitables</span>
                            </h2>
                            <p className="text-constat color-black">
                                En France, comme en Europe, les femmes entrepreneures se heurtent à des
                                obstacles importants lorsqu'il s'agit de lever des fonds. Les données parlent d'elles-mêmes :
                            </p>

                            <ul className="text-constat color-black">
                                <Fade bottom>
                                    <li className="m-t-5 li-type">
                                        <img src={volt} className="violet-volt"/>84% des montants levés sont attribués à
                                        des équipes 100% masculines
                                    </li>
                                </Fade>

                                <Fade bottom delay={300}>
                                    <li className="m-t-5 li-type"><img src={volt} className="violet-volt"/>Le montant
                                        moyen
                                        levé par
                                        les équipes 100% féminines est
                                        environ quatre fois inférieur à celui de leurs homologues masculins
                                    </li>
                                </Fade>

                                <Fade bottom delay={500}>
                                    <li className="m-t-5 li-type"><img src={volt} className="violet-volt"/>Moins d'un
                                        cinquième des
                                        fonds levés chaque année sont attribués à des équipes
                                        comprenant une femme
                                    </li>
                                </Fade>

                            </ul>

                            <p className="text-constat color-black m-t-5">
                                Notre mission est de faciliter l'accès aux levées de fonds pour les femmes
                                entrepreneures dont les startups sont en phase de seed et pre-seed.
                            </p>

                        </div>

                </div>

            </div>
        )
    }
}

export default Constat

