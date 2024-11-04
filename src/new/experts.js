import React, { useState, useEffect, useRef } from 'react';
import Fade from "react-reveal/Fade";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import Slider from "react-slick";
import img from "../assets/new-web/img.png";
import volt from "../assets/new-web/volt.png";
import cross from "../assets/cross.png";

const AutoScrollSlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            sliderRef.current.slickNext();
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box>
            <Slider
                ref={sliderRef}
                slidesToShow={1}
                slidesToScroll={1}
                infinite
                autoplay
                autoplaySpeed={0}
                speed={6000}
                swipeToSlide
                arrows={false}
                cssEase="linear"
                variableWidth
            >
                <Card className="card" sx={{ borderRadius: 3 }}>
                    <CardMedia
                        className="cardmedia"
                        component="img"
                        alt="Manon"
                        margin-left="20"
                        image={require("../assets/new-web/experts/manon.png")}
                    />
                    <CardContent>
                        <Box>
                            <Typography gutterBottom variant="h3" component="div" className="title-card">
                                Manon Derydt
                            </Typography>
                        </Box>

                        <Typography variant="body2" color="black">
                            Fundherz
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="card" sx={{ borderRadius: 3 }}>
                    <CardMedia
                        className="cardmedia"
                        component="img"
                        alt="Deanyce"
                        margin-left="20"
                        image={require("../assets/dean.jpeg")}
                    />
                    <CardContent>
                        <Box>
                            <Typography gutterBottom variant="h3" component="div" className="title-card">
                                Deanyce Wilson
                            </Typography>
                        </Box>

                        <Typography variant="body2" color="black">
                            Dean Artist - Dean Agency
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card" sx={{ borderRadius: 3 }}>
                    <CardMedia
                        className="cardmedia"
                        component="img"
                        alt="Margot"
                        margin-left="20"
                        image={require("../assets/margot.jpeg")}
                    />
                    <CardContent>
                        <Box>
                            <Typography gutterBottom variant="h3" component="div" className="title-card">
                                Margot Boumelita
                            </Typography>
                        </Box>

                        <Typography variant="body2" color="black">
                            Timehers
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card" sx={{ borderRadius: 3 }}>
                    <CardMedia
                        component="img"
                        alt="Jade"
                        className="cardmedia"
                        margin-left="20"
                        image={require("../assets/new-web/experts/jade.jpeg")}
                    />
                    <CardContent>
                        <Box>
                            <Typography gutterBottom variant="h3" component="div" className="title-card">
                                Jade Dumortier
                            </Typography>
                        </Box>

                        <Typography variant="body2" color="black">
                            Jadice
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card" sx={{ borderRadius: 3 }}>
                    <CardMedia
                        component="img"
                        alt="Anastasia"
                        className="cardmedia"
                        margin-left="20"
                        image={require("../assets/new-web/experts/anastasia-andrieu.jpg")}
                    />
                    <CardContent>
                        <Box>
                            <Typography gutterBottom variant="h3" component="div" className="title-card">
                                Anastasia Andrieu
                            </Typography>
                        </Box>

                        <Typography variant="body2" color="black">
                            Label Phi
                        </Typography>
                    </CardContent>
                </Card>
            </Slider>
        </Box>
    );
};

const Expert = () => {
    const [cardsContainer, setCardsContainer] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (cardsContainer) {
                cardsContainer.scrollLeft += 300;
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [cardsContainer]);

    const [showIframe, setShowIframe] = useState(false);

    const handleButtonClick = () => {
        setShowIframe(true);
    };

    const handleCloseIframe = () => {
        setShowIframe(false);
    };


    return (
        <div className="d-flex-desktop content-expert-global">
            <Fade bottom>
                <div className="content-expert">
                    <h2 className="white-color title-expert white-color">L'équipe d'experts <br/><span
                        className="rainbow-color">derrière Fundherz</span></h2>
                    <p className="text-step">
                        Lancez-vous comme tant d’autres entrepreneuses et concrétisez vos ambitions.
                    </p>
                    <button className="btn-banner-join-expert text-btn-header d-flex-desktop" onClick={handleButtonClick}>
                        <p>Je veux lever des fonds</p>
                    </button>
                </div>
            </Fade>

            <div className="d-flex-desktop Content-box">
                <AutoScrollSlider/>
            </div>
            {showIframe && (
                <Fade right>
                    <div className="typeform-overlay">
                        <div className="typeform-container">
                            <iframe
                                id="typeform-iframe"
                                src="https://i59ic371bmw.typeform.com/to/JiN0MSYj"
                                style={{ width: '100%', height: '100%', border: 'none' }}
                                title="TypeForm"
                            />
                            <a className="close-button" onClick={handleCloseIframe}>
                                <img src={cross} className="cross-form"/>
                            </a>
                        </div>
                    </div>
                </Fade>
            )}
        </div>


    );
};

export default Expert;
