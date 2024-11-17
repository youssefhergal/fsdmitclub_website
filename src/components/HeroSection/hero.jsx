import React from "react";
import { Bio } from "../../data/constants";
import HeroBgAnimation from "../HeroBgAnimation/index.jsx";
import {
	HeroBg,
	HeroContainer,
	HeroInnerContainer,
	HeroLeftContainer,
	HeroRightContainer,
	JoinBtn,
	SubTitle,
	Title,
} from "./HeroStyle";

// import Swiper from "swiper";
import "swiper/css";
const HeroSection = () => {
	return (
		<div id='about'>
			<HeroContainer>
				<HeroBg>
					<HeroBgAnimation />
				</HeroBg>
				<HeroInnerContainer>
					<HeroLeftContainer id='Left'>
						<Title className='bordered-text'>
							<br /> {Bio.name}
						</Title>

						<SubTitle>
							Innovation meets passion at the FSDMIT Club—where
							ideas become reality.
						</SubTitle>
						<JoinBtn
							href={"https://forms.gle/WJg3FgvhNpSLKQoq8"}
							target='display'>
							Join Now
						</JoinBtn>
					</HeroLeftContainer>

					<HeroRightContainer id='Right'>
						{/* <Img src={HeroImg} alt='hero-image' /> */}
					</HeroRightContainer>
				</HeroInnerContainer>
			</HeroContainer>
		</div>
	);
};

export default HeroSection;
