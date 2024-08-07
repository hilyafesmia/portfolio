import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Hilya&#39;s Product Design Portfolio</title>
        <meta name="description" content="Hilya's Product Design Portfolio" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Header />
      <main>
        {children}
        <Footer />
      </main>
    </>
  );
}
