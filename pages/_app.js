import "../css/index.css";
import "../css/main.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>FORCE - Forum For Computer Engineering - IIIT UNA</title>
        <meta
          name="Description" 
          content="Force is the biggest coding club of IIIT Una lead by a group of phenomenal devs helping others to learn and grow in field of computer science."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;