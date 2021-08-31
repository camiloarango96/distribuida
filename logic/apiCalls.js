import axios from 'axios';

const newAxios = axios.create({
	mode: 'cors',
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Expose-Headers': '*',
		'Access-Control-Allow-Headers': '*',
		'Access-Control-Allow-Origin': '*',
		Accept: '*/*',
		// authentication: true,
	},
});

export async function addCart({ cantidad, id_vuelo, email_usuario }) {
	// console.log(cantidad, id_vuelo, email_usuario);
	const status = await newAxios.post(
		'https://1bve2hgs5j.execute-api.us-east-2.amazonaws.com/default/addTiquet',
		{
			cantidad: cantidad,
			id_vuelo: id_vuelo,
			email_usuario: email_usuario,
		}
	);
	// .then((res) => console.log(res))
	// .catch((err) => console.log(err));
	console.log(status);
	return status.status;
}

export async function getVuelos() {
	const data = await newAxios.get(
		'https://htqquni9q7.execute-api.us-east-2.amazonaws.com/Prueba2'
	);

	return data.data;
}

export async function getCart(email_usuario) {
	const data = await newAxios.post(
		'https://1bve2hgs5j.execute-api.us-east-2.amazonaws.com/default/getCarrito',
		{
			email_usuario: email_usuario,
		}
	);

	return data;
}

export async function getInventory() {
	const data = await newAxios.get(
		'http://adb79b373a383495f8006f76bbede4f6-1404650201.us-east-2.elb.amazonaws.com/getInventario'
	);
	return data.data;
}

export async function addOrder({ cantidad, id, orderedBy }) {
	console.log(cantidad, id, orderedBy);
	const data = await newAxios.post(
		'http://adb79b373a383495f8006f76bbede4f6-1404650201.us-east-2.elb.amazonaws.com/addOrder',
		{
			cantidad: cantidad,
			id: id,
			orderedBy: orderedBy,
		}
	);
	return data.status;
}
