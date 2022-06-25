import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { isAddress } from "web3-utils";

const SearchBar: React.FC = () => {
  const [address, setAddress] = useState(
    "0xFdf6576E21641A65bCceA63B576B3D29FFC2D12f"
  );
  const [error, setError] = useState("");
  const router = useRouter();

  const onAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newAddress = e.target.value;

    if (newAddress !== "" && !isAddress(newAddress)) {
      setError("Not a valid address");
    } else {
      setError("");
      // TODO: here check if address is EOA or contract
      router.push(`/address/${newAddress}`);
    }

    setAddress(newAddress);
  };

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <div className="field">
            <label className="label">ETH Address</label>
            <div className="control">
              <input
                className={`input ${error && "is-danger"}`}
                onChange={onAddressChange}
                value={address}
                type="text"
                placeholder="0x..."
              />
            </div>
            {error && <p className="help is-danger">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
