import NavBar from '../components/navBar.jsx';
import {
	PrimaryButton,
	SecondaryButton,
	TercearyButton,
} from '../components/button.jsx';
import AdvertisingInicio from '../components/advertisingInicio.jsx';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

export default function Inicio() {
	const [user, setUser] = useState(null);
	const [msjBienvenida, setMsjBienvenida] = useState('');
	const [boton, setBoton] = useState('');
	const [subtitulo, setSubtitulo] = useState('');
	const [infoInicio, setInfoInicio] = useState([]);

	const router = useRouter();

	useEffect(() => {
		//contenfull api call
		axios
			.get(
				'https://cdn.contentful.com/spaces/kf1rglx1u1m4/entries?access_token=DE4hnN1-JrVaXr77_34OLFjPGzwdqwKl4govapaiIyI&content_type=bienvenida'
			)
			.then((res) => {
				// console.log(res);
				const data = res.data.items[0].fields;
				setMsjBienvenida(data.msjBienvenida);
				setBoton(data.boton);
				setSubtitulo(data.subtitulo);
			});

		axios
			.get(
				'https://cdn.contentful.com/spaces/kf1rglx1u1m4/entries?access_token=DE4hnN1-JrVaXr77_34OLFjPGzwdqwKl4govapaiIyI&content_type=boxes'
			)
			.then((res) => {
				const assets = res.data.includes.Asset;
				const data = res.data.items;
				data.forEach((element, index) => {
					setInfoInicio((old) => [
						...old,
						{
							imagen: {
								src: `https:${assets[index].fields.file.url}`,
								alt: assets[index].fields.title,
							},
							content: element.fields.desc2,
							price: element.fields.texto2,
						},
					]);
				});
			});
		Auth.currentAuthenticatedUser()
			.then((user) => setUser(user))
			// if there is no authenticated user, redirect to profile page
			.catch(() => router.push('/'));
	}, []);

	if (!user) return null;

	return (
		<div className="flex w-full h-full px-9 md:px-20 xl:px-60 flex-col pb-40">
			<NavBar />
			<header className="mt-16">
				<div className="px-6 lg:px-60">
					<h1 className="text-center text-2xl font-bold lg:text-5xl">
						{msjBienvenida}
					</h1>
				</div>
				<div className="mt-4 px-6 lg:px-48">
					<h6 className="text-center text-sm text-gray-500 lg:text-2xl">
						{subtitulo}
					</h6>
				</div>
				<div className="flex flex-row justify-center w-full mt-8">
					<PrimaryButton
						text={boton}
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
