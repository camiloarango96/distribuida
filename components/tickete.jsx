import React, { useState, useEffect } from 'react';

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

export default function Tickete({
	destino,
	origen,
	description,
	fechallegada,
	fechasalida,
	numerovuelo,
	id,
	precio,
	cantidad,
	numero,
}) {
	const [amount, setAmount] = useState(0);

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
		setAmount(cantidad);
	}, []);

	return (
		<div className="flex w-full flex-col justify-start items-center space-x-4 mt-10 md:flex-row md:justify-center">
			<div className="flex flex-row justify-between w-full px-12 mb-1 md:inline md:w-0 md:px-0 md:mb-0 md:mr-5">
				<h1 className="text-xs  md:text-lg md:font-bold ">{numero + 1}</h1>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-4 w-4  cursor-pointer  md:hidden"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
					/>
				</svg>
			</div>

			<div className="flex flex-col text-sm md:text-md lg:text-lg items-center justify-center md:ml-5">
				<div className="flex felx-row w-60 h-50 bg-gray-100  px-10 py-5 justify-between rounded-lg shadow-md lg:w-96">
					<div className="flex flex-col items-start">
						<h1 className="text-sm">{getDateInfo(departureDate)}</h1>
						<h1>{origen}</h1>
						<h1 className="text-sm">{getTimeInfo(departureDate)}</h1>
					</div>
					<div className=" flex flex-col items-center">
						<h1>{numerovuelo}</h1>
						<img src="/pruebaViaje.svg" alt="" className="w-28" />
					</div>
					<div className="flex flex-col items-center justify-end">
						{/* <h1>{getDateInfo(arrivalDate)}</h1> */}
						<h1 className="">{processDestiny(destino)}</h1>

						<h1 className="text-sm">{getTimeInfo(arrivalDate)}</h1>
					</div>
				</div>
				{/* <div className="w-full flex justify-center bg-secondary py-2 rounded-b-lg">
					<h3 className="text-white ">{`$ ${precio} USD`}</h3>
				</div> */}
			</div>
			<div className="flex flex-row justify-start mt-4 items-center h-full space-x-2 md:space-x-6">
				<div className="flex flex-col h-full items-center justify-center">
					<h4 className="md:font-bold mb-3">Cantidad</h4>
					<div className="flex flex-col  h-full items-center justify-center px-3 rounded-lg shadow-md">
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
					</div>
				</div>
				<div className="flex flex-col h-full justify-center items-center space-y-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5  cursor-pointer hidden md:flex"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
						/>
					</svg>
					<IrAPagar />
					<p>Total: {precio * cantidad} USD</p>
				</div>
			</div>
		</div>
	);
}

const IrAPagar = () => {
	return (
		<div className="flex flex-col ">
			<button className="px-3 py-1 bg-primary text-white rounded-md">
				Pagar
			</button>
		</div>
	);
};
