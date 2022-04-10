import React, { useState, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../styles/Layouts';
import NavbarItem from './NavbarItem';

const Navbar = () => {
	const [openNav, setOpenNav] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [navHeight, setNavHeight] = useState(0);

	const openNavigation = () => {
		var fragment = document.createDocumentFragment();
		fragment.append(document.getElementById('navigation'));
		document.getElementById('overlay').append(fragment);
		setIsOpen(true);
	};

	const closeNavigation = () => {
		var fragment = document.createDocumentFragment();
		fragment.append(document.getElementById('navigation'));
		document.getElementById('content').append(fragment);
		setIsOpen(false);
	};

	const getNavbarSize = () => {
		let box = document.getElementById('navigation');
		let height = box.offsetHeight;
		setNavHeight(height);
		console.log(height);
	};

	useLayoutEffect(() => {
		getNavbarSize();
	}, []);

	useEffect(() => {
		if (openNav) {
			openNavigation();
		} else {
			closeNavigation();
		}
	}, [openNav]);

	return (
		<NavbarWrap id='navbar'>
			<Container>
				<NavbarContent id='content'>
					<BrandWrap>
						<BrandName href='/'>Cami ten Napel</BrandName>
					</BrandWrap>
					<NavbarList id='navigation'>
						<NavbarItem title='Resume' link='/resume' />
						<NavbarItem title='My Work' link='/my-work' />
						<NavbarItem title='Contact' link='/#contact' />
					</NavbarList>
					<MenuButton
						onClick={() => setOpenNav(!openNav)}
					></MenuButton>
				</NavbarContent>
				<NavbarOverlay
					id='overlay'
					style={
						isOpen
							? {
									top: `${navHeight}`,
									display: 'block',
							  }
							: { height: '0' }
					}
				></NavbarOverlay>
			</Container>
		</NavbarWrap>
	);
};

export default Navbar;

const NavbarWrap = styled.nav`
	width: 100%;
	background-color: var(--highlight-color);
	color: var(--body-color);
	padding: 1rem 0rem;
`;

const NavbarOverlay = styled.div`
	display: none;
	position: absolute;
	overflow: hidden;
	display: none;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	background-color: black;
	z-index: 1000;
`;

const NavbarContent = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const BrandWrap = styled.div``;

const NavbarList = styled.div`
	display: flex;
	align-items: center;
	@media (max-width: 767px) {
		display: none;
	}
`;

const BrandName = styled.a`
	font-size: 1.5rem;
	line-height: 1.25;
	color: inherit;
	text-decoration: none;
`;

const MenuButton = styled.button`
	display: none;

	@media (max-width: 767px) {
		display: block;
	}
`;
