/**
 * @author Hugo Masclet <git@hugom.xyz>
 */

import { gql } from "@apollo/client";
import apolloClient from "./apollo-client";

/**
 * https://docs.snapshot.org/graphql-api#votes
 */
export const getSnapshotVotes = async (spaceId: string, address: string) => {
  const response = await apolloClient.query({
    query: gql`
      query Votes {
        votes(
          first: 1000
          skip: 0
          orderBy: "created"
          orderDirection: desc
          where: {
            voter: "${address}"
            space: "${spaceId}"
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
    `,
  });

  const numberOfVotes: number = response.data.votes.length;
  return numberOfVotes;
};
