import BackToTopButton from "@/components/BacktoTopButton";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head"; // Import the Head component

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Visualised: Features of the Jokowi era</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      {/* Add back to top here */}
      <BackToTopButton />
    </>
  );
}
