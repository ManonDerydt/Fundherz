import React, {useState} from 'react';
import test from "../assets/test-r.png";
import yellowG from "../assets/header/10.png"
import yellowO from "../assets/header/11.png"
import whiteG from "../assets/header/12.png"
import whiteO from "../assets/header/13.png"
import MenuHome from "./Menu-home";
import BannerC from "../Consultant/Banner-C";
import Content from "./content";
import Footer from "../Footer";
import Love from "./love";
import Join from "./join";
import Wework from "./wework";
import MenuInvestors from "../Investors/MenuInvestors";
import Constat from "./Constat";
import Carousel from "./Carousel";
import Slogan from "./slogan";
import Section from "./section";
import Fade from "react-reveal/Fade";
import Step from "./step";
import Expert from "../new/experts";
import Financement from "./Financement";
import Offers from "./Offers";

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
        const { selected } = this.state;

        let imageG = selected === 'investisseur' ? whiteG : yellowG;
        let imageO = selected === 'startup' ? whiteO : yellowO;

        return (
            <div>
                <div className="container">
                    <MenuInvestors/>
                    <div className="content-header-Investors content-header d-flex-desktop">

                        <div className="button-container-investors">
                            <div>
                                <h2 className="big-title-investors big-title">FUNDHERZ, <br/><span
                                    className="violet-color">Le financement pour <br/> les femmes tech et non tech </span>
                                </h2>
                                {/*<p className="subtitle-header">On est convaincus : quelque soit le niveau de votre projet,*/}
                                {/*    on peut vous aider à <span className="bold">lever des fonds sans stress.</span></p>*/}

                            </div>
                            <div className="element-2">
                                <div className="buttons-investors d-flex-desktop">
                                    <Fade bottom>
                                        <button
                                            className={selected === 'investisseur' ? 'mix-btn selected-button' : 'mix-btn deselected-button mix-btn-deselected'}
                                            // onClick={() => {
                                            //     window.open('https://i59ic371bmw.typeform.com/to/dWincwIG', '_blank');
                                            // }}
                                        >
                                            {/*<img src={imageG} className="icon-btn-menu" />*/}
                                            💵 Les financements adaptés
                                        </button>
                                    </Fade>

                                    <Fade bottom delay={200}>
                                        <button
                                            className={selected === 'investisseur' ? 'mix-btn selected-button' : 'mix-btn deselected-button mix-btn-deselected'}
                                        >
                                            {/*<img src={imageG} className="icon-btn-menu" />*/}
                                            🤝🏻 Un accompagnement sur-mesure
                                        </button>
                                    </Fade>

                                    <Fade bottom delay={300}>
                                        <button
                                            className={selected === 'investisseur' ? 'mix-btn selected-button' : 'mix-btn deselected-button mix-btn-deselected'}
                                        >
                                            {/*<img src={imageG} className="icon-btn-menu" />*/}

                                            🚀 Le paiement qui vous correspond
                                        </button>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                        {/*<div className="content-img-header-investors">*/}
                        {/*    <img src={screen} className="screen"/>*/}
                        {/*</div>*/}
                    </div>

                    <Carousel/>
                    <Slogan/>
                    <Constat/>
                    <BannerC/>
                    <Financement/>
                    {/*<Offers/>*/}

                    <Expert/>
                    <Step/>
                    {/*<Content/>*/}
                    {/*<Section/>*/}
                    <Love/>
                    <Join/>

                    {/*<Wework/>*/}
                    <Footer/>

                </div>
            </div>
        )
    }
}

export default Header

