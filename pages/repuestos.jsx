import React, { useEffect, useState } from 'react';
import NavBar from '../components/navBar.jsx';
import { getInventory } from '../logic/apiCalls.js';
import Repuesto from '../components/repuesto.jsx';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

export default function Repuestos() {
	const [repuestos, setRepuestos] = useState([]);
	const [amount, setAmount] = useState(0);
	const [user, setUser] = useState(null);
	const router = useRouter();

	useEffect(() => {
		const inventory = async () => {
			const data = await getInventory([]);

			data.forEach((element) => {
				setRepuestos((old) => [...old, element]);
			});
		};

		inventory();

		Auth.currentAuthenticatedUser()
			.then((user) => setUser(user))
			// if there is no authenticated user, redirect to profile page
			.catch(() => router.push('/'));
	}, []);

	if (!user) return null;

	return (
		<div className="flex w-full h-full px-9 md:px-20 xl:px-60 flex-col ">
			<NavBar />
			<main className="flex flex-row justify-center text-xs lg:text-sm">
				<table className="table-auto mt-10 px-10 w-1/2">
					<thead className="">
						<tr>
							<th className="hidden">Id</th>
							<th className="">Nombre</th>
							<th className="">Descripcion</th>
							<th className="">Vida Util (anos)</th>
							<th className="">Proveedor</th>
							<th className="">Precio (USD)</th>
							<th className="">Cantidad</th>
						</tr>
					</thead>
					<tbody className="">
						{repuestos.map((element, key) => {
							return <Repuesto key={key} {...element} />;
						})}
					</tbody>
				</table>
			</main>
		</div>
	);
}
