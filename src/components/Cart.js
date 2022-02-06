import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Img } from '../empty_cart.svg';

export const Cart = (props) => {
	const { CartIcon, Trash, cart, handleQty, grandTotal, deleteItem } = props;

	return (
		<Section>
			<h2>
				My <span>Items</span> {<CartIcon style={{ fontSize: '2.2rem' }} />}
			</h2>
			{!cart[0] && (
				<Img style={{ width: '40%', height: '30%', marginTop: '5rem' }} />
			)}
			<Items>
				{cart.map((item) => (
					<Item key={item.id}>
						<ImgBox>
							<img src={item.image} alt="product" />
						</ImgBox>
						<ItemInfo>
							<h4>{item.title}</h4>
							<h4>{item.description}</h4>
							<h4>
								$
								{(item.total && item.total.toFixed(2)) || item.price.toFixed(2)}
							</h4>
							<QtyBox>
								<Button onClick={() => handleQty('-', item.id)}>-</Button>
								<span>{item.qty}</span>
								<Button onClick={() => handleQty('+', item.id)}>+</Button>
							</QtyBox>
						</ItemInfo>

						<Button
							style={{ color: 'red', fontSize: '1.5rem' }}
							onClick={() => deleteItem(item.id)}
						>
							{<Trash />}
						</Button>
					</Item>
				))}
			</Items>

			<Checkout>
				<h3>
					Order Total: <span>${grandTotal(cart)}</span>
				</h3>
				<Button>Checkout</Button>
			</Checkout>
		</Section>
	);
};

const Section = styled.section`
	margin-top: 10vh;
	padding: 2rem;
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-right: auto;
	margin-left: auto;

	h2 {
		font-size: 3rem;
		font-weight: normal;
		color: #444;

		span {
			color: #7b7fda;
		}
	}
`;

const Items = styled.div`
	display: flex;
	flex-direction: column;
`;

const Item = styled.div`
	display: grid;
	grid-template-columns: 20% 1fr 5%;
	grid-column-gap: 1rem;
	align-items: center;
	justify-content: space-between;
	margin: 1rem 0;
`;

const ItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 2px solid #999;
	border-radius: 0.5rem;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	min-height: 200px;
	border-left: none;
	padding: 1rem;

	h4 {
		font-weight: normal;
		color: #666;
	}

	h4:nth-child(1) {
		font-weight: bold;
	}
	h4:nth-child(3) {
		font-weight: bold;
		color: green;
		font-size: 1.5rem;
		text-align: right;
	}
`;

const QtyBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	width: min-content;
	border-top: solid 2px #999;
	border-bottom: solid 2px #999;
	background: #7b7fda;

	span {
		display: inline-block;
		color: white;
		font-weight: bold;
		padding: 0 0.75rem;
		font-size: 1.2rem;
	}
	button {
		border: solid 2px #666;
		border-top: none;
		border-bottom: none;
		font-size: 1.5rem;
		font-weigth: bold;
		color: white;
		padding: 0.5rem 0.75rem;
	}
	button:nth-child(first-child) {
		background: red;
	}
`;

const ImgBox = styled.div`
	width: 200px;
	height: 200px;
	img {
		width: 100%;
		height: 100%;
		objet-fit: contain;
	}
`;

const Button = styled.button`
	border: none;
	background: transparent;
	padding: 0.5rem;
	cursor: pointer;
`;

const Checkout = styled.div`
	display: flex;
	flex-direction: column;
	color: #666;
	font-weight: bold;
	padding: 2rem 4rem;
	font-size: 1.5rem;
	margin-top: 2rem;
	border: 2px solid #999;
	border-radius: 0.5rem;

	span {
		display: inline;
		color: green;
		margin-left: 1rem;
	}

	button {
		background: #7b7fda;
		margin-top: 1rem;
		border-radius: 5rem;
		font-size: 1.2rem;
		color: white;
		transition: all 0.5s ease;

		&:hover {
			letter-spacing: 5px;
		}
	}
`;
