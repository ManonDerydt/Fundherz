import React, {useState} from 'react';
import img1 from "../assets/new-web/logo-transparent/edlv.png";
import img2 from "../assets/new-web/logo-transparent/bpi.png";
import img3 from "../assets/new-web/logo-transparent/emlyon.png";
import img4 from "../assets/new-web/logo-transparent/famig.png";
import img5 from "../assets/new-web/logo-transparent/stationf.png";
import img6 from "../assets/new-web/logo-transparent/frenchtech.png";
import img7 from "../assets/willa.png";
import img8 from "../assets/fba.png";
import img9 from "../assets/investessor.png";
import Fade from "react-reveal/Fade";


class Carousel extends React.Component {

    render() {

        return (
            <div>

                    <div className="d-flex-desktop content-carousel">
                        <Fade bottom>
                            <img src={img1} className="img-carrousel"/>
                            <img src={img2} className="img-carrousel"/>
                            <img src={img7} className="img-carrousel"/>
                            <img src={img4} className="img-carrousel"/><br className="mobile-only"/>
                            <img src={img5} className="img-carrousel"/>
                            <img src={img6} className="img-carrousel"/>
                            <img src={img8} className="img-carrousel"/>
                        </Fade>
                    </div>


            </div>
        )
    }
}

export default Carousel

