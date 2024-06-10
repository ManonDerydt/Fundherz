import React, {useState} from 'react';
import Fade from "react-reveal/Fade";


class Slogan extends React.Component {

    render() {

        return (
            <div>
                <div className="d-flex-desktop content-slogan">
                        <h2 className="title-slogan">
                            <Fade bottom>
                                Ensemble, œuvrons pour la parité dans le monde des levées de fonds.
                            </Fade>
                        </h2>
                </div>
            </div>
        )
    }
}

export default Slogan

