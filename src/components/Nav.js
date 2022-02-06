import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Navbar>
			<Logo href="#">
				E-<span>Shop</span>
			</Logo>
			<Hamburger onClick={() => setIsOpen(!isOpen)}>
				<span />
				<span />
				<span />
			</Hamburger>
			<Menu isOpen={isOpen}>
				<Link to="/">
					<Li>Home</Li>
				</Link>

				<Link to="/shop">
					<Li>Shop</Li>
				</Link>

				<Link to="/cart">
					<Li>Cart</Li>
				</Link>
			</Menu>
		</Navbar>
	);
};

const Navbar = styled.nav`
	background: #2c3333;
	width: 100%;
	height: 10vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	color: white;
	padding: 0 1rem;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
`;

const Logo = styled.a`
	padding: 1rem 0;
	color: #7b7fda;
	text-decoration: none;
	font-weight: 800;
	font-size: 2rem;
	span {
		font-weight: 300;
		font-size: 1.5rem;
	}
`;

const Li = styled.li`
	padding: 1rem 2rem;
	cursor: pointer;
	text-align: center;
	color: ${({ isOpen }) => (isOpen ? '#7b7fda' : 'white')};
	transition: all 0.3s ease-in;
	font-size: 1.2rem;
	&:hover {
		color: #7b7fda;
	}
`;

const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;

	list-style: none;
	@media (max-width: 768px) {
		overflow: hidden;
		flex-direction: column;
		background: #7b7fda;
		max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
		transition: max-height 0.3s ease-in;
		width: 100%;
	}
`;

const Hamburger = styled.div`
	display: none;
	flex-direction: column;
	cursor: pointer;
	span {
		height: 2px;
		width: 25px;
		background: #7b7fda;
		margin-bottom: 4px;
		border-radius: 5px;
	}
	@media (max-width: 768px) {
		display: flex;
	}
`;
