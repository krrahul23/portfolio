import styled from 'styled-components';

export const NavContainer = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItems = styled.nav`
	padding-bottom: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

export const NavItem = styled.div`
	font-size: 1.2rem;
	padding: 2px 0;
	color: #aaa;
	transition: all 300ms ease 0s;
	cursor: pointer;

	&:hover {
		color: rgb(89, 139, 248);
	}
`;

export const Icons = styled.div`
	display: flex;
	gap: 10px;
`;

export const Anchor = styled.a``;
