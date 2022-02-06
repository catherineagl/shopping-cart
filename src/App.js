import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from './components/Home';
import { Shop } from './components/Shop';
import { Cart } from './components/Cart';
import { Nav } from './components/Nav';
import styled from 'styled-components';
import { helpHttp } from './helpers/helpHttp';

import { FiShoppingCart } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';
import { Footer } from './components/Footer';

toast.configure();

const App = () => {
	const [cart, setCart] = useState([]);
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);
	const [total, setTotal] = useState(0);
	const [itemExist, setItemExist] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			let url = 'https://fakestoreapi.com/products/';
			setLoading(true);

			const res = await helpHttp().get(url);

			let data = res;
			data.map((item) => (item.qty = 1));
			setItems(data);

			setLoading(false);
		};

		fetchData();
	}, []);

	const showInfoMsg = (msg) => {
		toast.info(msg, {
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};
	const showSuccessMsg = (msg) => {
		toast.success(msg, {
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};
	const handleClick = (id) => {
		if (checkIfExist(id)) {
			showInfoMsg('Item is already in the cart');
			setItemExist(true);
			return;
		} else {
			setItemExist(false);
			let item = items.find((el) => el.id === id);
			setCart([...cart, item]);
			showSuccessMsg('Item added to cart');
		}
	};

	const grandTotal = (arr) => {
		let total = 0;
		arr.forEach((el) => {
			el.total = el.qty * el.price;

			total += el.total;
		});
		return total.toFixed(2);
	};

	const handleQty = (op, id) => {
		let item = cart.find((el) => el.id === id);
		if (op === '+') {
			item.qty = item.qty + 1;
		} else {
			if (item.qty === 1) return;
			item.qty = item.qty - 1;
		}
		item.total = item.qty * item.price;
		setTotal(grandTotal(cart));
	};

	const deleteItem = (id) => {
		setCart(cart.filter((el) => el.id !== id));
		setTotal(grandTotal(cart));
		showSuccessMsg('Item deleted sucessfully');
	};

	const checkIfExist = (id) => {
		return cart.find((el) => el.id === id);
	};

	return (
		<BrowserRouter>
			<Container>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/shop"
						element={
							<Shop items={items} loading={loading} handleClick={handleClick} />
						}
					/>
					<Route
						path="/cart"
						element={
							<Cart
								cart={cart}
								CartIcon={FiShoppingCart}
								Trash={FiTrash2}
								handleQty={handleQty}
								total={total}
								grandTotal={grandTotal}
								deleteItem={deleteItem}
							/>
						}
					/>
				</Routes>

				<Footer />
			</Container>
		</BrowserRouter>
	);
};

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export default App;
