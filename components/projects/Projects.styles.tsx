import styled from 'styled-components';

export const ProjectsContainer = styled.div`
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

export const ProjectsCardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
`;
