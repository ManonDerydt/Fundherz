import React from "react";
import Subscribe from "../Subscribe";
import Footer from "../Footer";
import MenuConsultant from "./MenuConsultant";
import HeaderConsultant from "./HeaderConsultant";
import BannerC from "./Banner-C";
import ConceptConsultant from "./Concept-Consultant";
import AdvantagesInvestors from "../Investors/Advantages-investors";
import AdvantagesConsultant from "./Advantages-Consultant";
import GameChanger from "./gameChanger";

class Consultant extends React.Component {
    render() {
        return (
            <div>
                <div className="menu-header-bg">
                    <MenuConsultant />
                </div>
                <header className="App-header">
                    <HeaderConsultant />
                </header>

                <section>
                    <BannerC/>
                </section>

                <ConceptConsultant/>

                <AdvantagesConsultant/>

                <GameChanger/>

                <section className="section-subscribe">
                    <Subscribe/>
                </section>


                <section>
                    <Footer />
                </section>
            </div>
        )
    }
}

export default Consultant