
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
    background: #F2F3F4;
    height: 100vh;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.black};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;






const index = () => {
    return (
        <Container id="team">
            <Wrapper>
                <Title>Team 2024 /2025 </Title>
                    Comming soon
            </Wrapper>
        </Container>
    )
}

export default index