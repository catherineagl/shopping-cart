import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = (props) => {
	const { item } = props;
	console.log(item);
	return (
		<CardBox>
			<ImgBox>
				<img src={item.image} alt="item product" />
			</ImgBox>

			<ContentBox>
				<h2>
					{item.title} <span>${item.price}</span>
				</h2>
				<Buttons>
					<Button style={{ backgroundColor: '#F6D860' }}>Add to cart</Button>
					<Link to={`/cart/${item.id}`}>
						<Button style={{ backgroundColor: '#548CFF' }}>Buy Now!</Button>
					</Link>
				</Buttons>
			</ContentBox>
		</CardBox>
	);
};

const Button = styled.div`
	display: inline-block;
	padding: 0.5rem 1rem;
	border-radius: 0.2rem;
	margin-top: 0.5rem;
	font-weigth: 600;
	color: #fff;
	margin-right: 0.2rem;
	cursor: pointer;
	opacity: 0;
	transform: translateY(50px);
	transition: 0.5s;
`;

const ContentBox = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 100px;
	text-align: center;
	z-index: 10;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	transition: 1s;
	h2 {
		position: relative;
		font-weight: normal;
		letter-spacing: 1px;
		color: #fff;
		font-size: 1rem;
		span {
			display: block;
			font-size: 1.2rem;
			color: green;
		}
	}
`;

const ImgBox = styled.div`
	position: absolute;
	top: 10px;
	left: 10px;
	z-index: 2;
	width: 280px;
	background: white;
	height: 280px;
	transition: 0.5s;

	img {
		position: absolute;
		object-fit: contain;
		width: 100%;
		height: 100%;
		z-index: 10000;
		border-radius: 1rem;
	}
`;

const CardBox = styled.div`
	position: relative;
	width: 300px;
	height: 450px;
	background: #2c3333;
	border-radius: 1rem;
	margin: 1rem;
	overflow: hidden;

	&:hover ${ContentBox} {
		height: 200px;
		background: #2c3333;
	}

	&:hover ${Button} {
		opacity: 1;
		transform: translateY(20px);
		transition-delay: 0.75s;
	}
`;

const Buttons = styled.div`
	display: flex;
	justify-content: center;
`;
