import Logo from './logo';
import Link from 'next/link';
import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { TercearyButton } from './button';

export default function NavBar() {
	const [menu, setMenu] = useState(false);

	const signOut = async () => {
		try {
			await Auth.signOut();
		} catch (error) {
			console.log('error signing out: ', error);
		}
	};

	const OpenMenu = () => {
		const status = menu ? 'flex' : 'hidden';

		return (
			<div
				className={`w-full h-full  ${status} absolute  right-20 top-10 md:hidden`}
			>
				<div className="bg-white flex flex-col h-28 px-3 py-2 border border-black rounded-tl-md rounded-b-md space-y-2">
					<Link href="/repuestos" passHref={true}>
						<h1 className="text-black font-normal">Respuestos</h1>
					</Link>
					<Link href="/destinos" passHref={true}>
						<h1 className="text-black font-normal">Destinos</h1>
					</Link>
					<Link href="#">
						<h1 className="text-black font-normal" onClick={() => signOut()}>
							Salir
						</h1>
					</Link>
				</div>
			</div>
		);
	};

	return (
		<div className="w-full flex mt-8 font-bold justify-center">
			<div className="w-full flex flex-row justify-between align-middle">
				<Logo />
				<div className="flex flex-row md:space-x-4 items-center">
					<div className="flex flex-row md:hidden">
						<Link href="/cart" passHref={true}>
							<div className="font-normal cursor-pointer">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 align-middle"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</div>
						</Link>
						<div className="flex flex-col relative ml-1">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className={`h-6 w-6`}
									viewBox="0 0 20 20"
									fill="currentColor"
									onClick={() => setMenu(!menu)}
								>
									<path
										fillRule="evenodd"
										d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<OpenMenu />
						</div>
					</div>

					<Link href="/repuestos" passHref={true}>
						<span className="hidden md:flex font-normal cursor-pointer">
							Repuestos
						</span>
					</Link>
					<Link href="/destinos" passHref={true}>
						<span className="hidden md:flex font-normal cursor-pointer">
							Destinos
						</span>
					</Link>

					<Link href="#">
						<span
							onClick={signOut}
							className="hidden md:flex font-normal cursor-pointer bg-gray-100 px-2 py-1 rounded-md"
						>
							Salir
						</span>
					</Link>
					<Link href="/cart" passHref={true}>
						<span className="hidden md:flex font-normal cursor-pointer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 align-middle"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
