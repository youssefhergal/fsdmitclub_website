import { CloseRounded, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: #000000a7;
	display: flex;
	align-items: top;
	justify-content: center;
	overflow-y: scroll;
	transition: all 0.5s ease;
`;

const Wrapper = styled.div`
	max-width: 800px;
	width: 100%;
	border-radius: 16px;
	margin: 50px 12px;
	height: min-content;
	background-color: #dfecfa;
	color: #1e2b4d;
	padding: 20px;
	display: flex;
	flex-direction: column;
	position: relative;
`;

const Title = styled.div`
	font-size: 28px;
	font-weight: 600;
	color: #1e2b4d;
	margin: 8px 6px 0px 6px;
	@media only screen and (max-width: 600px) {
		font-size: 24px;
		margin: 6px 6px 0px 6px;
	}
`;

const Date = styled.div`
	font-size: 16px;
	margin: 2px 6px;
	font-weight: 400;
	color: #325dc3;
	@media only screen and (max-width: 768px) {
		font-size: 12px;
	}
`;

const Desc = styled.div`
	font-size: 16px;
	font-weight: 400;
	color: #2f4ea1;
	margin: 8px 6px;
	@media only screen and (max-width: 600px) {
		font-size: 14px;
		margin: 6px 6px;
	}
`;

const Image = styled.img`
	width: 100%;
	object-fit: cover;
	border-radius: 12px;
	margin-top: 30px;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
	height: 350px;
`;

const Label = styled.div`
	font-size: 20px;
	font-weight: 600;
	color: #2f4ea1;
	margin: 8px 6px;
	@media only screen and (max-width: 600px) {
		font-size: 16px;
		margin: 8px 6px;
	}
`;

const Members = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	flex-wrap: wrap;
	margin: 12px 6px;
	@media only screen and (max-width: 600px) {
		margin: 4px 6px;
	}
`;

const Member = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

const MemberImage = styled.img`
	width: 50px;
	height: 50px;
	object-fit: cover;
	border-radius: 50%;
	margin-bottom: 4px;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
	@media only screen and (max-width: 600px) {
		width: 32px;
		height: 32px;
	}
`;

const MemberName = styled.div`
	font-size: 16px;
	font-weight: 500;
	width: 200px;
	color: #2f4ea1;
	@media only screen and (max-width: 600px) {
		font-size: 14px;
	}
`;

const ButtonGroup = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 12px 0px;
	gap: 12px;
`;

const Button = styled.a`
	width: 100%;
	text-align: center;
	font-size: 16px;
	font-weight: 600;
	color: white;
	padding: 12px 16px;
	border-radius: 8px;
	background-color: #2a437e;

	cursor: pointer;
	text-decoration: none;
	transition: all 0.5s ease;
	&:hover {
		background-color: #508ce1;
	}
	@media only screen and (max-width: 600px) {
		font-size: 12px;
	}
`;

const index = ({ openModal, setOpenModal }) => {
	const project = openModal?.project;
	return (
		<Modal
			open={true}
			onClose={() => setOpenModal({ state: false, project: null })}>
			<Container>
				<Wrapper>
					<CloseRounded
						style={{
							position: "absolute",
							top: "10px",
							right: "20px",
							cursor: "pointer",
						}}
						onClick={() =>
							setOpenModal({ state: false, project: null })
						}
					/>
					<Image src={project.image} />
					<Title>{project?.title}</Title>
					<Date>{project.date}</Date>

					<Desc>{project?.description}</Desc>
					{project.member && (
						<>
							<Label>Members</Label>
							<Members>
								{project?.member.map((member) => (
									<Member>
										<MemberImage src={member.img} />
										<MemberName>{member.name}</MemberName>
										<a
											href={member.linkedin}
											target='new'
											style={{
												textDecoration: "none",
												color: "inherit",
											}}>
											<LinkedIn />
										</a>
									</Member>
								))}
							</Members>
						</>
					)}
					<ButtonGroup>
						<Button dull href={project?.instagram} target='new'>
							View more
						</Button>
					</ButtonGroup>
				</Wrapper>
			</Container>
		</Modal>
	);
};

export default index;
