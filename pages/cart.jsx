import React, { useEffect, useState } from 'react';
import { getCart } from '../logic/apiCalls';

import NavBar from '../components/navBar';
import CantidadCarrito from '../components/cantidadCarrito';
import InfoVuelo from '../components/infoVuelo';
import Tiquete from '../components/tickete';

export default function Cart() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const apiCart = async () => {
			const data = await getCart('mateoarteagagiraldo@gmail.com');
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

		apiCart();
	}, []);

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
