import Head from "next/head";
import ResetPasswordPage from "../components/ResetPasswordPage";

export default function ResetPassword() {
  return (
    <>
      <Head>
        <title>Reset password</title>
        <meta name="description" content="Mekina.net - car sell" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center">
        <ResetPasswordPage />
      </main>
    </>
  );
}
