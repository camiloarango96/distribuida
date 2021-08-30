import React, { useState, useEffect } from 'react';
import { addCart } from '../logic/apiCalls';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

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
		return `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`;
	};
	const getTimeInfo = (fecha) => {
		return `${fecha.getHours()}:${fecha.getMinutes()}`;
	};

	useEffect(() => {
		Auth.currentAuthenticatedUser()
			.then((user) => setUser(user))
			// if there is no authenticated user, redirect to profile page
			.catch(() => router.push('/'));
	}, []);

	if (!user) return null;

	let email = user.attributes.email;

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
							onClick={() => addCart({ amount, id, email })}
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
						<h1>{getDateInfo(departureDate)}</h1>
						<h1>{origen}</h1>
						<h1>{getTimeInfo(departureDate)}</h1>
					</div>
					<div className=" flex flex-col items-center">
						<h1>{numerovuelo}</h1>
						<h1>{description}</h1>
					</div>
					<div className="flex flex-col items-end">
						<h1>{getDateInfo(arrivalDate)}</h1>
						<h1 className="">{destino}</h1>

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
