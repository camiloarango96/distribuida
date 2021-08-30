import { ConsoleLogger } from '@aws-amplify/core';
import axios from 'axios';

const newAxios = axios.create({
	mode: 'cors',
	headers: {
		'Content-Type': 'multipart/form-data',
		'Access-Control-Expose-Headers': '*',
		'Access-Control-Allow-Headers': '*',
	},
});

export function addCart({ cantidad, id_vuelo, email_usuario }) {
	console.log(cantidad, id_vuelo, email_usuario);
	newAxios
		.post('https://htqquni9q7.execute-api.us-east-2.amazonaws.com/addTiquet', {
			cantidad,
			id_vuelo,
			email_usuario,
		})
		.then((res) => console.log(res))
		.catch((err) => console.log(err));

	console.log(obj);
}

export async function getVuelos() {
	const data = await newAxios.get(
		'https://htqquni9q7.execute-api.us-east-2.amazonaws.com/Prueba2'
	);

	return data.data;
}
