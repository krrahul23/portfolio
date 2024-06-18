import styled, { keyframes } from 'styled-components';

export const SmallIcon = styled.div`
	font-size: 30px;
	transition: all 300ms ease 0s;
	color: #eee;
	cursor: pointer;

	&:hover {
		color: rgb(89, 139, 248);
	}
`;

export const ProjectIcon = styled.div`
	font-size: 30px;
	transition: all 300ms ease 0s;
	color: rgb(89, 139, 248);
`;

export const SocialIcon = styled.div`
	font-size: 20px;
	transition: all 300ms ease 0s;
	color: #eee;
	cursor: pointer;

	&:hover {
		color: rgb(89, 139, 248);
	}
`;

const ScrollMeAnimation = keyframes`
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(15px);
    }
    100% {
        transform: translateY(0px);
    }
`;

export const CaretIcon = styled.div`
	font-size: 50px;
	cursor: pointer;
	animation: ${ScrollMeAnimation} 1s ease infinite;

	&:hover {
		transform: translateY(10px);
	}
`;
