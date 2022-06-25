/**
 * @author Hugo Masclet <git@hugom.xyz>
 */
import React from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar is-light">
      <div className="navbar-menu is-active">
        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item">🗽 ETH NYC Hack</a>
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a
                  className="button is-primary"
                  href="https://github.com/Hugoo/ETHNYC-hack"
                >
                  <span>GitHub</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
