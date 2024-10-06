// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import { Bio } from '../../data/constants';

// Styles for the container that combines the footer sections
const CombinedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 3rem 0;
  height: 280px;
  background: white;
`;

const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  gap: 4rem;
  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Styles for the footer section
const FooterSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

// Wrapper for the logo and description (aligned to the left)
const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// Short description style
const Description = styled.p`
  font-size: 1rem;
  color: #71abe9;
  margin-bottom: 1rem;
  max-width: 300px;
`;

// Section title styles
const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2a437e;
  margin-bottom: 1rem;
`;

// Updated Nav to be displayed vertically, and links are centered
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
  justify-content: center;
`;

const NavLink = styled.a`
  color: #71abe9;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.2s ease-in-out;

  &:before {
    content: "> ";
    color: #508ce1;
    font-weight: bold;
  }
  &:hover {
    color:#2a437e;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SubscribeForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`;

const SubscribeInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #71abe9;
  border-radius: 8px;
  padding: 8px;
  background-color: #fff;
`;

const SubscribeInput = styled.input`
  border: none;
  outline: none;
  padding: 8px;
  font-size: 1rem;
  color: #71abe9;
  width: 200px;
  border-radius: 8px;
`;

const SubscribeButton = styled.button`
  background-color: #71abe9;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin-left: 8px;
  cursor: pointer;
  &:hover {
    background-color: #2a437e;
  }
`;

// Follow Us section for social media icons (LinkedIn and Instagram only)
const FollowUsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FollowUsText = styled.h3`
  color: #2a437e;
  margin-bottom: 0.5rem;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  font-size: 1.5rem;
  color: #71abe9;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #2f4ea1;
  }
`;

const Copyright = styled.p`
  margin-top: 2rem;
  font-size: 0.9rem;
  background: white;
  color: #2f4ea1;
  text-align: center;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #dfecfa;
`;

const CopyrightLink = styled.a`
  color: #000000; /* Blue color for the link */
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color:#2f4ea1;
  }
`;

function ContactAndFooter() {
  const currentYear = new Date().getFullYear();

  return (
      <>
        <CombinedContainer>
          <MainSection>
            <FooterSection>
              <SectionTitle>FSDM IT CLUB</SectionTitle>
              <FooterLeft>
                <Description>
                  Welcome to FSDM IT Club, the place where innovation meets learning and community spirit grows.
                </Description>
              </FooterLeft>
            </FooterSection>

            <FooterSection>
              <SectionTitle>Links</SectionTitle>
              <Nav>
                <NavLink href="#">Home</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#team">Team</NavLink>
                <NavLink href="#events">Events</NavLink>
                <NavLink href="#program">Program</NavLink>
              </Nav>
            </FooterSection>

            <FooterSection>
              <SectionTitle>Stay in the Loop</SectionTitle>
              <SubscribeForm>
                <SubscribeInputContainer>
                  <SubscribeInput type="email" placeholder="Your Email Address" />
                  <SubscribeButton><SendIcon /></SubscribeButton>
                </SubscribeInputContainer>
                <FollowUsSection>
                  <FollowUsText>Follow Us</FollowUsText>
                  <SocialMediaIcons>
                    <SocialMediaIcon href={Bio.linkedin} target="_blank"><LinkedInIcon /></SocialMediaIcon>
                    <SocialMediaIcon href={Bio.insta} target="_blank"><InstagramIcon /></SocialMediaIcon>
                  </SocialMediaIcons>
                </FollowUsSection>
              </SubscribeForm>
            </FooterSection>
          </MainSection>
        </CombinedContainer>

        <Copyright>
          &copy; 2023 - {currentYear} {' '}
          All rights reserved | This website is made with &#128153; by <CopyrightLink href="https://fsdmitclub.com" target="_blank">
          Fsdmitclub.com
        </CopyrightLink>{' '}
        </Copyright>
      </>
  );
}

export default ContactAndFooter;
