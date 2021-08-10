import Logo from './logo';
import Link from 'next/link';
import { Auth } from 'aws-amplify';

export default function NavBar() {
	return (
		<div className="w-full flex mt-8 font-bold justify-center">
			<div className="w-full flex flex-row justify-between align-middle">
					<Logo />
				<div className="flex flex-row md:space-x-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-7 w-7 md:hidden"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clipRule="evenodd"
						/>
					</svg>
					<Link href="/destinos" passHref={true}>
						<span className="hidden md:flex font-normal cursor-pointer">
							Destinos
						</span>
					</Link>
					<Link href="#">
						<span onClick={signOut} className="hidden md:flex font-normal cursor-pointer">
							Salir
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}



async function signOut() {
    try {
        await Auth.signOut();
		
    } catch (error) {
        console.log('error signing out: ', error);
    }
}