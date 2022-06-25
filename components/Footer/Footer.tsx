const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          Made with ❤️ in NY during{" "}
          <a className="has-text-link-dark" href="https://nyc.ethglobal.co/">
            ETH NYC
          </a>{" "}
          2022 by Val &amp; Hugo
        </p>
        <p>
          GitHub:{" "}
          <a
            className="has-text-link-dark"
            href="https://github.com/Hugoo/ETHNYC-hack"
          >
            Hugoo/ETHNYC-hack
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
