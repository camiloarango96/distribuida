import styles from '../styles/Home.module.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Link from 'next/link';

const Home = () => {
	return (
		<div className={styles.container}>
			<AmplifySignOut />
			<h1 className="text-bold text-xl">holis</h1>
			Hola
			<Link href="/inicio">Inicio</Link>
		</div>
	);
};

export default withAuthenticator(Home);
