import type { NextPage } from "next";
import Head from "next/head";
import SearchBar from "../components/SearchBar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ETHNYC Hack - Vivigo</title>
        <meta name="description" content="ETHNYC Hack Vivigo" />
      </Head>
      <section className="section">
        <h1 className="title is-1">ETHNYC Hack - Vivigo</h1>

        <SearchBar />
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Made in NY during{" "}
            <a className="has-text-link-dark" href="https://nyc.ethglobal.co/">
              ETH NYC
            </a>{" "}
            2022 by Val &amp; Hugo
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
