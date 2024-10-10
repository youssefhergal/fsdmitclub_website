import './App.css';
import Navbar from "./components/Navbar/navbar.jsx";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection/hero.jsx";
import AboutOurClub from "./components/About/about.jsx";
import Counter from "./components/Achevement/counter.jsx";
import { useState } from "react";
import Events from "./components/Events/events.jsx";
import ContactAndFooter from "./components/Footer/footer.jsx";
import Sponsors from "./components/Sponsors/index.jsx";
import ProjectDetails from "./components/EventsDetails/index.jsx";
import Team from "./components/Team/index.jsx";

const Body = styled.div`
    width: 100%;
    overflow-x: hidden;
`;

const Wrapper = styled.div`
    width: 100%;
`;

function App() {
    const [openModal, setOpenModal] = useState({ state: false, project: null });

    return (
        <Router>
            <Navbar />
            <Body>
                <HeroSection />
                <Wrapper>
                    <AboutOurClub />
                    <Team />
                    <Counter />  {/* Render Counter once */}
                </Wrapper>
                <Events openModal={openModal} setOpenModal={setOpenModal} />
                <Wrapper>
                    <Sponsors />
                </Wrapper>
                <ContactAndFooter />
                {openModal.state &&
                    <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
                }
            </Body>
        </Router>
    );
}

export default App;
