import React from 'react';

export default function InfoVuelo({
	Destino,
	Origen,
	descripcion,
	fechallegada,
	fechasalida,
	numerovuelo,
	Precio,
}) {
	return (
		<div className="w-full h-50 bg-terceary flex-row mt-10">
			<div>
				<h1>{fechasalida}</h1>
				<h1>{Origen}</h1>
			</div>
			<div>
				<h1>
					{descripcion}
					{numerovuelo}
				</h1>
			</div>
			<div>
				<h1>{fechallegada}</h1>
				<h1>{Destino}</h1>
			</div>
			<h3>{Precio}</h3>
		</div>
	);
}
