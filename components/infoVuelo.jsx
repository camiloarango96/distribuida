import React, { useState } from 'react';

export default function InfoVuelo({
	Destino,
	Origen,
	descripcion,
	fechallegada,
	fechasalida,
	numerovuelo,
	precio,
}) {
	const [show, setShow] = useState(false);

	const departureDate = new Date(fechasalida);
	const arrivalDate = new Date(fechallegada);
	const getDateInfo = (fecha) => {
		return `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`;
	};
	const getTimeInfo = (fecha) => {
		return `${fecha.getHours()}:${fecha.getMinutes()}`;
	};

	// const ShowDescription = () => {
	// 	let status = 'hidden';
	// 	if (show) {
	// 		status = 'flex';
	// 	}

	// 	return (
	// 		<div
	// 			className={`text-sm text-center w-full rounded-lg bg-white ${status}`}
	// 		>
	// 			<h1>{descripcion}</h1>
	// 		</div>
	// 	);
	// };

	return (
		<div className="flex flex-col text-sm md:text-md lg:text-lg">
			<div className="flex felx-row w-full h-50 bg-gray-100  mt-10 px-5 py-5 justify-between rounded-t-lg ">
				<div className="">
					<h1>{getDateInfo(departureDate)}</h1>
					<h1>{Origen}</h1>
					<h1>{getTimeInfo(departureDate)}</h1>
				</div>
				<div className=" flex flex-col">
					<h1>{numerovuelo}</h1>
				</div>
				<div className="">
					<h1>{getDateInfo(arrivalDate)}</h1>
					<h1 className="">{Destino}</h1>

					<h1>{getTimeInfo(arrivalDate)}</h1>
				</div>
			</div>
			<div className="w-full flex justify-center bg-secondary py-2 rounded-b-lg">
				<h3 className="text-white ">{`$${precio}`}</h3>
			</div>
		</div>
	);
}
