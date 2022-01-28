import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Header = ({ siteTitle }) => (
  <header className="bg-sky-800 shadow-md">
    <div className="container mx-auto px-4 flex justify-between py-4">
      <span className="text-lg">
        <Link to="/">{siteTitle}</Link>
      </span>

      <nav>
        <ul>
          <li className="font-bold">
            <Link to="/istorijos">Istorijos</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `Gera patirtis`,
};

export default Header;
