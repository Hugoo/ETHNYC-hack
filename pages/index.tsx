import type { NextPage } from "next";
import Head from "next/head";
import SearchBar from "../components/SearchBar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ETH NYC Hack - Vivigo</title>
        <meta name="description" content="ETHNYC Hack Vivigo" />
      </Head>
      <section className="section">
        <h1 className="title is-1">ETH NYC Hack - Vivigo</h1>

        <div className="notification is-info is-light">
          Explain what the project does here
        </div>

        <SearchBar />
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Made with ❤️ in NY during{" "}
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
