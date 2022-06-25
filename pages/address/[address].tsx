/**
 * @author Hugo Masclet <git@hugom.xyz>
 */

import type { NextPage } from "next";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Footer from "../../components/Footer";
import { getAccountBalance, getTxNumberForAddress } from "../../services/tatum";
import { isAddress } from "web3-utils";
import NavBar from "../../components/NavBar";
import ProtocolCard from "../../components/ProtocolCard";
import { PROTOCOLS } from "../../services/protocols";

const Address: NextPage = () => {
  const router = useRouter();
  const { address } = router.query;

  const [data, setData] = useState<any>({});

  useEffect(() => {
    if (!address || !isAddress(address as string)) {
      return;
    }

    const getData = async () => {
      const txCount = 999; // await getTxNumberForAddress(address as string);
      const balance = 2; // await getAccountBalance(address as string);
      setData({ txCount, balance });
    };

    getData();
  }, [address]);

  return (
    <>
      <NavBar />
      <section className="section">
        <h4 className="title is-4">{address}</h4>

        <span className="tag is-info is-large">Tx count: {data.txCount}</span>
        <br />
        <br />
        <span className="tag is-info is-large">
          Balance: {data.balance} ETH
        </span>

        <div className="container">
          <div className="columns is-multiline">
            {PROTOCOLS.map((protocol) => {
              return (
                <div key={protocol.name} className="column is-one-quarter">
                  <ProtocolCard
                    protocol={protocol}
                    address={address as string}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Address;
