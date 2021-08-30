import NavBar from '../components/navBar';
import { useState, useEffect } from 'react';
import InfoVuelo from '../components/infoVuelo.jsx';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import { getVuelos } from '../logic/apiCalls';

export default function PaginaDestinos(props) {
	const [destinos, setDestinos] = useState([]);
	const [user, setUser] = useState(null);
	const router = useRouter();

	useEffect(() => {
		const vuelos = async () => {
			const data = await getVuelos();
			data.forEach((element) => {
				let {
					destino,
					origen,
					descripcion: description,
					fecha_llegada: fechallegada,
					fecha_salida: fechasalida,
					numero_reserva: numerovuelo,
					id,
					precio,
				} = { ...element };
				let vuelo = {
					destino,
					origen,
					description,
					fechallegada,
					fechasalida,
					numerovuelo,
					id,
					precio,
				};
				setDestinos((old) => [...old, vuelo]);
			});
		};

		vuelos();
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
