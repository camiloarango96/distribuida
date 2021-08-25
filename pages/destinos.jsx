import NavBar from '../components/navBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import InfoVuelo from '../components/infoVuelo.jsx';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

export default function PaginaDestinos(props) {
	const [destinos, setDestinos] = useState([]);
	const [user, setUser] = useState(null);
	const router = useRouter();

	useEffect(() => {
		axios
			.get(
				'https://cdn.contentful.com/spaces/kf1rglx1u1m4/entries?access_token=DE4hnN1-JrVaXr77_34OLFjPGzwdqwKl4govapaiIyI&items'
			)
			.then((res) => {
				const data = res.data.items;
				data.forEach((element) => {
					console.log(element.fields);
					setDestinos((old) => [...old, element.fields]);
				});
			});

		Auth.currentAuthenticatedUser()
			.then((user) => setUser(user))
			// if there is no authenticated user, redirect to profile page
			.catch(() => router.push('/'));
	}, []);

	if (!user) return null;

	const CargaDestinos = () => {
		if (destinos.length == 0) {
			return <h1 className="text-lg font-bold">Cargando destinos ...</h1>;
		}
		return <h1 className="text-lg font-bold">Destinos</h1>;
	};

	return (
		<div className="flex w-full h-full px-9 md:px-20 xl:px-60 flex-col">
			<NavBar />
			<header className="mt-16 w-full h-full flex flex-col items-center">
				<CargaDestinos />
			</header>
			<main className="flex flex-col w-full h-full mt-2 lg:px-20 xl:px-60">
				{destinos.map((element, key) => {
					return <InfoVuelo key={key} {...element}></InfoVuelo>;
				})}
			</main>
		</div>
	);
}
