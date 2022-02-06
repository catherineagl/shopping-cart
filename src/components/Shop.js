import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from './Card';
import { helpHttp } from '../helpers/helpHttp';
import { Loader } from './Loader';
export const Shop = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			let url = 'https://fakestoreapi.com/products/';
			setLoading(true);

			const res = await helpHttp().get(url);

			setItems(res);
			setLoading(false);
		};

		fetchData();
	}, []);

	return (
		<Section>
			{loading && <Loader />}
			{items.map((item) => (
				<Card key={item.id} item={item} />
			))}
		</Section>
	);
};

const Section = styled.section`
	margin-top: 10vh;
	padding: 2rem;
	position: relative;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
