import React from 'react';
import Fade from "react-reveal/Fade";

class Community extends React.Component {
    render() {
        return (
            <div className="section-community">
                <div className="d-flex-desktop">
                    <Fade bottom>
                        <div className="d-flex-desktop content-community">
                            <div className="text-com">
                                <h2 className="title-com">Arrivé jusqu'ici, il vous reste <br/><span className="color-orange">3 options.</span></h2>
                                <p className="txt-com">
                                    1. Vous restez rétrogrades et gardez vos fonctionnements désuets.<br/>
                                    2. Vous ne faites rien et ne soutenez pas les nouvelles initiatives.<br/>
                                    3. Vous rejoingnez Pitchersales et accédez régulièrement à de nouveaux projets d'investissement, seul ou en groupe. Soutenez l'entrepreneuriat.
                                    {/*à passer à côté de potentielles opportunités innovantes.*/}
                                </p>
                                <button className="btn-com">Découvrir les projets</button>
                            </div>

                            <div className="d-flex-desktop content-img-com">
                                {/*<img src={pic1} className="pic-header"/>*/}
                                {/*<img src={pic1} className="pic-header"/>*/}
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Community
