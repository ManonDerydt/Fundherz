import React, { useState, useRef, useEffect } from 'react';
import Fade from "react-reveal/Fade";
import logo from "../assets/F (2).png";
import cross from "../assets/cross.png";
import Footer from "../Footer";
import Slogan from "./slogan";
import Step from "./step";
import Expert from "../new/experts";
import Financement from "./Financement";
import Timeline from "./Timeline";
import Reequilibre from "./Reequilibre";
import img1 from "../assets/new-web/logo-transparent/edlv.png";
import img2 from "../assets/new-web/logo-transparent/bpi.png";
import img3 from "../assets/new-web/logo-transparent/emlyon.png";
import img4 from "../assets/new-web/logo-transparent/famig.png";
import img5 from "../assets/new-web/logo-transparent/stationf.png";
import img6 from "../assets/new-web/logo-transparent/frenchtech.png";
import img7 from "../assets/willa.png";
import img8 from "../assets/fba.png";
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';

const Header = () => {
    const [showIframe, setShowIframe] = useState(false);
    const [showIframeInvestors, setShowIframeInvestors] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const financementRef = useRef(null);

    const handleTypeformClick = () => {
        setShowIframe(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseIframe = () => {
        setShowIframe(false);
        document.body.style.overflow = 'auto';
    };

    const handleTypeformClickInvestors = () => {
        setShowIframeInvestors(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseIframeInvestor = () => {
        setShowIframeInvestors(false);
        document.body.style.overflow = 'auto';
    };

    const scrollToFinancement = () => {
        financementRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="mobile-only">
                <div className="content-menu-mobile">
                    <button className="btn" onClick={() => window.location.href = "/"}>
                        <img src={logo} className="logo" alt="pitchersales"/>
                    </button>
                    <div className={`menu-burger ${isScrolled ? 'scrolled' : ''}`}>
                        <Hamburger toggled={isMenuOpen} toggle={toggleMenu} className="menu-burger"/>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMenuOpen ? 'show-menu' : ''}`}>
                    <button className="mobile-menu-button" onClick={() => { toggleMenu(); scrollToFinancement(); }}>
                        Découvrir
                    </button><br/>
                    <button className="mobile-menu-button" onClick={() => { toggleMenu(); handleTypeformClick(); }}>
                        Obtenir des financements
                    </button><br/>
                </div>
            </div>

            <div className="container">
                <div className="content-header-Investors content-header d-flex-desktop">
                    <div className="d-flex-desktop style-menu">
                        <button className="btn" onClick={() => window.location.href = "/"}>
                            <img src={logo} className="logo" alt="pitchersales" />
                        </button>
                        <div className="d-flex-desktop content-link-menu content-menu-desktop">
                            <button id="projectHolder" className="isMenuOpen menu-li text-btn-header btn-discover" onClick={scrollToFinancement}>
                                Découvrir
                            </button>
                            <button id="projectHolder" className="isMenuOpen menu-li text-btn-header violet-color get-money-btn" onClick={handleTypeformClick}>
                                Obtenir des financements
                            </button>
                        </div>
                    </div>

                    <div className="button-container-investors">
                        <div>
                            <h2 className="big-title-investors big-title">
                                <span>Ensemble, rééquilibrons les statistiques du financement.</span>
                            </h2>
                            <p className="subtitle-header">
                                Les femmes méritent les moyens et le soutien pour lever des fonds et
                                <span className="bold"> concrétiser leurs ambitions.</span>
                            </p>
                        </div>
                        <div className="element-2">
                            <div className="buttons-investors d-flex-desktop">
                                <Fade bottom>
                                    <button className="mix-btn selected-button btn-boss" onClick={handleTypeformClick}>
                                        <p>Je veux lever des fonds</p>
                                    </button>
                                    <button className="mix-btn btn-investor" onClick={handleTypeformClickInvestors}>
                                        <p>Je veux investir</p>
                                    </button>
                                </Fade>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex-desktop content-carousel">
                        <Fade bottom>
                            <img src={img1} className="img-carrousel" />
                            <img src={img2} className="img-carrousel" />
                            <img src={img7} className="img-carrousel" />
                            <img src={img4} className="img-carrousel" />
                            <br className="mobile-only" />
                            <img src={img5} className="img-carrousel" />
                            <img src={img6} className="img-carrousel" />
                            <img src={img8} className="img-carrousel" />
                        </Fade>
                    </div>
                </div>

                {showIframe && (
                    <Fade right>
                        <div className="typeform-overlay">
                            <div className="typeform-container">
                                <iframe
                                    id="typeform-iframe"
                                    src="https://i59ic371bmw.typeform.com/to/s7B7i5Vw"
                                    style={{ width: '100%', height: '100%', border: 'none' }}
                                    title="TypeForm"
                                />
                                <a className="close-button" onClick={handleCloseIframe}>
                                    <img src={cross} className="cross-form" alt="close" />
                                </a>
                            </div>
                        </div>
                    </Fade>
                )}

                {showIframeInvestors && (
                    <Fade right>
                        <div className="typeform-overlay">
                            <div className="typeform-container">
                                <iframe
                                    id="typeform-iframe"
                                    src="https://i59ic371bmw.typeform.com/to/tZESMz40"
                                    style={{ width: '100%', height: '100%', border: 'none' }}
                                    title="TypeForm"
                                />
                                <a className="close-button" onClick={handleCloseIframeInvestor}>
                                    <img src={cross} className="cross-form" alt="close" />
                                </a>
                            </div>
                        </div>
                    </Fade>
                )}

                <Slogan />
                <Reequilibre onCta={handleTypeformClick} />
                <div ref={financementRef}>
                    <Financement />
                </div>
                <Timeline />
                <Expert />
                <Step />
                <Footer />
            </div>
        </div>
    );
};

export default Header;
