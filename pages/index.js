import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
const Home = () => {
  return (
    <div className={styles.container}>
      <AmplifySignOut />
      Hola
    </div>
  )
}

export default withAuthenticator(Home);
