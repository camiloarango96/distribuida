import React from 'react';

import NavBar from '../components/navBar';

export default function cart() {
	return (
		<div className="flex w-full h-full px-9 md:px-20 xl:px-60 flex-col">
			<NavBar />
			<h1>Bienvenidos a cart</h1>
		</div>
	);
}
