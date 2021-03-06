import React, { useState, useEffect } from 'react';
import { addCart, getPrecio } from '../logic/apiCalls';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import { getDomainLocale } from 'next/dist/next-server/lib/router/router';

const misFechas = new Map();
misFechas.set(1, 'ENE');
misFechas.set(2, 'FEB');
misFechas.set(3, 'MAR');
misFechas.set(4, 'ABR');
misFechas.set(5, 'MAY');
misFechas.set(6, 'JUN');
misFechas.set(7, 'JUL');
misFechas.set(8, 'AGO');
misFechas.set(9, 'SEP');
misFechas.set(10, 'OCT');
misFechas.set(11, 'NOV');
misFechas.set(12, 'DIC');

export default function InfoVuelo({
	destino,
	origen,
	description,
	fechallegada,
	fechasalida,
	numerovuelo,
	id,
	precio,
}) {
	const [show, setShow] = useState(false);
	const [amount, setAmount] = useState(0);
	const [user, setUser] = useState(null);

	const router = useRouter();

	const departureDate = new Date(fechasalida);
	const arrivalDate = new Date(fechallegada);
	const getDateInfo = (fecha) => {
		const dia = fecha.getDate();
		const mes = misFechas.get(fecha.getMonth());

		return `${dia}   ${mes}`;
	};
	const getTimeInfo = (fecha) => {
		return `${fecha.getHours()}:${fecha.getMinutes()}`;
	};

	const processDestiny = (destino) => {
		return destino.split(',')[0];
	};

	useEffect(() => {
		Auth.currentAuthenticatedUser()
			.then((user) => setUser(user))
			// if there is no authenticated user, redirect to profile page
			.catch(() => router.push('/'));
	}, []);

	if (!user) return null;

	// let email_usuario = user.attributes.email;
	// let email_usuario = 'mateoarteagagiraldo@gmail.com';

	const Cantidad = () => {
		return (
			<div className="flex flex-col items-center justify-center">
				<h3>{amount}</h3>
			</div>
		);
	};

	const ShowMenuCart = () => {
		let status = 'hidden';
		if (show) {
			status = 'flex';
		}

		return (
			<div className="flex flex-row w-full h-full justify-center">
				<div
					className={`flex flex-row justify-center items-center h-24 w-1/2 text-sm text-center  rounded-b-lg bg-gray-100 shadow-md ${status}`}
				>
					<div className="flex flex-col justify-start py-8">
						<div className="flex flex-row space-x-3 justify-center">
							<button
								className="text-lg font-bold px-2 py-1"
								onClick={() => {
									amount == 0 ? null : setAmount(amount - 1);
								}}
							>
								-
							</button>
							<Cantidad />

							<button
								className="text-lg font-bold px-2 py-1"
								onClick={() => setAmount(amount + 1)}
							>
								+
							</button>
						</div>
						<button
							className="bg-primary mt-2 px-2 py-1 rounded-md text-white"
							onClick={async () => {
								if (amount <= 0) {
									alert('no puedes agregar tiquetes sin una cantidad');
									return;
								}
								const status = await addCart({
									cantidad: amount,
									id_vuelo: id,
									email_usuario: user.attributes.email,
								});

								if (status == 200) {
									alert('Agregado exitosamente');
								}
							}}
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div>
			<div
				className="flex flex-col text-sm md:text-md lg:text-lg"
				onClick={() => setShow(!show)}
			>
				<div className="flex felx-row w-full h-50 bg-gray-100  mt-10 px-5 py-5 justify-between rounded-t-lg ">
					<div className="flex flex-col items-start">
						<h1 className="text-sm">{getDateInfo(departureDate)}</h1>
						<h1>{origen}</h1>
						<h1>{getTimeInfo(departureDate)}</h1>
					</div>
					<div className=" flex flex-col items-center">
						<h1>{numerovuelo}</h1>
						<img src="/pruebaViaje.svg" alt="" className="w-60" />
					</div>
					<div className="flex flex-col items-end justify-end">
						{/* <h1>{getDateInfo(arrivalDate)}</h1> */}
						<h1 className="">{processDestiny(destino)}</h1>

						<h1>{getTimeInfo(arrivalDate)}</h1>
					</div>
				</div>
				<div
					className="w-full flex justify-center bg-secondary py-2 rounded-b-lg"
					onClick={() => setShow(!show)}
				>
					<h3 className="text-white ">{`$ ${precio} USD`}</h3>
				</div>
			</div>
			<ShowMenuCart />
		</div>
	);
}
