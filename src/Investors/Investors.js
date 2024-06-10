import React from "react";
import HeaderInvestors from "./Header-investors";
import AdvantagesInvestors from "./Advantages-investors";
import How_it_works_investors from "./How_it_works_investors";
import Subscribe from "../Subscribe";
import Footer from "../Footer";
import Concept_Investors from "./Concept_Investors";
import HeadbandI from "./Banner_investors";
import MenuHome from "../Home/Menu-home";
import MenuInvestors from "./MenuInvestors";
import SolutionI from "./Solution-i";
import LastI from "./Last-i";

class Investors extends React.Component {
    render() {
        return (
            <div>
                <div className="menu-header-bg">
                    <MenuInvestors />
                </div>
                <header className="App-header">
                    <HeaderInvestors />
                </header>
                <HeadbandI/>
                <Concept_Investors/>
                <SolutionI/>
                <AdvantagesInvestors/>
                {/*<How_it_works_investors/>*/}
                <LastI/>
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

export default Investors