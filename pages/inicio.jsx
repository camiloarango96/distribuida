import NavBar from '../components/navBar.jsx';
import {
	PrimaryButton,
	SecondaryButton,
	TercearyButton,
} from '../components/button.jsx';
import AdvertisingInicio from '../components/advertisingInicio.jsx';

import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { useRouter } from 'next/router'


 




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
		content: 'Ponle a tus dias una dosis de diversion en las calles de Miami',
		price: '152 USD',
	},
	{
		imagen: {
			src: 'https://distribuida.s3.us-east-2.amazonaws.com/img/puente.jpeg',
			alt: 'Miami City',
		},
		content: 'Ponle a tus dias una dosis de diversion en las calles de Miami',
		price: '152 USD',
	},
];

export default function Inicio() {
	const [user, setUser] = useState(null)
	const router = useRouter()
	useEffect(() => {
	  Auth.currentAuthenticatedUser()
		.then(user => setUser(user))
		// if there is no authenticated user, redirect to profile page
		.catch(() => router.push('/'))
	}, [])
	if (!user) return null
	return (
		<div className="flex w-full h-full px-9 md:px-20 xl:px-60 flex-col">
			<NavBar />
			<header className="mt-16">
				<div className="px-6">
					<h1 className="text-center text-2xl font-bold">
						Vivir viajando nunca fue tan facil.
					</h1>
				</div>
				<div className="mt-4 px-6">
					<h6 className="text-center text-sm text-gray-500">
						Programa tus proximas vacaciones con nosotros. Con destinos desde
						99.900.
					</h6>
				</div>
				<div className="flex flex-row justify-center w-full mt-8">
					<PrimaryButton text="Ver Destinos" />
				</div>
			</header>
			<main className="flex flex-col w-full h-full mt-5">
				{infoInicio.map((content, i) => {
					return <AdvertisingInicio {...content} key={i} />;
				})}
			</main>
		</div>
	);
}
