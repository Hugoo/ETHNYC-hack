/**
 * @author Hugo Masclet <git@hugom.xyz>
 */

import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ConnectButton from "../components/ConnectButton";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ETH NYC Hack - L0YAL3</title>
        <meta name="description" content="ETHNYC Hack Vivigo" />
      </Head>
      <section className="section">
        <h1 className="title is-1">ETH NYC Hack - L0YAL3</h1>

        <div className="notification is-info is-light">
          Explain what the project does here
        </div>

        <SearchBar />
        <ConnectButton />
      </section>
      <section className="section">
        <h3 className="title is-3">Examples</h3>
        <div>
          <ul>
            <Link href="/address/0x26fCbD3AFEbbE28D0A8684F790C48368D21665b5">
              <a className="has-text-link-dark">
                0x26fCbD3AFEbbE28D0A8684F790C48368D21665b5
              </a>
            </Link>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
