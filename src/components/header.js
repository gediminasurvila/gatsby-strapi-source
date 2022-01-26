import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <span style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </span>

      <nav>
        <ul>
          <li>
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
