import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation/index.jsx'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, Title, SubTitle, JoinBtn } from './HeroStyle'
import HeroImg from '../../../public/Fsdm_it_club_logo.png'
import { Bio } from '../../data/constants';


const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title><br /> FSDM IT & AI CLUB</Title>

                        <SubTitle>
                            Innovation meets passion at the FSDMIT Club—where ideas become reality.
                        </SubTitle>
                        <JoinBtn href={"https://forms.gle/WJg3FgvhNpSLKQoq8"} target='display'>Join Now</JoinBtn>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        {/*<Img src={HeroImg} alt="hero-image" />*/}
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection