import React, { useState } from 'react';

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
}) {
	const [amount, setAmount] = useState(0);

	const departureDate = new Date(fechasalida);
	const arrivalDate = new Date(fechallegada);
	const getDateInfo = (fecha) => {
		return `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`;
	};
	const getTimeInfo = (fecha) => {
		return `${fecha.getHours()}:${fecha.getMinutes()}`;
	};

	return (
		<div>
			<div className="flex flex-col text-sm md:text-md lg:text-lg">
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
				<div className="w-full flex justify-center bg-secondary py-2 rounded-b-lg">
					<h3 className="text-white ">{`$ ${precio} USD`}</h3>
				</div>
			</div>
		</div>
	);
}
