import { ConsoleLogger } from '@aws-amplify/core';
import axios from 'axios';

const newAxios = axios.create({
	mode: 'cors',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
		'Access-Control-Expose-Headers': '*',
        'Access-Control-Allow-Headers': '*',
		
	},
});

// newAxios.defaults.headers['Content-Type'] = 'application/json';
// newAxios.defaults.headers['Access-Control-Allow-Origin'] = '*';

export function addCart(obj) {
	newAxios
		.get('https://htqquni9q7.execute-api.us-east-2.amazonaws.com/Prueba1')
		.then((res) => console.log(res))
		.catch((Err) => console.log(Err));

	console.log(obj);
}

export function getPrecio(id) {
	newAxios
		.post('https://htqquni9q7.execute-api.us-east-2.amazonaws.com/getprecio', {
			id,
		})
		.then((res) => console.log(res))
		.catch((err) => console.log(err));
}
