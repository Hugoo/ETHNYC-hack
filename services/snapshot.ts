/**
 * @author Hugo Masclet <git@hugom.xyz>
 */

/**

https://docs.snapshot.org/graphql-api#votes

query Votes {
  votes (
    first: 1000
    skip: 0
    orderBy: "created",
    orderDirection: desc
    where: {
      voter: "0x2686EaD94C5042e56a41eDde6533711a4303CC52"
    }
  ) {
    id
    created
    voter
    proposal {
      id
    }
    choice
    space {
      id
    }
  }
}


 */

export const getSnapshotVotes = (spaceId: string, address: string) => {
  return "5";
};
