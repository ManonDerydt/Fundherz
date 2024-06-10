import React, {useState} from 'react';
import pic1 from '../assets/offers/glass-eyes.png'
import pic2 from '../assets/offers/heart-eyes.png'
import pic3 from '../assets/offers/stars-eyes.png'
import check from '../assets/yellow-check.png'
import cadenas from '../assets/cadenas.png'
import Fade from "react-reveal/Fade";
import volt from "../assets/new-web/volt.png";

class Header extends React.Component {
    render() {

        return (
            <div>
                <Fade bottom>
                    <div className="content-offers">
                        <h2 className="color-black text-center title-financement">L'offre qui<br/><span
                            className="violet-color">vous correspond</span></h2>
                        <div className="content-block-offers">
                            <Fade bottom delay={200}>
                                <div className="block-tarif">
                                    <div className="text-center">
                                        <div className="d-flex-desktop w-100">
                                            <div className="emoji-offers"></div>
                                            <div className="d-flex-desktop d-flex-mobile w-100">
                                                <div className="content-offers-price">
                                                    <h3 className="title-offers-price tittle-offers-1">Finacements publics</h3>
                                                    <h3 className="price">2000 €</h3>
                                                    <p className="small-title-offers">Atteignez entre 20.000 et 100.000 €</p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="hr"/>
                                        <div className="text-left text-offers">
                                            <div className="d-flex-desktop d-flex-mobile justify-content-between">
                                                <p className="m-b-0 small-txt-offers">Le parcours de 15h</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop d-flex-mobile justify-content-between">
                                                <p className="m-b-0 small-txt-offers">Financement non dilutifs</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>

                                            <div className="d-flex-desktop  d-flex-mobile justify-content-between">
                                                <p className="m-b-0 small-txt-offers">Création des documents adaptés</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>

                                            <div className="d-flex-desktop d-flex-mobile justify-content-between">
                                                <p className="m-b-0 small-txt-offers">Financement entre 3 à 6 mois</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>

                                            <div className="d-flex-desktop d-flex-mobile justify-content-between">
                                                <p className="m-b-0 small-txt-offers">Accès à la communauté Fundherz</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>

                                            <div className="d-flex-desktop d-flex-mobile justify-content-between">
                                                <p className="m-b-0 small-txt-offers">Accès à nos événements exclusifs </p>
                                                <img src={check} className="yellow-check"/>
                                            </div>

                                            <div
                                                className="d-flex-desktop d-flex-mobile d-flex-mobile justify-content-between">
                                                <img src={cadenas} className="yellow-check"/>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Fade>

                            <Fade bottom delay={300}>
                                <div className="block-tarif">
                                    <div className=" text-center">
                                        <div className="d-flex-desktop w-100">
                                            <div className="emoji-offers"></div>
                                            <div className="d-flex-desktop d-flex-mobile w-100">
                                                {/*<div className="content-title-offers-block1 block-2">*/}
                                                {/*    <img src={pic2} className="bitmoji"/>*/}
                                                {/*</div>*/}
                                                <div className="content-offers-price">
                                                    <h3 className="title-offers-price tittle-offers-2">Finacements
                                                        privés</h3>
                                                    <h3 className="price">1800€</h3>
                                                    <p className="small-title-offers">Paiement en plusieurs fois
                                                        possible</p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="hr"/>
                                        <div className="text-left text-offers">
                                            <div className="d-flex-desktop d-flex-mobile justify-content-between">
                                                <p className="m-b-0 small-txt-offers">Deux meetings devant <span
                                                    className="light-blue">10 investisseurs</span></p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop d-flex-mobile justify-content-between">
                                                <p className="m-b-0 small-txt-offers">Une sélection d'investisseurs
                                                    dédiés</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop d-flex-mobile justify-content-between">
                                                <p className="m-b-0 small-txt-offers">Accès à la communauté
                                                    Pitchersales</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop d-flex-mobile justify-content-between">
                                                <p className="m-b-0 small-txt-offers">Des créneaux selons vos
                                                    horaires</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>

                                            <div className="d-flex-desktop d-flex-mobile justify-content-between">
                                                <p className="m-b-0 small-txt-offers">Promotion de l'entreprise sur nos
                                                    réseaux </p>
                                                <img src={check} className="yellow-check"/>
                                            </div>

                                            <div className="d-flex-desktop d-flex-mobile justify-content-between">
                                                <p className="m-b-0 small-txt-offers">Coaching personnalisé</p>
                                                <img src={cadenas} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop d-flex-mobile justify-content-between">
                                                <p className="m-b-0 small-txt-offers">Support et deck de
                                                    présentation</p>
                                                <img src={cadenas} className="yellow-check"/>
                                            </div>

                                            <div className="d-flex-desktop d-flex-mobile justify-content-between">
                                                <p className="m-b-0 small-txt-offers">Accès à des événements
                                                    exclusifs </p>
                                                <img src={cadenas} className="yellow-check"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>

                            <Fade bottom delay={400}>
                                <div className="block-tarif">
                                    <div className=" text-center">
                                        <div className="d-flex-desktop w-100">
                                            <div className="d-flex-desktop d-flex-mobile w-100">
                                                {/*<div className="content-title-offers-block1 block-3">*/}
                                                {/*    <img src={pic3} className="bitmoji"/>*/}
                                                {/*</div>*/}
                                                <div className="content-offers-price">
                                                    <h3 className="title-offers-price tittle-offers-3">Finacements privé
                                                        & publics</h3>
                                                    <h3 className="price">3000€</h3>
                                                    <p className="small-title-offers">Paiement en plusieurs fois
                                                        possible</p>
                                                </div>
                                                {/*<div className="content-title-offers-block1 block-3">*/}
                                                {/*    <img src={pic3} className="bitmoji"/>*/}
                                                {/*</div>*/}
                                                {/*<div className="content-offers-price">*/}
                                                {/*    <h3 className="tittle-offers-3">Offre Gold</h3>*/}
                                                {/*    <h3 className="price">3000€</h3>*/}
                                                {/*    <p className="small-title-offers">Paiement en plusieurs fois possible</p>*/}
                                                {/*</div>*/}

                                            </div>
                                        </div>
                                        <hr className="hr"/>

                                        <div className="text-left text-offers">
                                            <div className="d-flex-desktop d-flex-mobile justify-content-between">
                                                <p className="m-b-0 small-txt-offers">Trois meetings devant <span
                                                    className="violet-color">15 investisseurs</span></p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop d-flex-mobile justify-content-between">
                                                <p className="m-b-0 small-txt-offers">Une sélection d'investisseurs
                                                    dédiés</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop d-flex-mobile justify-content-between">
                                                <p className="m-b-0 small-txt-offers">Accès à la communauté
                                                    Pitchersales</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop d-flex-mobile justify-content-between">
                                                <p className="m-b-0 small-txt-offers">Des créneaux selons vos
                                                    horaires</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>

                                            <div className="d-flex-desktop d-flex-mobile justify-content-between">
                                                <p className="m-b-0 small-txt-offers">Promotion de l'entreprise sur nos
                                                    réseaux </p>
                                                <img src={check} className="yellow-check"/>
                                            </div>

                                            <div className="d-flex-desktop d-flex-mobile justify-content-between">
                                                <p className="m-b-0 small-txt-offers">Coaching personnalisé</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                            <div className="d-flex-desktop d-flex-mobile justify-content-between">
                                                <p className="m-b-0 small-txt-offers">Support et deck de
                                                    présentation</p>
                                                <img src={check} className="yellow-check"/>
                                            </div>

                                            <div className="d-flex-desktop d-flex-mobile justify-content-between">
                                                <p className="m-b-0 small-txt-offers">Accès à des événements
                                                    exclusifs </p>
                                                <img src={check} className="yellow-check"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>

                </Fade>

            </div>
        )
    }
}

export default Header