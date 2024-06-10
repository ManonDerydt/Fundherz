import React, { useState } from 'react';
import axios from 'axios';
import Footer from "../Footer";
import MenuInvestors from "../Investors/MenuInvestors";
import EntitySelector from '../fundeck/EntitySelector';
import ChatArea from '../fundeck/chatArea';

const Fundeck = () => {
    const [selectedEntity, setSelectedEntity] = useState('investisseur');
    const [messages, setMessages] = useState([]);

    const sendMessage = async (message) => {
        const newMessage = {
            text: message,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages([...messages, newMessage]);

        try {
            const response = await axios.post('http://localhost:1995/generate', {
                prompt: message,
            });
            const botResponse = {
                text: response.data.data,
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prevMessages) => [...prevMessages, botResponse]);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const handleFileUpload = (event) => {
        // Logic to handle file upload
        console.log('File uploaded:', event.target.files[0]);
    };

    return (
        <div className="container content-header-Investors">
            <div>
                <MenuInvestors/>

                <h2 className="title-ai">
                    Fundeck.IA <br/>
                    <span className="violet-color">L'intelligence artificielle qui t'aide à lever des fonds<br/></span>
                </h2>

                <div className="content-ia d-flex content-header">
                    <div className="sidebar">
                        <h2>Fundeck</h2>
                        <input
                            type="file"
                            id="fileUpload"
                            style={{display: 'none'}}
                            onChange={handleFileUpload}
                        />
                        <label htmlFor="fileUpload" className="upload-button">
                            Je dépose mon deck
                        </label>
                        <div className="sector-buttons">
                            <button className="btn-ia">BtoB</button>
                            <button className="btn-ia">BtoC</button>
                        </div>
                    </div>

                    <div className="main-content">
                        <EntitySelector selectedEntity={selectedEntity} setSelectedEntity={setSelectedEntity}/>
                        <ChatArea messages={messages} sendMessage={sendMessage}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Fundeck;