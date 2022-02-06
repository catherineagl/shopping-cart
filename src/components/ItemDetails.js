import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

export const ItemDetails = () => {
	const { id } = useParams();

	/* 	useEffect(()=>{
		fetch(`https://fakestoreapi.com/products/${id}`)
		.then(res=>res.json())
		.then(json=>console.log(json))
	},[id]) */

	return <Section>Item</Section>;
};

const Section = styled.section`
	margin-top: 10vh;
	padding: 2rem;
`;
