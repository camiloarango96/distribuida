import React, { useEffect, useState } from 'react';
import { getCart } from '../logic/apiCalls';
import { Auth } from 'aws-amplify';
import NavBar from '../components/navBar';
import CantidadCarrito from '../components/cantidadCarrito';
import InfoVuelo from '../components/infoVuelo';
import Tiquete from '../components/tickete';
import { useRouter } from 'next/router';

export default function Cart() {
	const [items, setItems] = useState([]);
	const [user, setUser] = useState(null);
	const router = useRouter();

	const apiCart = async (email_usuario) => {
		const data = await getCart(email_usuario);
		data.data.forEach((element) => {
			let {
				destino,
				origen,
				descripcion: description,
				fecha_llegada: fechallegada,
				fecha_salida: fechasalida,
				numero_reserva: numerovuelo,
				id,
				precio,
				cantidad,
			} = { ...element };
			let tiquete = {
				destino,
				origen,
				description,
				fechallegada,
				fechasalida,
				numerovuelo,
				id,
				precio,
				cantidad,
			};
			setItems((old) => [...old, tiquete]);
		});
	};

	useEffect(() => {
		Auth.currentAuthenticatedUser()
			.then((user) => setUser(user))
			// if there is no authenticated user, redirect to profile page
			.catch(() => router.push('/'));

		if (!user) {
			return null;
		} else {
			apiCart(user.attributes.email);
		}
	}, []);

	// let email_usuario = user.attributes.email;

	return (
		<div className="flex w-full h-full px-9 md:px-20 xl:px-60 flex-col">
			<NavBar />
			<h1>Bienvenidos a cart</h1>
			<div>
				{items.map((element, key) => {
					return (
						<div key={key} className="flex w-full flex-row justify-center">
							<Tiquete {...element} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
