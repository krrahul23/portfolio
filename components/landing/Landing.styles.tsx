import styled from 'styled-components';

export const BackgroundContainer = styled.div`
	background: rgb(30, 80, 188);
	background: linear-gradient(
		205deg,
		rgba(30, 80, 188, 1) 20%,
		rgba(0, 0, 0, 1) 50%
	);

	background-size: 200% 200%;
	animation: background-gradient 3s ease-in-out infinite;
	@keyframes background-gradient {
		0%,
		100% {
			background-position: 50% 100%;
		}
		50% {
			background-position: 0% 0%;
		}
	}

	@media screen and (max-width: 768px) {
		@keyframes background-gradient {
			100%,
			0% {
				background-position: 100% 100%;
			}
			50% {
				background-position: 50% 50%;
			}
		}
	}
`;

export const LandingContainer = styled.div`
	padding: 0 15%;
	height: 100vh;
	width: 40%;
	display: flex;
	justify-content: center;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		padding: 0 10%;
		width: 80%;
	}
`;

export const Subtitle = styled.div`
	font-size: 1rem;
	color: #999;
	text-transform: uppercase;

	@media screen and (max-width: 768px) {
		font-size: 1rem;
	}
`;

export const Title = styled.div`
	font-size: 3rem;
	font-weight: 600;
	padding-bottom: 0.5rem;

	@media screen and (max-width: 768px) {
		font-size: 2.1rem;
	}
`;

export const Description = styled.div`
	font-size: 1.4rem;
	font-weight: 400;
	padding-bottom: 1rem;
	color: #aaa;

	@media screen and (max-width: 768px) {
		font-size: 1.2rem;
	}
`;

export const Anchor = styled.a``;

export const Flex = styled.div`
	display: flex;
	gap: 10px;
`;

export const BottomCaret = styled.div`
	position: absolute;
	bottom: 50px;
	right: 50%;
	transform: translateX(50%);
`;

export const Mobile = styled.span`
	@media screen and (max-width: 768px) {
		display: block;
	}
`;
