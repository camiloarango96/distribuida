import Logo from './logo';
import Link from 'next/link';
import { Auth } from 'aws-amplify';
import { useState } from 'react';

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
				<div className="bg-white flex flex-col h-20 px-3 py-2 border border-black rounded-tl-md rounded-b-md space-y-2">
					<Link href="/destinos" passHref={true}>
						<h1 className="text-black">Destinos</h1>
					</Link>
					<Link href="#">
						<h1 className="text-black" onClick={() => signOut()}>
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
				<div className="flex flex-row md:space-x-4">
					<div className="flex flex-col relative ">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className={`h-7 w-7 md:hidden `}
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
					<Link href="/destinos" passHref={true}>
						<span className="hidden md:flex font-normal cursor-pointer">
							Destinos
						</span>
					</Link>
					<Link href="#">
						<span
							onClick={signOut}
							className="hidden md:flex font-normal cursor-pointer"
						>
							Salir
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
