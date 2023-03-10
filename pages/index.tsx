import Head from "next/head";
import LoginPage from "../components/LoginPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mekina.net</title>
        <meta name="description" content="Mekina.net - car sell" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center">
        <LoginPage />
      </main>
    </>
  );
}
