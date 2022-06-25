const SearchBar: React.FC = () => {
  return (
    <div className="container">
      <div className="field">
        <label className="label">ETH Address</label>
        <div className="control">
          <input className="input" type="text" placeholder="0x..." />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
