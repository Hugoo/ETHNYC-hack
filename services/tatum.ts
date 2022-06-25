/**
 * @author Hugo Masclet <git@hugom.xyz>
 */

// es6
// import blockchain subpackage or full sdk package
// import { TatumEthSDK } from "@tatumio/eth";

const TATUM_BASE_URL = "https://api-eu1.tatum.io/v3";

// pass API key from Tatum account available for free at https://dashboard.tatum.io/
// Didn't manage to make it work - getting some weird errors
// const ethSDK = TatumEthSDK({
//   apiKey: process.env.TATUM_MAINNET_API_KEY as string,
// });

export const getTxNumberForAddress = async (address: string) => {
  const resp = await fetch(
    `${TATUM_BASE_URL}/ethereum/transaction/count/${address}`,
    {
      method: "GET",
      headers: {
        "x-testnet-type": "ethereum-ropsten",
        "x-api-key": process.env.TATUM_MAINNET_API_KEY as string,
      },
    }
  );

  return resp.text();
};

export const getAccountBalance = async (address: string) => {
  const resp = await fetch(
    `${TATUM_BASE_URL}/ethereum/account/balance/${address}`,
    {
      method: "GET",
      headers: {
        "x-testnet-type": "ethereum-ropsten",
        "x-api-key": process.env.TATUM_MAINNET_API_KEY as string,
      },
    }
  );

  const respJson = await resp.json();

  return Math.round(respJson.balance * 1000) / 1000;
};
