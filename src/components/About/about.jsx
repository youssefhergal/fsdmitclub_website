import React from 'react'
import styled from 'styled-components'
import { FaCode, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa'; // Icons from react-icons

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    z-index: 1;
    padding: 20px;
    background:#dfecfa ;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    max-width: 1100px;
    gap: 40px; /* Spacing between the description and cards */
    @media (max-width: 960px) {
        flex-direction: column;
        align-items: center;
    }
`;

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two columns for cards */
    gap: 30px;
    max-width: 500px;
    width: 100%;
    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Stack cards on mobile */
        justify-items: center;
    }
`;

const CardIcon = styled.div`
    font-size: 48px;
    color: #2f4ea1;
    margin-bottom: 12px;

  
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f1f6fd;
    border: 0.1px solid #c6def7;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    border-radius: 16px;
    padding: 20px;
    text-align: center;
    max-width: 230px;
    height: 180px;

    &:hover {
        background-color: #2f4ea1; /* Change to icon color */
        color: #f1f6fd; /* Change text color */
    }

  
    @media (max-width: 768px) {
        max-width: 300px;
    }

    &:hover ${CardIcon} {
        color: #f1f6fd; /* Icon changes to card background color */
    }
    
    
`;



const CardText = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.black};
`;

export const Title = styled.div`
    font-size: 42px;
    font-weight: 600;
    color: #2f4ea1;
    margin-bottom: 10px;
    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

export const Desc = styled.div`
    font-size: 16px;
    max-width: 500px;
    color: ${({ theme }) => theme.black};
    @media (max-width: 768px) {
        font-size: 16px;
    }
    padding-right: 20px;
    font-weight: bold;
`;

const AboutOurClub = () => {
    return (
        <Container id="about">
            <Wrapper>
                {/* Left section for the cards */}
                <CardsContainer>
                    <Card>
                        <CardIcon><FaCode /></CardIcon>
                        <CardText>Technology</CardText>
                    </Card>
                    <Card>
                        <CardIcon><FaLightbulb /></CardIcon>
                        <CardText>Innovation</CardText>
                    </Card>
                    <Card>
                        <CardIcon><FaUsers /></CardIcon>
                        <CardText>Community</CardText>
                    </Card>
                    <Card>
                        <CardIcon><FaRocket /></CardIcon>
                        <CardText>Growth</CardText>
                    </Card>
                </CardsContainer>

                {/* Right section for the combined paragraph */}
                <div>
                    <Title>About Our Club</Title>
                    <Desc>
                        The IT Club of the Faculty of Sciences at Fes (FSDMIT Club) brings together students who are passionate about information technology, innovation, and new technologies. The club aims to be a hub for individuals eager to apply their scientific knowledge, share their expertise, and collaborate with those drawn to the world of technology. In an era where IT plays a central role in shaping our modern culture, the club brings together a wide range of talents in programming, cybersecurity, data science, networking, and software development to create innovative and impactful solutions

                    </Desc>
                </div>
            </Wrapper>
        </Container>
    )
}

export default AboutOurClub;
