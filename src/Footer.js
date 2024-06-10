import React from 'react';
import logo from '../src/assets/white-logo.png'
import smallLogo from '../src/assets/new-web/logo-bold.png'
import {FaInstagram} from "react-icons/fa";
import { Link } from 'react-scroll';
import {BsFacebook, BsInstagram, BsLinkedin} from "react-icons/bs";
import {PiLinkedinLogoBold, PiSnapchatLogoBold, PiTiktokLogo} from "react-icons/pi";
import {FiFacebook, FiTwitter, FiYoutube} from "react-icons/fi";
import {AiOutlineInstagram, AiOutlineLinkedin} from "react-icons/ai";
import {Route} from "react-router-dom";
import Consultant from "./Consultant/Consultant";
import Subscribe from "./Subscribe";
class Footer extends React.Component {
    render() {
        return (
            <div className="section-footer">
                <footer id="footer" className="footer">

                    <div className="d-flex-desktop content-footer">
                        <div className="w-footer">
                            <a href="/"><img src={smallLogo} className="small-logo"/></a>
                        </div>

                        <div>
                            <p className="underline">En savoir plus</p>
                            <ul className="block-menu-footer">
                                <li><a className="lif" href="/">Fundherz</a></li>
                                <li><a className="lif" href="/fundeck">Fundeck.ai</a></li>
                            </ul>
                        </div>

                        <div>
                            <p className="underline">Contact</p>
                            <ul className="block-menu-footer">
                                <li><a className="lif" href="mailto:contact@fundherz.com">contact@fundherz.com</a></li>
                                <li className="lif" href="mailto:contact@fundherz.com">Demande de partenariat</li>
                                <li className="lif" href="mailto:contact@fundherz.com">Rejoindre l'équipe</li>
                            </ul>
                        </div>

                        <div>
                            <p className="underline">À propos</p>
                            <ul className="block-menu-footer">
                                <li>
                                    <a className="lif" href="/legalnotice">
                                        Mentions légales
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className="hr-footer"/>

                    <div className="d-flex-desktop justify-content-between content-icons-footer">
                        <a href="https://www.instagram.com/pitchersales/" target="_blank" className="lif" >
                            <FaInstagram className="icons-footer icon-instagram" />
                        </a>
                        <a href="https://www.linkedin.com/company/pitchersales/?viewAsMember=true" target="_blank" className="lif" >
                            <PiLinkedinLogoBold className="icons-footer icon-linkedin" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61552502016075" target="_blank" className="lif" >
                            <FiFacebook className="icons-footer icon-facebook" />
                        </a>
                    </div>

                    <p className="text-footer">
                        Fundherz agit en qualité de plateforme de mise en relation entre startups et investisseurs.
                        Notre mission est centrée sur la facilitation des échanges et la promotion d'opportunités d'investissement
                        innovantes. Bien que nous soyons engagés à connecter des porteurs de projets prometteurs avec des
                        investisseurs potentiels, il est important de noter que Fundherz ne fournit pas de services
                        financiers directement et n'agit pas en tant qu'intermédiaire financier. Notre rôle est purement consultatif,
                        visant à soutenir et à enrichir l'écosystème entrepreneurial.
                    </p>

                    <div className="block-footer">
                        <div className="d-flex">
                            <h2 className="pitchersales">©2024 | Fundherz</h2>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer