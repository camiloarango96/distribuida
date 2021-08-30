import { ConsoleLogger } from '@aws-amplify/core';
import axios from 'axios';

const newAxios = axios.create({
	mode: 'cors',
	headers: {
		'Content-Type': 'multipart/form-data',
		'Access-Control-Expose-Headers': '*',
		'Access-Control-Allow-Headers': '*',
		'Access-Control-Allow-Origin': '*',
		Accept: '*/*',
	},
});

export function addCart({ cantidad, id_vuelo, email_usuario }) {
	console.log(cantidad, id_vuelo, email_usuario);
	newAxios
		.post(
			'https://1bve2hgs5j.execute-api.us-east-2.amazonaws.com/default/addTiquet',
			{
				body: {
					cantidad: cantidad,
					id_vuelo: id_vuelo,
					email_usuario: email_usuario,
				},
			}
		)
		.then((res) => console.log(res))
		.catch((err) => console.log(err));
}

export async function getVuelos() {
	const data = await newAxios.get(
		'https://htqquni9q7.execute-api.us-east-2.amazonaws.com/Prueba2'
	);

	return data.data;
}

// export function getPrecio(id) {
// 	newAxios
// 		.post('https://htqquni9q7.execute-api.us-east-2.amazonaws.com/getprecio', {
// 			id,
// 		})
// 		.then((res) => console.log(res))
// 		.catch((err) => console.log(err));
// }
