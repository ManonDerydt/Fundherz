import React, {useState} from 'react';
import fusee from "../assets/new-web/fusée.png"
import hand from "../assets/new-web/hand.png"
import money from "../assets/new-web/money.png"
import Fade from "react-reveal/Fade";
class Content extends React.Component {

    render() {

        return (
            <div className="content-main">
                <h2 className="color-black text-center title-crit ">Critères <br/><span className="violet-color">de sélection</span></h2>


                <div className="d-flex-desktop content-icons">
                    <div className="content-items">
                        <Fade bottom delay={100}>
                            <img src={fusee} className="img-content"/>
                        </Fade>

                        <h2 className="mini-title-content-icons color-black">Conversion</h2>

                        <p className="text-icons">
                            Faites x4 sur votre conversion pour l'ensemble des clients qui optent pour le parrainage au
                            moment du paiement.
                        </p>
                    </div>
                    <div className="content-items">
                        <Fade bottom delay={300}>
                            <img src={hand} className="img-content"/>
                        </Fade>
                        <h2 className="mini-title-content-icons color-black">Réduction</h2>

                        <p className="text-icons">
                            Diminuez vos coûts d'acquisition de 50%, grâce à une tactique de parrainage qui transforme
                            chaque client en un précieux partenaire.
                        </p>
                    </div>
                    <div className="content-items">
                        <Fade bottom delay={500}>
                            <img src={money} className="img-content"/>
                        </Fade>

                        <h2 className="mini-title-content-icons color-black">Clients</h2>

                        <p className="text-icons">
                            Valorisez vos meilleurs prescripteurs et mettez en lumière ceux qui portent haut vos
                            couleurs.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content

