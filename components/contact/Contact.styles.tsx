import styled, { css } from 'styled-components';

export const ContactContainer = styled.div`
	padding: 5rem 15%;
	width: 35%;

	@media screen and (max-width: 768px) {
		padding: 5rem 10%;
		width: 80%;
	}
`;

export const Title = styled.div`
	font-size: 2rem;
	font-weight: 600;
	padding-bottom: 2rem;
`;

export const Text = styled.div`
	font-size: 1.2rem;
	font-weight: 400;
	color: #bbb;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	padding-top: 1rem;
	gap: 10px;
`;

const inputStyles = css<{ value: string; error: string }>`
	align-self: flex-start;
	padding: 1rem;
	font-size: 1.1rem;
	border: none;
	min-width: 400px;
	background-color: #111;
	border: 1px solid #333;
	border-bottom: 1px solid
		${({ value, error }) => {
			const err = error === 'true' ? true : false;
			if (!err) {
				return value.length > 0 ? 'rgb(89, 139, 248)' : '#333';
			} else {
				return 'rgb(255, 0, 0)';
			}
		}};

	transition: all 0.3s ease-in-out;
	color: #eee;
	font-family: Poppins;
	border-radius: 2px;

	&::placeholder {
		color: #999;
		font-weight: 300;
	}

	&:hover {
		background-color: #222;
		border-bottom: 1px solid rgb(89, 139, 248);
	}

	&:focus {
		outline: none;
	}
	&:-webkit-autofill {
		background-color: #333;
	}

	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus {
		color: #eee;
		-webkit-text-fill-color: #eee;
		background-color: #333;
		box-shadow: 0 0 0px 1000px #333 inset;
		-webkit-box-shadow: 0 0 0px 1000px #333 inset;
		border-color: rgb(55, 112, 236);
		transition: background-color 5000s ease-in-out 0s;
	}

	@media screen and (max-width: 768px) {
		min-width: 90%;
	}
`;

export const Input = styled.input`
	${inputStyles}
`;

export const TextArea = styled.textarea`
	${inputStyles}

	resize: none;
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 10px;
`;

export const Anchor = styled.a``;
