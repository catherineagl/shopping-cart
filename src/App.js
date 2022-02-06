import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Shop } from './components/Shop';
import { Cart } from './components/Cart';
import { Nav } from './components/Nav';
import { ItemDetails } from './components/ItemDetails';
import styled from 'styled-components';

const App = () => {
	return (
		<BrowserRouter>
			<Container>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/shop/:id" element={<ItemDetails />} />
				</Routes>
			</Container>
		</BrowserRouter>
	);
};

const Container = styled.div`
	height: 100vh;
`;
export default App;
