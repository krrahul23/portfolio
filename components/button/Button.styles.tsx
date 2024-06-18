import styled, { css } from 'styled-components';

const DefaultButton = css`
	align-self: flex-start;
	font-size: 1.1rem;
	padding: 10px 20px;
	transition: all 300ms ease 0s;
	text-decoration: none;
	border: none;
	cursor: pointer;
	border-radius: 2px;
`;

export const PrimaryButton = styled.button`
	${DefaultButton}
	color: #eee;
	background-color: rgb(30, 80, 188);

	&:hover {
		color: #ddd;
		background-color: rgb(30, 80, 188, 0.6);
	}
`;

export const SecondaryButton = styled.button`
	${DefaultButton}
	color: #eee;
	background-color: rgb(255, 255, 255, 0.2);

	&:hover {
		background-color: rgb(255, 255, 255, 0.15);
	}
`;
