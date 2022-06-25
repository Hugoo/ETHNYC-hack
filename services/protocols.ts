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
}

export const PROTOCOLS: ProtocolData[] = [
  {
    name: "Uniswap",
    logoUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png",
    governance: {
      platform: GovernancePlatforms.SNAPSHOT,
      id: "uniswap",
    },
  },
];
