import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Home = () => {
	return (
		<Section>
			<h2>This is the homepage</h2>
			<Link to="/shop">
				<Button>Go to Shop!</Button>
			</Link>
		</Section>
	);
};

const Section = styled.section`
	margin-top: 10vh;
	padding: 2rem;
`;

const Button = styled.div`
	background: #7b7fda;
	display: inline-block;
	padding: 1rem 2rem;
`;
