enum GovernancePlatforms {
  SNAPSHOT = "SNAPSHOT",
}

export interface ProtocolData {
  name: string;
  logoUrl: string;
  governance: {
    platform: GovernancePlatforms;
    id: string;
  };
  token: {
    symbol: string;
    contractAddress: string;
    decimals: number;
  };
}

export const PROTOCOLS: ProtocolData[] = [
  {
    name: "Uniswap",
    logoUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png",
    governance: {
      platform: GovernancePlatforms.SNAPSHOT,
      id: "uniswap",
    },
    token: {
      symbol: "UNI",
      contractAddress: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      decimals: 18,
    },
  },
  {
    name: "ENS",
    logoUrl: "https://cdn.stamp.fyi/space/ens.eth?s=160&cb=bc8a2856691e05ab",
    governance: {
      platform: GovernancePlatforms.SNAPSHOT,
      id: "ens.eth",
    },
    token: {
      symbol: "ENS",
      contractAddress: "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
      decimals: 18,
    },
  },
  {
    name: "Aave",
    logoUrl: "https://cdn.stamp.fyi/space/aave.eth?s=160&cb=c1026072cf0a6c54",
    governance: {
      platform: GovernancePlatforms.SNAPSHOT,
      id: "aave.eth",
    },
    token: {
      symbol: "AAVE",
      contractAddress: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
      decimals: 18,
    },
  },
  {
    name: "SushiSwap",
    logoUrl:
      "https://cdn.stamp.fyi/space/sushigov.eth?s=160&cb=aeaf858103dbc634",
    governance: {
      platform: GovernancePlatforms.SNAPSHOT,
      id: "sushigov.eth",
    },
    token: {
      symbol: "SUSHI",
      contractAddress: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
      decimals: 18,
    },
  },
  {
    name: "Curve Finance",
    logoUrl: "https://cdn.stamp.fyi/space/curve.eth?s=160&cb=648e5fa4dbccba6a",
    governance: {
      platform: GovernancePlatforms.SNAPSHOT,
      id: "curve.eth",
    },
    token: {
      symbol: "CRV",
      contractAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52",
      decimals: 18,
    },
  },
  {
    name: "dYdX",
    logoUrl:
      "https://cdn.stamp.fyi/space/dydxgov.eth?s=160&cb=960ccb272688872b",
    governance: {
      platform: GovernancePlatforms.SNAPSHOT,
      id: "dydxgov.eth",
    },
    token: {
      symbol: "DYDX",
      contractAddress: "0x92d6c1e31e14520e676a687f0a93788b716beff5",
      decimals: 18,
    },
  },
  // {
  //   name: "Optimism Collective",
  //   logoUrl: "https://cdn.stamp.fyi/space/opcollective.eth?s=160&cb=37be859f9d4da79b",
  //   governance: {
  //     platform: GovernancePlatforms.SNAPSHOT,
  //     id: "opcollective.eth",
  //   },
  //   token: {
  //     symbol: "",
  //     contractAddress: "",
  //     decimals: 18,
  //   },
  // },
  {
    name: "The Graph",
    logoUrl:
      "https://cdn.stamp.fyi/space/graphprotocol.eth?s=160&cb=5ee26cdb9fe8ce8f",
    governance: {
      platform: GovernancePlatforms.SNAPSHOT,
      id: "graphprotocol.eth",
    },
    token: {
      symbol: "GRT",
      contractAddress: "0xc944e90c64b2c07662a292be6244bdf05cda44a7",
      decimals: 18,
    },
  },
  {
    name: "1inch Network",
    logoUrl: "https://cdn.stamp.fyi/space/1inch.eth?s=160&cb=5fd6552b6730c3b2",
    governance: {
      platform: GovernancePlatforms.SNAPSHOT,
      id: "1inch.eth",
    },
    token: {
      symbol: "1INCH",
      contractAddress: "0x111111111117dc0aa78b770fa6a738034120c302",
      decimals: 18,
    },
  },
  {
    name: "yearn",
    logoUrl: "https://cdn.stamp.fyi/space/ybaby.eth?s=160&cb=2ac5406f8b1a328a",
    governance: {
      platform: GovernancePlatforms.SNAPSHOT,
      id: "ybaby.eth",
    },
    token: {
      symbol: "YFI",
      contractAddress: "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",
      decimals: 18,
    },
  },
];
