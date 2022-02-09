import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';
import { Loader } from './Loader';
export const Shop = (props) => {
	const { items, loading, handleClick } = props;
	return (
		<Section>
			{loading && <Loader />}
			{items.map((item) => (
				<Card key={item.id} item={item} handleClick={handleClick} />
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
