/**
 * @author Hugo Masclet <git@hugom.xyz>
 */

import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

import { ProtocolData } from "../../services/protocols";
import { getSnapshotVotes } from "../../services/snapshot";

interface Props {
  protocol: ProtocolData;
  address: string;
}

const ProtocolCard: React.FC<Props> = ({ protocol, address }) => {
  const [score, setScore] = useState("");

  useEffect(() => {
    const fetchScores = async () => {
      const votesNumber = await getSnapshotVotes(
        protocol.governance.id,
        address
      );

      setScore(votesNumber);
    };

    fetchScores();
  }, []);

  return (
    <div className="card">
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
          Votes: {score} on {protocol.governance.platform}
        </div>
      </div>
    </div>
  );
};

export default ProtocolCard;
