import React, {useEffect, useState} from 'react';
import logo from "../assets/F (2).png";
import Footer from "../Footer";
import Slogan from "./slogan";
import Fade from "react-reveal/Fade";
import Step from "./step";
import Expert from "../new/experts";
import Financement from "./Financement";
import Offers from "./Offers";
import {Link} from "@mui/material";
import Timeline from "./Timeline";
import img1 from "../assets/new-web/logo-transparent/edlv.png";
import img2 from "../assets/new-web/logo-transparent/bpi.png";
import img3 from "../assets/new-web/logo-transparent/emlyon.png";
import img4 from "../assets/new-web/logo-transparent/famig.png";
import img5 from "../assets/new-web/logo-transparent/stationf.png";
import img6 from "../assets/new-web/logo-transparent/frenchtech.png";
import img7 from "../assets/willa.png";
import img8 from "../assets/fba.png";
import img9 from "../assets/investessor.png";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: "investisseur",
        };
    }

    selectOption(option) {
        this.setState({ selected: option });
    }

    render() {

        // const { selected } = this.state;
        //
        // let imageG = selected === 'investisseur' ? whiteG : yellowG;
        // let imageO = selected === 'startup' ? whiteO : yellowO;
        //
        // const MenuInvestors = () => {
        // const [isMenuOpen, setMenuOpen] = useState(false);
        // const [activeButton, setActiveButton] = useState('');
        //
        // const toggleMenu = () => {
        // setMenuOpen(prevState => !prevState);
        //
        // const handleSetActiveButton = (buttonId) => {
        //     setActiveButton(buttonId);
        // }


    // const [isScrolled, setIsScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 50) {
    //             setIsScrolled(true);
    //         } else {
    //             setIsScrolled(false);
    //         }
    //     };
    //
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
            <div>
                <div className="container">

                    <div className="content-header-Investors content-header d-flex-desktop">
                        <div className="d-flex-desktop style-menu">
                            <Link to="/">
                                <button className="btn"><img src={logo} className="logo" alt="pitchersales"/></button>
                            </Link>
                            <div className="d-flex-desktop content-link-menu content-menu-desktop">
                                <Link to="/">
                                    <button
                                        className="show-menu menu-li"
                                    >
                                        Fundherz
                                    </button>
                                </Link>
                                <Link to="fundeck">
                                    <button
                                        id="projectHolder"
                                        className="isMenuOpen menu-li"
                                    >
                                        Fundeck.AI
                                    </button>
                                </Link>

                                <Link to="fundeck">
                                    <button
                                        id="projectHolder"
                                        className="isMenuOpen menu-li"
                                    >
                                        Découvrir
                                    </button>
                                </Link>
                            </div>
                        </div>


                        <div className="button-container-investors">
                            <div>
                                <h2 className="big-title-investors big-title"><span
                                    className="">Ensemble, rééquilibrons les <br/>statistiques du financement.</span>
                                </h2>
                                <p className="subtitle-header">
                                    Les femmes méritent les moyens et le soutien pour lever des fonds et <span className="bold"> concrétiser leurs ambitions.
                                        </span></p>

                            </div>
                            <div className="element-2">
                                <div className="buttons-investors d-flex-desktop">
                                    <Fade bottom>
                                        <button
                                            className="mix-btn selected-button"
                                            // onClick={() => {
                                            //     window.open('https://i59ic371bmw.typeform.com/to/dWincwIG', '_blank');
                                            // }}
                                        >
                                            <p className="text-btn-header rainbow-color">
                                                Je veux lever des fonds
                                            </p>
                                            {/*<img src={imageG} className="icon-btn-menu" />*/}

                                        </button>
                                    </Fade>

                                    <Fade bottom delay={200}>
                                        <button
                                            className="mix-btn btn-investor"
                                        >
                                            <p className="text-btn-header color-black">
                                                Je veux investir
                                            </p>
                                            {/*<img src={imageG} className="icon-btn-menu" />*/}
                                        </button>
                                    </Fade>

                                    {/*<Fade bottom delay={300}>*/}
                                    {/*    <button*/}
                                    {/*        className={selected === 'investisseur' ? 'mix-btn selected-button' : 'mix-btn deselected-button mix-btn-deselected'}*/}
                                    {/*    >*/}
                                    {/*        /!*<img src={imageG} className="icon-btn-menu" />*!/*/}

                                    {/*        🚀 Le paiement qui vous correspond*/}
                                    {/*    </button>*/}
                                    {/*</Fade>*/}
                                </div>
                            </div>
                        </div>
                        {/*<div className="content-img-header-investors">*/}
                        {/*    <img src={screen} className="screen"/>*/}
                        {/*</div>*/}

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

                    <Slogan/>
                    {/*<Constat/>*/}
                    {/*<BannerC/>*/}
                    <Financement/>
                    {/*<Offers/>*/}
                    <Timeline/>
                    <Expert/>
                    <Step/>
                    {/*<Content/>*/}
                    {/*<Section/>*/}
                    {/*<Love/>*/}
                    {/*<Join/>*/}

                    {/*<Wework/>*/}
                    <Footer/>
                </div>
            </div>
    )
    }
}

export default Header

