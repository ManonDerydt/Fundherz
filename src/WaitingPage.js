import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pic1 from "../src/assets/header/14.png";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaInstagram, FaChevronRight } from "react-icons/fa";

function WaitingPage() {
    const [email, setEmail] = useState('');

    const isValidEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!isValidEmail(email)) {
            toast.error("Veuillez entrer une adresse e-mail valide.");
            return;
        }

        const data = {
            fields: {
                "Email": email,
            }
        };

        const config = {
            headers: {
                'Authorization': `Bearer keyBUlnaxRN7JkNZM`,
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await axios.post("https://api.airtable.com/v0/appuGqsNoi0cpTheH/Table%201", data, config);
            toast.success("Vous avez été inscrit avec succès !");
            setEmail('');
        } catch (error) {
            toast.error("Une erreur s'est produite.");
        }
    };

    return (
        <div className="welcome">
            <ToastContainer />
            <div className="content-welcome d-flex-desktop">
                <div>
                    <img src={pic1} className="pic-welcome"/>
                </div>
                <div className="content-text-welcome">
                    <h2 className="title-welcome">Démarrez l'aventure<span className='color-orange'>.</span></h2>
                    <p className="txt-welcome">
                        Notre site internet est en cours de maintenance. Inscrivez-vous pour être recontacté afin de rencontrer vous futurs financeurs.
                    </p>

                    <br/>
                    {/*<button className='btn-welcome'>Je m'inscris</button>*/}

                    <div className="content-input-welcome">
                        <div className="input-container">
                            <form onSubmit={handleSubmit}>
                                <div className="d-flex-desktop d-flex">
                                    <input
                                        type="text"
                                        placeholder="Votre adresse email"
                                        value={email}
                                        className="d-flex-desktop"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button className="button" type="submit">
                                        <FaChevronRight className="icon-arrow" />
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>

                    <br/>
                    <div className="d-flex-desktop justify-content-between content-icons">
                        <a href="https://www.instagram.com/pitchersales/" target="_blank">
                            <FaInstagram className="icons icon-instagram" />
                        </a>
                        <a href="https://www.linkedin.com/company/pitchersales/?viewAsMember=true" target="_blank">
                            <BsLinkedin className="icons icon-linkedin" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61552502016075" target="_blank">
                            <BsFacebook className="icons icon-facebook" />
                        </a>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default WaitingPage;
