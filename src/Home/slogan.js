import React, {useState} from 'react';
import Fade from "react-reveal/Fade";


class Slogan extends React.Component {

    render() {

        return (
            <div>
                <div className=" content-slogan">
                        <div className="title-slogan d-flex-desktop justify-content-between">

                                <div>
                                    <Fade bottom bottom delay={500}>
                                    <span className="seven">7%</span>
                                    <p className="txt-slogan">
                                        Les équipes exclusivement féminines <br/>concentrent uniquement 7% des fonds.
                                    </p>
                                    </Fade>
                                </div>

                                <div>
                                    <Fade bottom delay={900}>
                                        <span className="seven">2%</span>
                                        <p className="txt-slogan">
                                            Elles ne représentent que 2% <br/>des financements totaux.
                                        </p>
                                    </Fade>
                                </div>

                                <div>
                                    <Fade bottom delay={1300}>
                                        <span className="seven">1Mds d'€</span>
                                        <p className="txt-slogan">
                                            Notre mission : Lever 1 milliard d’euros <br/>pour donner aux femmes les moyens de <br/>transformer
                                            leurs idées en succès.
                                        </p>
                                    </Fade>

                                </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Slogan

