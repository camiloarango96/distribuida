import React, { useEffect, useState } from 'react';
import { getCart } from '../logic/apiCalls';

import NavBar from '../components/navBar';

export default function Cart() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const apiCart = async () => {
			const data = await getCart('mateoarteagagiraldo@gmail.com');
			console.log(data);
		};

		apiCart();
	}, []);

	return (
		<div className="flex w-full h-full px-9 md:px-20 xl:px-60 flex-col">
			<NavBar />
			<h1>Bienvenidos a cart</h1>
		</div>
	);
}
