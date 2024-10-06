import React from 'react'
import { Nav, NavLink, NavbarContainer, NavLogo, NavItems, OpenPositionBtn, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import usmbaLogo from '../../assets/images/usmba_logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px', cursor: 'pointer' }}>
              <img src={usmbaLogo} alt="Portfolio Logo" style={{ marginTop : '10px' , width: '110px', height: 'auto', backgroundColor: 'transparent' }} />
            </a>
          </NavLogo>

          <MobileIcon>
            <FaBars onClick={() => {
              setIsOpen(!isOpen)
            }} />
          </MobileIcon>
          <NavItems>
            <NavLink href="#">Home</NavLink>
            <NavLink href='#about'>About</NavLink>
            <NavLink href='#team'>Team</NavLink>
            <NavLink href='#events'>Events</NavLink>
            <NavLink href='#program'>Program</NavLink>
          </NavItems>
          <ButtonContainer>
            <OpenPositionBtn href={"#"} target="_blank">Open Position</OpenPositionBtn>
          </ButtonContainer>
          {
              isOpen &&
              <MobileMenu isOpen={isOpen}>
                <MobileLink href="#" onClick={() => {
                  setIsOpen(!isOpen)
                }}>Home</MobileLink>
                <MobileLink href='#about' onClick={() => {
                  setIsOpen(!isOpen)
                }}>About</MobileLink>
                <MobileLink href='#team' onClick={() => {
                  setIsOpen(!isOpen)
                }}>Team</MobileLink>
                <MobileLink href='#events' onClick={() => {
                  setIsOpen(!isOpen)
                }}>Events</MobileLink>
                <MobileLink href='#program' onClick={() => {
                  setIsOpen(!isOpen)
                }}>Program</MobileLink>
                <OpenPositionBtn style={{padding: '10px 16px', color: 'white',width: 'max-content'}} href={"#"} target="_blank">Open Position</OpenPositionBtn>
              </MobileMenu>
          }
        </NavbarContainer>
      </Nav>


  )
}

export default Navbar