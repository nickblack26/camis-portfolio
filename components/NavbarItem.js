import React from 'react';
import styled from 'styled-components';

const NavbarItem = ({ title, link }) => {
	return <NavbarItemWrap href={link}>{title}</NavbarItemWrap>;
};

export default NavbarItem;

const NavbarItemWrap = styled.a`
	padding: 0rem 1rem;
	color: inherit;
	text-decoration: none;
`;
