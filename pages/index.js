import styles from '../styles/Home.module.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Link from 'next/link';

const Home = () => {
	return (
		<div className={styles.container}>
			<AmplifySignOut />
			<Link href="/inicio">
				<a>Ir a Inicio</a>
			</Link>
		</div>
	);
};

export default withAuthenticator(Home);
