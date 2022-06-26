/**
 * @author Hugo Masclet <git@hugom.xyz>
 */

import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

import { ProtocolData } from "../../services/protocols";
import { getSnapshotVotes } from "../../services/snapshot";
import { getBalanceOf } from "../../services/ethers";
import { computeCommunityScore, randomDate } from "../../services/score";

interface Props {
  protocol: ProtocolData;
  address: string;
}

const ProtocolCard: React.FC<Props> = ({ protocol, address }) => {
  const [numberOfVotes, setNumberOfVotes] = useState(0);
  const [balance, setBalance] = useState(0);
  const [numberOfInteractions, setNumberOfInteractions] = useState(0);
  const [score, setScore] = useState(0);
  const [activeSince, setActiveSince] = useState("");
  const [isInvolved, setIsInvolved] = useState(false);

  useEffect(() => {
    const fetchScores = async () => {
      const votesNumber = await getSnapshotVotes(
        protocol.governance.id,
        address
      );

      const fetchedBalance = await getBalanceOf(
        protocol.token.contractAddress,
        address
      );

      setBalance(Math.round(fetchedBalance * 10000) / 10000);
      setNumberOfVotes(votesNumber);
      setActiveSince(randomDate(new Date(2018, 0, 1), new Date()));

      setNumberOfInteractions(Math.floor(1 + Math.random() * (30 - 1 + 1)));
      setScore(
        computeCommunityScore(fetchedBalance, votesNumber, numberOfInteractions)
      );

      if (fetchedBalance || votesNumber) {
        setIsInvolved(true);
      } else {
        setIsInvolved(false);
      }
    };

    fetchScores();
  }, []);

  return (
    <div
      className="card"
      style={{
        border: `${isInvolved ? "grey solid" : undefined}`,
        opacity: `${isInvolved ? "1" : "0.6"}`,
      }}
    >
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={protocol.logoUrl} alt={protocol.name} />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{protocol.name}</p>
          </div>
        </div>

        <div className="content">
          <span
            style={{
              fontWeight: `${numberOfVotes && "bold"}`,
            }}
          >
            Votes: {numberOfVotes} on {protocol.governance.platform} <br />
          </span>
          <span
            style={{
              fontWeight: `${balance && "bold"}`,
            }}
          >
            Balance: {balance} {protocol.token.symbol} <br />
          </span>
          <span>
            # Interactions: {/* https://stackoverflow.com/a/1527832/651299 */}
            {isInvolved && numberOfInteractions} <br />
          </span>

          {isInvolved && <span>Active since: {activeSince}</span>}
        </div>
      </div>
      {isInvolved && (
        <footer className="card-footer">
          <a href="#" className="card-footer-item">
            Score: {score}
          </a>
        </footer>
      )}
    </div>
  );
};

export default ProtocolCard;
