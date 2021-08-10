// import contentful from 'contentful';
import NavBar from '../components/navBar';
var contentful = require('contentful');
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PaginaDestinos(props) {
	const [destinos, setDestinos] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://cdn.contentful.com/spaces/kf1rglx1u1m4/entries?access_token=DE4hnN1-JrVaXr77_34OLFjPGzwdqwKl4govapaiIyI&items'
			)
			.then((res) => {
				console.log(res.data.items);
				const data = res.data.items;
				data.forEach((element) => {
					setDestinos((old) => [...old, element.fields]);
				});
			});
	}, []);

	const CargaDestinos = () => {
		if (destinos.length == 0) {
			return <h1>Cargando destinos ...</h1>;
		}
		destinos.forEach((element, key) => {
			console.log(`destino numero ${key} = ${element}`);
		});
		return <h1>Destinos</h1>;
	};

	return (
		<div className="flex w-full h-full px-9 md:px-20 xl:px-60 flex-col">
			<NavBar />
			<header className="mt-16 w-full h-full flex flex-col items-center">
				<CargaDestinos />
				hola destinos
			</header>
			<main className="flex flex-col w-full h-full mt-5"></main>
		</div>
	);
}
