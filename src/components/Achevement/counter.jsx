// eslint-disable-next-line no-unused-vars
import React from 'react';
import CountUp from 'react-countup';
import { FaTrophy, FaProjectDiagram, FaUsers, FaMedal } from 'react-icons/fa'; // Import icons
import styled from 'styled-components';



const Counter = () => {
    const counters = [
        { title: 'Prize', end: 4, icon: <FaTrophy /> }, // FaTrophy icon for "Prize"
        { title: 'Events Completed', end: 20, icon: <FaProjectDiagram /> }, // FaProjectDiagram for "Events"
        { title: 'Members', end: 130, icon: <FaUsers /> }, // FaUsers for "Members"
        { title: 'Competitions', end: 2, icon: <FaMedal /> }, // FaMedal for "Competitions"
    ];

    return (
        <Container>
            {counters.map((counter, index) => (
                <CounterBox key={index}>
                    <IconWrapper>{counter.icon}</IconWrapper> {/* Display icon */}

                    <CountUp end={counter.end} duration={3} suffix="+"/> {/* Suffix "+" added */}
                    <h4 style={{fontSize: '16px', color: '#ffffff', marginTop: '10px'}}>
                        {counter.title}
                    </h4>

                </CounterBox>
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='250' preserveAspectRatio='none' viewBox='0 0 1440 250'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='250' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M35 250L285 0L489 0L239 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)'%3e%3c/path%3e%3cpath d='M262.6 250L512.6 0L727.1 0L477.1 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)'%3e%3c/path%3e%3cpath d='M477.20000000000005 250L727.2 0L932.7 0L682.7 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)'%3e%3c/path%3e%3cpath d='M757.8000000000001 250L1007.8000000000001 0L1139.8000000000002 0L889.8000000000001 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)'%3e%3c/path%3e%3cpath d='M1411 250L1161 0L1071 0L1321 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)'%3e%3c/path%3e%3cpath d='M1196.4 250L946.4000000000001 0L644.9000000000001 0L894.9000000000001 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)'%3e%3c/path%3e%3cpath d='M934.8 250L684.8 0L437.29999999999995 0L687.3 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)'%3e%3c/path%3e%3cpath d='M714.1999999999999 250L464.19999999999993 0L272.19999999999993 0L522.1999999999999 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)'%3e%3c/path%3e%3cpath d='M1237.9627455616724 250L1440 47.96274556167225L1440 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)'%3e%3c/path%3e%3cpath d='M0 250L202.03725443832775 250L 0 47.96274556167225z' fill='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='250' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1001'%3e%3cstop stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1002'%3e%3cstop stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
    height: 32vh;
    width: 80%;
    margin: 0 auto;
    left: 50%;
    transform: translate(-50%, -50%);
    color: azure;
    gap: 60px;
    border: 1px solid #262c40;
    border-radius: 8px;
`;


const CounterBox = styled.div`
    text-align: center;
    margin: 80px 30px 30px;
    font-size: 24px;
`;

const IconWrapper = styled.div`
    font-size: 50px;
    color: #ffffff;
    margin-bottom: 10px;
`;

export default Counter;
