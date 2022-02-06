import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
	return (
		<FooterText>
			Created by{' '}
			<a href="https://github.com/catherineagl">Catherine Aguilera</a>| 2022
		</FooterText>
	);
};

const FooterText = styled.nav`
	background: #2c3333;
	text-align: center;
	color: white;
	padding: 1rem;

	a {
		margin-right: 0.25rem;
		color: #7b7fda;
	}
`;
