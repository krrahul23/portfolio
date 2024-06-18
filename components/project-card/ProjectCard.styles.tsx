import styled from 'styled-components';

export const CardContainer = styled.div`
	max-width: 300px;
	height: 220px;
	padding: 2rem;
	border: 1px solid #333;
	background-color: #111;
	transition: all 0.3s ease-in-out;
	border-radius: 2px;

	&:hover {
		background-color: #222;
	}
`;

export const LinkContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 1rem;
`;

export const LinkSection = styled.div`
	display: flex;
	gap: 15px;
`;

export const Anchor = styled.a``;

export const Title = styled.div`
	font-size: 1.5rem;
	font-weight: 600;
	color: #eee;
	padding-bottom: 0.5rem;
`;

export const Description = styled.div`
	font-size: 1rem;
	font-weight: 300;
	color: #bbb;
`;

export const Tags = styled.div`
	padding-top: 1.5rem;
	font-size: 0.8rem;
	font-weight: 300;
	color: #bbb;
`;
