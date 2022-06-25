/**
 * @author Hugo Masclet <git@hugom.xyz>
 */

import type { NextPage } from "next";
import Head from "next/head";
import ConnectButton from "../components/ConnectButton";
import Footer from "../components/Footer";
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
        <ConnectButton />
      </section>
      <section className="section">
        <h3 className="title is-3">Protocols</h3>
        <div>
          <ul>
            <li>LIDO</li>
            <li>dYdX</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
