import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Codeleap</title>
        <meta name="description" content="Codeleap test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
          <Link href="/login">
            <h1>Codeleap</h1>
          </Link>
        </main>
    </>
  );
}
