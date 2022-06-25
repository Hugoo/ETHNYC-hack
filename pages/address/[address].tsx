/**
 * @author Hugo Masclet <git@hugom.xyz>
 */

import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { isAddress } from "web3-utils";

import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import ProtocolCard from "../../components/ProtocolCard";
import ClientOnly from "../../components/ClientOnly";
import { PROTOCOLS } from "../../services/protocols";
import { getAccountBalance, getTxNumberForAddress } from "../../services/tatum";

const Address: NextPage = () => {
  const router = useRouter();
  const { address } = router.query;

  const [data, setData] = useState<any>({});

  useEffect(() => {
    if (!address || !isAddress(address as string)) {
      return;
    }

    const getData = async () => {
      const txCount = await getTxNumberForAddress(address as string);
      const balance = await getAccountBalance(address as string);
      setData({ txCount, balance });
    };

    getData();
  }, [address]);

  if (!address) {
    return null;
  }

  return (
    <>
      <NavBar />
      <section className="section">
        <h4 className="title is-4">
          {address}

          <span className="tag is-primary is-normal">
            Tx count: {data.txCount}
          </span>
          <span className="tag is-primary is-normal">
            Balance: {data.balance} ETH
          </span>
        </h4>
      </section>
      <section className="section">
        <h4 className="title is-4">Communities</h4>

        <div className="container">
          <div className="columns is-multiline">
            {PROTOCOLS.map((protocol) => {
              return (
                <div key={protocol.name} className="column is-one-quarter">
                  <ClientOnly>
                    <ProtocolCard
                      protocol={protocol}
                      address={address as string}
                    />
                  </ClientOnly>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <h4 className="title is-4">Recommendations</h4>
        <div className="container">
          <p>RED DAO, FlamingoDAO, Metacartel...</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Address;
