import { Fragment } from "react";
import Head from "next/head";
import NavBar from "../components/ui/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>InSynk Studios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
