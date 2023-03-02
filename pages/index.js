// pages/index.js -> https://localhost:3000

import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Demo</title>
        <meta name="description" content="Crypto app using Next.js" />
      </Head>

      <main className={styles.main}>
        <h1>Welcome to the Crypto App!</h1>

        <Link href="/coins">View all Cryptocurrencies...</Link>
      </main>
    </div>
  );
}