import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fade from "react-reveal/Fade";
import smallLogo from "./assets/small-logo.png";
import {FaChevronRight} from "react-icons/fa";

function Subscribe() {
    const [selectedRole, setSelectedRole] = useState('');
    const [startupName, setStartupName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [fullName, setFullName] = useState('');

    const handleCardClick = (role) => {
        setSelectedRole(role);
    };

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
                "Role": selectedRole,
                "Startup_name": startupName,
                "Email": email,
                "Description": description,
                "Name": fullName,
            }
        };

        const config = {
            headers: {
                'Authorization': `Bearer keyBUlnaxRN7JkNZM`,
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await axios.post("https://api.airtable.com/v0/appuGqsNoi0cpTheH/Table%201?maxRecords=3&view=Grid%20view", data, config);
            setEmail('');
            console.log(response.data);
            toast.success("Votre email a été soumis avec succès !");
        } catch (error) {
            console.error(error);
            toast.error("Une erreur s'est produite lors de la soumission du formulaire.");
        }
    };

    return (
        <div>
            <div className="content-subscribe" id="subscribe">
                <ToastContainer />
                <Fade bottom delay={200}>
                    <div className="text-center">
                        <img src={smallLogo} className="small-logo logo-s"/>
                    </div>
                    <div className>
                        <h2 className="title-subscribe">On s'inscrit ?<br /><span className="color-orange">Tout d'abord, faisons connaissance !</span></h2>
                    </div>
                    <p className="subtitle-subscribe">
                        Inscrivez-vous à la newsletter pour ne rien rater des actualités et des opportunités de Pitchersales.
                    </p>

                    <div className="content-input-welcome">
                        <div className="input-container">
                            <form onSubmit={handleSubmit} className="form-s">
                                <div className="d-flex-desktop d-flex-mobile">
                                    <input
                                        type="text"
                                        placeholder="Inscription à la newsletter"
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
                </Fade>
            </div>
        </div>
    );
}

export default Subscribe;