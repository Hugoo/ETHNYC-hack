import { ChangeEvent, useState } from "react";
import { isAddress } from "web3-utils";

const SearchBar: React.FC = () => {
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const onAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newAddress = e.target.value;

    if (newAddress !== "" && !isAddress(newAddress)) {
      setError("Not a valid address");
    } else {
      setError("");
      // TODO: here check if address is EOA or contract
    }

    setAddress(newAddress);
  };

  return (
    <div className="container">
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
  );
};

export default SearchBar;
