/**
 * @author Hugo Masclet <git@hugom.xyz>
 */

import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

import { ProtocolData } from "../../services/protocols";
import { getSnapshotVotes } from "../../services/snapshot";
import { getBalanceOf } from "../../services/ethers";

interface Props {
  protocol: ProtocolData;
  address: string;
}

const ProtocolCard: React.FC<Props> = ({ protocol, address }) => {
  const [score, setScore] = useState("");
  const [balance, setBalance] = useState(0);
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
      setScore(votesNumber);

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
              fontWeight: `${score && "bold"}`,
            }}
          >
            Votes: {score} on {protocol.governance.platform} <br />
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
            {isInvolved ? Math.floor(1 + Math.random() * (30 - 1 + 1)) : 0}{" "}
            <br />
          </span>

          {isInvolved && <span>Active since: XXX</span>}
        </div>
      </div>
    </div>
  );
};

export default ProtocolCard;
