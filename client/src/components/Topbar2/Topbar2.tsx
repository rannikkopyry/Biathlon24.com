import React, { useState } from "react";
import "./topbar2.scss";
import { Link, withRouter } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import DropdownResults from "../Dropdown/DropdownResults";

function Topbar2(props: any) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="topbar2">
        <div className="menu" onClick={handleClick}>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/">
                <Link className="nav-link" to="/" onClick={closeMobileMenu}>
                  Homepage
                  <span className="sr-only">(current)</span>
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a href="/News">
                <Link className="nav-link" to="/News" onClick={closeMobileMenu}>
                  News
                </Link>
              </a>
            </li>
            <div className="competitionslink">
              <li className="nav-item">
                <a href="/Competitions">
                  <Link
                    className="nav-link"
                    to="/Competitions"
                    onClick={closeMobileMenu}
                  >
                    Competitions
                  </Link>
                  <ul className="submenu-competitions">
                    <li>
                      <a href="/">World Cup</a>
                    </li>
                    <li>
                      <a href="/">Ibu Cup</a>
                    </li>
                    <li>
                      <a href="/">Ibu Junior Cup</a>
                    </li>
                    <li>
                      <a href="/">Nationals Cup</a>
                    </li>
                    <li>
                      <a href="/">Summer Biathlon</a>
                    </li>
                  </ul>
                </a>
              </li>
            </div>
            <div className="resultslink">
              <li className="nav-item">
                <a href="/Results">
                  <Link
                    className="nav-link"
                    to="/Results"
                    onClick={closeMobileMenu}
                  >
                    Results
                  </Link>
                  <ul className="submenu-results">
                    <li>
                      <a href="/">World Cup</a>
                    </li>
                    <li>
                      <a href="/">Ibu Cup</a>
                    </li>
                    <li>
                      <a href="/">Ibu Junior Cup</a>
                    </li>
                    <li>
                      <a href="/">Nationals Cup</a>
                    </li>
                    <li>
                      <a href="/">Summer Biathlon</a>
                    </li>
                  </ul>
                </a>
              </li>
            </div>
            <li className="nav-item">
              <a href="/Athletes">
                <Link
                  className="nav-link"
                  to="/Athletes"
                  onClick={closeMobileMenu}
                >
                  Athletes
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a href="/About">
                <Link
                  className="nav-link"
                  to="/About"
                  onClick={closeMobileMenu}
                >
                  About Biathlon
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default withRouter(Topbar2);
