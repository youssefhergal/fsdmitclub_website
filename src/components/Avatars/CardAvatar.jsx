import React, { useState } from "react";
import styled from "styled-components";
import user_1 from "../../assets/images/user_1.png";
import user_2 from "../../assets/images/user_2.png";
import user_3 from "../../assets/images/user_3.png";
const Avatar = styled.img`
	width: 38px !important;
	max-width: 38px;
	height: 38px;
	aspect-ratio: 1;
	border-radius: 50%;
	margin-left: -10px;
	background-color: ${({ theme }) => theme.white};
	box-shadow: 0 0 2px #2a437e;
	border: 1px solid #2a437e;
`;

const images = [user_1, user_2, user_3];
const CardAvatar = ({ src, name }) => {
	const placeholder = images[Math.floor(Math.random() * images.length)];
	const [source, setSource] = useState(src || placeholder);
	return (
		<Avatar
			src={source}
			alt={name}
			onError={(e) => {
				e.target.onerror = null;
				setSource(placeholder);
			}}
		/>
	);
};

export default CardAvatar;
