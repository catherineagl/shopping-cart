import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Img } from '../web_shopping.svg';

export const Home = () => {
	return (
		<Section>
			<Div>
				<h2>
					Visit the most amazing <span>e-shop</span> for special prices
					everyday!
				</h2>
				<Link to="/shop">
					<Button>Go to Shop!</Button>
				</Link>
			</Div>
			<Img />
		</Section>
	);
};
//grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
//grid-template-columns: 60% 40%;

//grid-auto-rows: 1fr;
const Section = styled.section`
	margin-top: 10vh;
	padding: 2rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	svg {
		width: 100%;
	}
`;

const Div = styled.div`
	padding: 1rem;
	margin-top: 10%;
	text-align: center;

	h2 {
		font-size: 3rem;
		margin-bottom: 2rem;

		span {
			color: #7b7fda;
			font-size: 3.5rem;
		}
	}
`;

const Button = styled.div`
	background: #7b7fda;
	display: inline-block;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	font-size: 1.5rem;
	box-shadow: 2px 2px 10px #999;
	transition: all 0.5s ease-in-out;
	&:hover {
		transform: scale(1.2);
		opacity: 0.9;
	}
`;
