import type { NextPage } from "next";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Footer from "../../components/Footer";
import { getAccountBalance, getTxNumberForAddress } from "../../services/tatum";
import { isAddress } from "web3-utils";

const Address: NextPage = () => {
  const router = useRouter();
  const { address } = router.query;

  const [data, setData] = useState<any>({});

  useEffect(() => {
    if (!address || !isAddress(address)) {
      return;
    }

    const getData = async () => {
      const txCount = await getTxNumberForAddress(address as string);
      const balance = await getAccountBalance(address as string);
      setData({ txCount, balance });
    };

    getData();
  }, [address]);

  return (
    <>
      <section className="section">
        <h4 className="title is-4">{address}</h4>

        <span className="tag is-info is-large">Tx count: {data.txCount}</span>
        <br />
        <br />
        <span className="tag is-info is-large">
          Balance: {data.balance} ETH
        </span>
      </section>
      <Footer />
    </>
  );
};

export default Address;
