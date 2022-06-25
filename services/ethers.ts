import { ethers, utils } from "ethers";

const ALCHEMY_API_KEY = "X9_rSZd1DPd7ptzvxsoRQHmFchaoNWuk";

const alchemyProvider = new ethers.providers.AlchemyProvider(
  undefined,
  ALCHEMY_API_KEY
);

export const getBalanceOf = async (
  contractAddress: string,
  holderAddress: string
) => {
  const contract = new ethers.Contract(
    contractAddress,
    [
      {
        constant: true,
        inputs: [{ name: "_owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "balance", type: "uint256" }],
        type: "function",
      },
    ],
    alchemyProvider
  );

  const data = await contract.balanceOf(holderAddress);

  const balance = parseFloat(utils.formatUnits(data, 18));

  console.log("data", balance);

  return balance;
};
