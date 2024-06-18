import styled from 'styled-components';

export const AboutContainer = styled.div`
	padding: 5rem 15%;
	width: 60%;

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

export const TextContainer = styled.div`
	font-weight: 400;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const Text = styled.div`
	font-size: 1.2rem;
	font-weight: 300;
	color: #bbb;

	@media screen and (max-width: 768px) {
		font-size: 1.1rem;
	}
`;

export const Blue = styled.span`
	color: rgb(89, 139, 248);
`;

export const ItemsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const Items = styled.ul`
	margin: 0 0 20px 0;
`;

export const Item = styled.li`
	font-size: 1.2rem;
	font-weight: 300;
	color: #bbb;

	@media screen and (max-width: 768px) {
		font-size: 1.1rem;
	}
`;
