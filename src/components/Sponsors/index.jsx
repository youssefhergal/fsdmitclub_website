// Sponsors.jsx
import React from "react";
import styled, { keyframes } from "styled-components";
import fsdmImage from "../../assets/images/2.png";
import fsdmitcImage from "../../assets/images/3.png";
import datacampImage from "../../assets/images/DC_Donates_logo_inverted.png";

const Sponsors = () => {
	// Liste des sponsors avec des images et des liens
	const sponsors = [
		{ id: 1, image: fsdmImage, link: "https://www.fsdm.usmba.ac.ma/" },
		{
			id: 3,
			image: datacampImage,
			link: "https://www.datacamp.com/donates",
		},
		{
			id: 4,
			image: fsdmitcImage,
			link: "https://fsdmitclub-website.vercel.app/",
		},
	];

	// Dupliquez la liste des sponsors pour une boucle infinie
	const duplicatedSponsors = [
		...sponsors,
		...sponsors,
		...sponsors,
		...sponsors,
		...sponsors,
		...sponsors,
		...sponsors,
		...sponsors,
		...sponsors,
		...sponsors,
	]; // Duplication pour boucle continue

	return (
		<Container>
			<Slider>
				{duplicatedSponsors.map((sponsor, index) => (
					<SponsorLogo
						key={index + Math.random()}
						onClick={() => window.open(sponsor.link, "_blank")}>
						<img
							src={sponsor.image}
							alt={`Sponsor ${sponsor.id}`}
						/>
					</SponsorLogo>
				))}
			</Slider>
		</Container>
	);
};

// Animation pour déplacer le slider de gauche à droite
const scroll = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
`;

// Conteneur principal de la section Sponsors
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 60px 0;
	background: #004aad;
	height: 28vh;
	width: 100%;
	color: azure;
	overflow: hidden;
	position: relative;
	margin-top: -150px;

	@media (max-width: 768px) {
		height: 40vh;
		padding: 40px 0;
		margin-top: -100px;
	}
`;

// Slider contenant les images des sponsors
const Slider = styled.div`
	display: flex;
	gap: 20px; /* Réduire l'espacement pour éviter les espaces vides */
	width: 200%; /* Double la largeur pour contenir la liste dupliquée */
	animation: ${scroll} 30s linear infinite; /* Ajustez la durée selon la vitesse désirée */

	&:hover {
		animation-play-state: paused; /* Pause l'animation au survol */
	}
`;

export const Title1 = styled.div`
	text-align: center;
	color: #ffffff;
	z-index: 2;
	margin: 0 auto;
	@media (max-width: 768px) {
		margin-top: 12px;
		font-size: 32px;
	}
`;

// Logo individuel des sponsors
const SponsorLogo = styled.div`
	flex: 0 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 20px;

	img {
		width: 150px;
		height: auto;
		cursor: pointer;
		transition: transform 0.3s, opacity 0.3s;

		&:hover {
			transform: scale(1.1);
			opacity: 0.8;
		}

		@media (max-width: 768px) {
			width: 120px;
		}

		@media (max-width: 480px) {
			width: 100px;
		}
	}
`;

export default Sponsors;
