import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import AboutOurClub from "./components/About/about.jsx";
import Counter from "./components/Achevement/counter.jsx";
import Events from "./components/Events/events.jsx";
import ProjectDetails from "./components/EventsDetails/index.jsx";
import ContactAndFooter from "./components/Footer/footer.jsx";
import HeroSection from "./components/HeroSection/hero.jsx";
import Navbar from "./components/Navbar/navbar.jsx";
import Sponsors from "./components/Sponsors/index.jsx";
import Team from "./components/Team/index.jsx";
import backImage from "/src/assets/background.jpg";
const Root = styled.main`
	width: 100%;
	overflow-x: hidden;
	background-position: center;
	background-repeat: no-repeat;
	background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0.8) 24%,
			rgba(47, 78, 161, 0.6134103299522935) 60%
		),
		url(${backImage});
	background-attachment: fixed;
	background-size: cover;
	/*animation: backgroundScroll 10s ease-in-out infinite alternate;*/

	@keyframes backgroundScroll {
		0% {
			background-position: center;
		}
		100% {
			background-position: right center;
		}
	}
`;
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
			<Root>
				<Navbar />
				<Body>
					<HeroSection />
					<Wrapper>
						<AboutOurClub />
						<Team />
						<Counter /> {/* Render Counter once */}
					</Wrapper>
					<Events openModal={openModal} setOpenModal={setOpenModal} />

					<Sponsors />
					<ContactAndFooter />
					{openModal.state && (
						<ProjectDetails
							openModal={openModal}
							setOpenModal={setOpenModal}
						/>
					)}
				</Body>
			</Root>
		</Router>
	);
}

export default App;
