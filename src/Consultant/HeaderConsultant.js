import React, {useState} from 'react';
import screen from "../assets/header/pic-header-4.png";
import bonhomme from "../assets/one-b.png"

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


        return (

            <div className="container">
                <div className="content-header-Consultant content-header d-flex-desktop">

                    <div className="button-container-investors">
                        <div className="element-1">
                            <h2 className="big-title-investors big-title">Pitchersales, <br/>
                                <span className="red-color">Élevez vos revenus, sérénité en prime.</span>
                            </h2>
                            <p className="subtitle-header">On est convaincus, quelque soit votre expertise en levée de fonds : coachez des <span className="bold">projets à forte valeur ajoutée.</span></p>
                        </div>
                        <div className="element-2">
                            <div className="buttons-investors">
                                <button
                                    className={selected === 'investisseur' ? 'mix-btn selected-button-c' : 'mix-btn deselected-button mix-btn-deselected'}
                                    onClick={() => {
                                        window.open('https://i59ic371bmw.typeform.com/to/dWincwIG', '_blank');
                                        this.selectOption('investisseur');
                                    }}
                                >
                                    <img src={bonhomme} className="icon-btn-menu" />
                                    Réserve ta place
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="content-img-header-investors">
                        <img src={screen} className="screen"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header

