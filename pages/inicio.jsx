import NavBar from '../components/navBar.jsx';
import {
	PrimaryButton,
	SecondaryButton,
	TercearyButton,
} from '../components/button.jsx';
import AdvertisingInicio from '../components/advertisingInicio.jsx';

import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

import { useSession } from 'next-auth/client';

const infoInicio = [
	{
		imagen: {
			src: 'https://distribuida.s3.us-east-2.amazonaws.com/img/ciudad.jpeg',
			alt: 'Miami City',
		},
		content: 'Ponle a tus dias una dosis de diversion en las calles de Miami',
		price: '152 USD',
	},
	{
		imagen: {
			src: 'https://distribuida.s3.us-east-2.amazonaws.com/img/dubai.jpeg',
			alt: 'Miami City',
		},
		content: 'Ponle a tus dias una dosis de diversion en las calles de Dubai',
		price: '1252 USD',
	},
	{
		imagen: {
			src: 'https://distribuida.s3.us-east-2.amazonaws.com/img/puente.jpeg',
			alt: 'Miami City',
		},
		content:
			'Ponle a tus dias una dosis de diversion en las calles de Shangrila',
		price: '152 USD',
	},
];

export default function Inicio() {
	const [user, setUser] = useState(null);
	const [session, loading] = useSession();

	const router = useRouter();

	useEffect(() => {
		Auth.currentAuthenticatedUser()
			.then((user) => setUser(user))
			// if there is no authenticated user, redirect to profile page
			.catch(() => router.push('/'));
	}, []);

	if (!user) return null;

	console.log(session);

	return (
		<div className="flex w-full h-full px-9 md:px-20 xl:px-60 flex-col pb-40">
			<NavBar />
			<header className="mt-16">
				<div className="px-6 lg:px-60">
					<h1 className="text-center text-2xl font-bold lg:text-5xl">
						Vivir viajando nunca fue tan facil.
					</h1>
				</div>
				<div className="mt-4 px-6 lg:px-48">
					<h6 className="text-center text-sm text-gray-500 lg:text-2xl">
						Programa tus proximas vacaciones con nosotros. Con destinos desde
						99.900
					</h6>
				</div>
				<div className="flex flex-row justify-center w-full mt-8">
					<PrimaryButton
						text="Ver Destinos"
						onclick={() => router.push('/destinos')}
					/>
				</div>
			</header>
			<main className="flex flex-col w-full h-full mt-5 md:flex-row md:space-x-12 2xl:px-48">
				{infoInicio.map((content, i) => {
					return <AdvertisingInicio {...content} key={i} />;
				})}
			</main>
		</div>
	);
}
