import React, { useState } from "react";
import bootstrap from "bootstrap";
import Popper from "popper.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./topbar2.scss";
import { Link, withRouter } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

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
                  Homepage
              </a>
            </li>
            <li className="nav-item">
              <a href="/News">
               
                  News
              </a>
            </li>
            <div className="competitionslink">
              <li className="nav-item">
                <a href="/Competitions">
                    Competitions
                  <ul className="submenu-competitions">
                    <li>
                      <a href="/Competitions/Worldcup">World Cup</a>
                    </li>
                    <li>
                      <a href="/Competitions/Ibucup">Ibu Cup</a>
                    </li>
                    <li>
                      <a href="/Competitions/Juniorcup">Ibu Junior Cup</a>
                    </li>
                    <li>
                      <a href="/Competitions/Nationals">Nationals</a>
                    </li>
                    <li>
                      <a href="/Competitions/Summerbiathlon">Summer Biathlon</a>
                    </li>
                  </ul>
                </a>
              </li>
            </div>
            <div className="resultslink">
              <li className="nav-item">
                <a href="/Results">
                    Results
                  <ul className="submenu-results">
                    <li>
                      <a href="/Results/Worldcup">World Cup</a>
                    </li>
                    <li>
                      <a href="/Results/Worldcup">Ibu Cup</a>
                    </li>
                    <li>
                      <a href="/Results/Juniorcup">Ibu Junior Cup</a>
                    </li>
                    <li>
                      <a href="/Results/Nationals">Nationals</a>
                    </li>
                    <li>
                      <a href="/Results/Summerbiathlon">Summer Biathlon</a>
                    </li>
                  </ul>
                </a>
              </li>
            </div>
            <li className="nav-item">
              <a href="/Athletes">
                  Athletes
              </a>
            </li>
            <div className="aboutlink">
              <li className="nav-item">
                <a href="/About">
                    About Biathlon
                  <ul className="submenu-about">
                    <li>
                      <a href="/About/Whatisbiathlon">What is Biathlon?</a>
                    </li>
                    <li>
                      <a href="/About/History">History</a>
                    </li>
                    <li>
                      <a href="/About/Disciplines">Disciplines</a>
                    </li>
                    <li>
                      <a href="/About/More">More</a>
                    </li>
                  </ul>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default withRouter(Topbar2);
