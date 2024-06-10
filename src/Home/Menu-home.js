import React, {useEffect, useState} from 'react';
import logo from "../assets/logo-3.png";
import { Link, withRouter } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import menu from "../assets/menu.png";

const MenuConsultant = ({ location }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [activeButton, setActiveButton] = useState('');

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    }
    const handleSetActiveButton = (buttonId) => {
        setActiveButton(buttonId);
    }

    useEffect(() => {
        const body = document.body;
        body.classList.remove('show-loader');
    }, [location]);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
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
                    <img src={logo} className="logo"/>
                    <div className={`menu-burger ${isScrolled ? 'scrolled' : ''}`}>
                        <Hamburger toggled={isMenuOpen} toggle={toggleMenu} className="menu-burger" />
                    </div>
                </div>
                {/* Menu mobile */}
                <div className={`mobile-menu ${isMenuOpen ? 'show-menu' : ''}`}>
                    <Link to="/" onClick={toggleMenu}>
                        <button className="mobile-menu-button">
                            Porteur de projet
                        </button>
                    </Link><br/>
                    <Link to="/investors" onClick={toggleMenu}>
                        <button className="mobile-menu-button">
                            Investisseurs
                        </button>
                    </Link><br/>
                    {/*<Link to="/consultant" onClick={toggleMenu}>*/}
                    {/*    <button className="mobile-menu-button">*/}
                    {/*        Conseillers*/}
                    {/*    </button>*/}
                    {/*</Link><br/>*/}
                    <a className="link-btn-menu" href="https://i59ic371bmw.typeform.com/to/dWincwIG" target="_blank"><button className="mobile-menu-button home-btn-menu-mobile" onClick={toggleMenu}>Je m'inscris</button></a>
                </div>
            </div>

            <div className={`desktop-only ${isMenuOpen ? 'show-menu' : ''}`}>
                <div className="d-flex-desktop style-menu">
                    <Link to="/"><button className="btn"><img src={logo} className="logo" alt="pitchersales" /></button></Link>
                    <div className="d-flex-desktop content-link-menu content-menu-desktop">
                        <Link to="/">
                            <button
                                id="projectHolder"
                                className={`join-us ${activeButton === 'projectHolder' ? 'active-home' : ''}`}
                                onClick={() => handleSetActiveButton('projectHolder')}
                            >
                                Porteur de projet
                            </button>
                        </Link>
                        <Link to="/investors">
                            <button
                                id="investors"
                                className={`join-us ${activeButton === 'investors' ? 'active-home' : ''}`}
                                onClick={() => handleSetActiveButton('investors')}
                            >
                                Investisseurs
                            </button>
                        </Link>
                        {/*<Link to="/consultant">*/}
                        {/*    <button*/}
                        {/*        id="consultants"*/}
                        {/*        className={`join-us ${activeButton === 'consultants' ? 'active-home' : ''}`}*/}
                        {/*        onClick={() => handleSetActiveButton('consultants')}*/}
                        {/*    >*/}
                        {/*        Conseillers*/}
                        {/*    </button>*/}
                        {/*</Link>*/}
                       <a className="link-btn-menu" href="https://i59ic371bmw.typeform.com/to/dWincwIG" target="_blank"><button className="btn-menu-subscribe btn-menu-subscribe-h">Je m'inscris</button></a>
                    </div>
                </div>
            </div>

            <div className="tablette-only">
                <div className="content-menu-mobile">
                    <img src={logo} className="logo"/>
                    <Hamburger toggled={isMenuOpen} toggle={toggleMenu} className="menu-burger" />
                </div>
                {/* Menu mobile */}
                <div className={`mobile-menu ${isMenuOpen ? 'show-menu' : ''}`}>
                    <Link to="/" onClick={toggleMenu}>
                        <button className="mobile-menu-button">
                            Porteur de projet
                        </button>
                    </Link><br/>
                    <Link to="/investors" onClick={toggleMenu}>
                        <button className="mobile-menu-button">
                            Investisseurs
                        </button>
                    </Link><br/>
                    {/*<Link to="/consultant" onClick={toggleMenu}>*/}
                    {/*    <button className="mobile-menu-button">*/}
                    {/*        Conseillers*/}
                    {/*    </button>*/}
                    {/*</Link><br/>*/}
                    <a className="link-btn-menu" href="https://i59ic371bmw.typeform.com/to/dWincwIG" target="_blank"><button className="mobile-menu-button home-btn-menu-mobile" onClick={toggleMenu}>Je m'inscris</button></a>
                </div>
            </div>
        </div>
    );
}

export default withRouter(MenuConsultant);