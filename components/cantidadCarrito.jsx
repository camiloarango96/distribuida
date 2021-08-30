import React, { useState } from 'react';

export default function CantidadCarrito({ cantidad }) {
	const [amount, setAmount] = useState(0);

	return (
		<div>
			<h1>{cantidad}</h1>
		</div>
	);
}
