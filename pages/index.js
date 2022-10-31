import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Simple Auth0 Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h3>Welcome!</h3>
        <p>
          This is a simple example of authentication and authorization using the
          Auth0 platform by Okta.
        </p>
        {user ? (
          <div>
            <h2>{user.nickname} is logged in!</h2>
          </div>
        ) : (
          <div>
            <h2>You are not currently logged in.</h2>
          </div>
        )}
      </main>
    </div>
  );
}
