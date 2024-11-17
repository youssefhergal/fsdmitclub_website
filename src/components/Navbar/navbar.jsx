import React from "react";
import { FaBars } from "react-icons/fa";
import fsdmItClubLogo from "../../assets/images/Fsdm_it_club_logo.png";
import {
	ButtonContainer,
	MobileIcon,
	MobileLink,
	MobileMenu,
	Nav,
	NavbarContainer,
	NavItems,
	NavLink,
	NavLogo,
	OpenPositionBtn,
} from "./NavbarStyledComponent";

const Navbar = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	return (
		<Nav>
			<NavbarContainer>
				<NavLogo to='/'>
					<a
						style={{
							display: "flex",
							alignItems: "center",
							color: "white",
							marginBottom: "20px",
							cursor: "pointer",
						}}>
						<img
							src={fsdmItClubLogo}
							alt='Logo'
							style={{
								marginTop: "10px",
								width: "60px",
								height: "auto",
								backgroundColor: "transparent",
							}}
						/>
					</a>
				</NavLogo>

				<MobileIcon>
					<FaBars
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					/>
				</MobileIcon>
				<NavItems>
					<NavLink className='nav-link' href='#'>
						Home
					</NavLink>
					<NavLink className='nav-link' href='#about'>
						About
					</NavLink>
					<NavLink className='nav-link' href='#team'>
						Team
					</NavLink>
					<NavLink className='nav-link' href='#events'>
						Events
					</NavLink>
					<NavLink className='nav-link' href='#program'>
						Program
					</NavLink>
				</NavItems>
				<ButtonContainer>
					<OpenPositionBtn href={"#"} target='_blank'>
						Open Position
					</OpenPositionBtn>
				</ButtonContainer>
				{isOpen && (
					<MobileMenu isOpen={isOpen}>
						<div>
							<MobileIcon
								style={{
									color: "#1e2b4d",
								}}>
								<FaBars
									onClick={() => {
										setIsOpen(!isOpen);
									}}
								/>
							</MobileIcon>
						</div>
						<MobileLink
							href='#'
							onClick={() => {
								setIsOpen(!isOpen);
							}}>
							Home
						</MobileLink>
						<MobileLink
							href='#about'
							onClick={() => {
								setIsOpen(!isOpen);
							}}>
							About
						</MobileLink>
						<MobileLink
							href='#team'
							onClick={() => {
								setIsOpen(!isOpen);
							}}>
							Team
						</MobileLink>
						<MobileLink
							href='#events'
							onClick={() => {
								setIsOpen(!isOpen);
							}}>
							Events
						</MobileLink>
						<MobileLink
							href='#program'
							onClick={() => {
								setIsOpen(!isOpen);
							}}>
							Program
						</MobileLink>
						<OpenPositionBtn
							style={{
								padding: "10px 16px",
								color: "white",
								width: "max-content",
							}}
							href={"#"}
							target='_blank'>
							Open Position
						</OpenPositionBtn>
					</MobileMenu>
				)}
			</NavbarContainer>
		</Nav>
	);
};

export default Navbar;
