import React, { useState } from "react"
import "./topbar2.scss"
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
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li
                  className={`nav-item  ${
                    props.location.pathname === "/" ? "active" : ""
                  }`}
                ><a href="/">
                  <Link className="nav-link" to="/" onClick={closeMobileMenu}>
                    Homepage
                    <span className="sr-only">(current)</span>
                  </Link>
                </a></li>
                <li
                  className={`nav-item  ${
                    props.location.pathname === "/News" ? "active" : ""
                  }`}
                ><a href="/News">
                  <Link className="nav-link" to="/News" onClick={closeMobileMenu}>
                    News
                  </Link>
                </a></li>
                <li
                  className="nav-item"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                ><a href="/Competitions">
                  <Link className="nav-link" to="/Competitions" onClick={closeMobileMenu}>
                    Competitions
                  </Link>
                  {dropdown && <Dropdown />}
                </a></li>
                <li
                className="nav-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ><a href="/Results">
                  <Link className="nav-link" to="/Results" onClick={closeMobileMenu}>
                    Results
                  </Link>
                  {dropdown && <DropdownResults />}
                </a></li>
                <li
                  className={`nav-item  ${
                    props.location.pathname === "/Athletes" ? "active" : ""
                  }`}
                ><a href="/Athletes">
                  <Link className="nav-link" to="/Athletes" onClick={closeMobileMenu}>
                    Athletes
                  </Link>
                </a></li>
                <li
                  className={`nav-item  ${
                    props.location.pathname === "/About" ? "active" : ""
                  }`}
                ><a href="/About">
                  <Link className="nav-link" to="/About" onClick={closeMobileMenu}>
                    About Biathlon
                  </Link>
                </a></li>
              </ul>
              
            </div>
            </nav>
      </>
    );
  }
  
  export default withRouter(Topbar2);