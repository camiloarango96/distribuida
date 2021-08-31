import React, { useState, useEffect } from 'react';
import { addOrder } from '../logic/apiCalls.js';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

export default function Repuesto({
	id,
	nombre,
	descripcion,
	vida_util,
	nombre_proveedor,
	precio,
}) {
	const [amount, setAmount] = useState(0);
	const [user, setUser] = useState(null);

	const router = useRouter();

	useEffect(() => {
		Auth.currentAuthenticatedUser()
			.then((user) => setUser(user))
			// if there is no authenticated user, redirect to profile page
			.catch(() => router.push('/'));
	}, []);

	if (!user) return null;

	// let email_usuario = user.attributes.email;

	const AmountComponent = () => {
		return (
			<div className="flex flex-row items-center space-x-1">
				<button
					className="text-lg px-2 py-1"
					onClick={() => {
						amount == 0 ? null : setAmount(amount - 1);
					}}
				>
					-
				</button>
				<div className="flex w-full  px-2 py-1 rounded-sm">
					<p>{amount}</p>
				</div>
				<button
					className="text-lg  px-2 py-1"
					onClick={() => setAmount(amount + 1)}
				>
					+
				</button>
			</div>
		);
	};

	//user.attributes.email
	return (
		<tr className="border-1 border-t border-black ">
			<td className="text-center">{id}</td>
			<td className="text-center">{nombre}</td>
			<td className="text-center">{descripcion}</td>
			<td className="text-center">{vida_util}</td>
			<td className="text-center">{nombre_proveedor}</td>
			<td className="text-center">$ {precio}</td>
			<td>
				<AmountComponent />
			</td>
			<td>
				<button
					className="text-white px-2 font-normal bg-primary text-center rounded-md ml-5"
					onClick={() => {
						hacerPedido({
							cantidad: amount,
							id: id,
							orderedBy: user.attributes.email,
						});
					}}
				>
					Pedir
				</button>
			</td>
		</tr>
	);
}

const hacerPedido = async ({ cantidad, id, orderedBy }) => {
	const response = await addOrder({ cantidad, id, orderedBy });
	if (response == 200) {
		return alert('Pedido correctamente');
	} else {
		return alert('Algo salio mal ');
	}
	console.log('response', response);
};
