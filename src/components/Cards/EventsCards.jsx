// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import { PlaceHolderImage } from "../../assets/svgs/placeholder";
import CardAvatar from "../Avatars/CardAvatar.jsx";

const Button = styled.button`
	display: none;
	width: 100%;
	padding: 10px;
	background-color: #2a437e;
	color: #f1f6fd;
	font-size: 14px;
	font-weight: 700;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	transition: all 0.8s ease-in-out;
`;

const Card = styled.div`
	height: min(480px, 100%);
	width: 100%;
	background-color: white;
	cursor: pointer;
	border-radius: 10px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	gap: 14px;
	transition: all 0.5s ease-in-out;
	box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.05);
	scroll-snap-align: center;
	&:hover {
		transform: translateY(-10px);
		filter: brightness(1.1);
	}
	&:hover ${Button} {
		display: block;
	}
	@media (max-width: 1060px) {
		height: 440px;
	}
`;

const Image = styled.img`
	width: 100%;
	height: 180px;
	background-color: ${({ theme }) => theme.white};
	border-radius: 10px;
	// box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Details = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0px;
	padding: 0px 2px;
`;

const Title = styled.div`
	font-size: 20px;
	font-weight: 600;
	color: #1e2b4d;
	overflow: hidden;
	display: -webkit-box;
	max-width: 100%;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const Date = styled.div`
	font-size: 12px;
	margin-left: 2px;
	font-weight: 400;
	color: #508ce1;
	@media only screen and (max-width: 768px) {
		font-size: 10px;
	}
`;

const Description = styled.div`
	font-weight: 400;
	color: #2a437e;
	overflow: hidden;
	margin-top: 8px;
	display: -webkit-box;
	max-width: 100%;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
`;

const Members = styled.div`
	display: flex;
	align-items: center;
	padding-left: 10px;
`;

const EventsCards = ({ project, setOpenModal }) => {
	const [loadingError, setLoadingError] = useState(false);
	return (
		<Card
			onClick={() =>
				setOpenModal({
					state: true,
					project,
					hues: { hueA, hueB },
				})
			}>
			{loadingError ? (
				<PlaceHolderImage className='card-image' />
			) : (
				<Image
					src={project.image}
					className='card-image'
					onError={(e) => {
						setLoadingError(true);
						e.target.onerror = null;
					}}
					alt={project.title}
				/>
			)}
			<div
				style={{
					padding: "10px",
				}}>
				<Details>
					<Title>{project.title}</Title>
					<Date>{project.date}</Date>
					<Description>{project.description}</Description>
				</Details>
				<Members>
					{project.member?.map((member, index) => (
						<CardAvatar
							key={index + Math.random()}
							src={member.image}
							name={member.name}
						/>
					))}
				</Members>
			</div>
		</Card>
	);
};

export default EventsCards;
