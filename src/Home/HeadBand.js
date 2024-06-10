import React from 'react';
import Fade from "react-reveal/Fade";
class Headband extends React.Component {
    render() {
        return (
            <div className="content-headband">
                <Fade top>
                    <h2 className="text-container"> Il est temps d'accéder <span className="color-orange">à l'argent.</span></h2>
                </Fade>
            </div>
        )
    }
}

export default Headband