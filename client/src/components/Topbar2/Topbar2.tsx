import React from "react"
import "./topbar2.scss"
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
      <div className="topbar2">
          <div className="container">
  
            <div className="menu">
              <ul className="navbar-nav ml-auto">
                <li
                  className={`nav-item  ${
                    props.location.pathname === "/" ? "active" : ""
                  }`}
                ><a href="/">
                  <Link className="nav-link" to="/">
                    Homepage
                    <span className="sr-only">(current)</span>
                  </Link>
                </a></li>
                <li
                  className={`nav-item  ${
                    props.location.pathname === "/News" ? "active" : ""
                  }`}
                ><a href="/News">
                  <Link className="nav-link" to="/News">
                    News
                  </Link>
                </a></li>
                <li
                  className={`nav-item  ${
                    props.location.pathname === "/Competitons" ? "active" : ""
                  }`}
                ><a href="/Competitions">
                  <Link className="nav-link" to="/Competitions">
                    Competitions
                  </Link>
                </a></li>
                <li
                  className={`nav-item  ${
                    props.location.pathname === "/Results" ? "active" : ""
                  }`}
                ><a href="/Results">
                  <Link className="nav-link" to="/Results">
                    Results
                  </Link>
                </a></li>
                <li
                  className={`nav-item  ${
                    props.location.pathname === "/Athletes" ? "active" : ""
                  }`}
                ><a href="/Athletes">
                  <Link className="nav-link" to="/Athletes">
                    Athletes
                  </Link>
                </a></li>
                <li
                  className={`nav-item  ${
                    props.location.pathname === "/About" ? "active" : ""
                  }`}
                ><a href="/About">
                  <Link className="nav-link" to="/About">
                    About Biathlon
                  </Link>
                </a></li>
              </ul>
            </div>
          </div>
        
      </div>
    );
  }
  
  export default withRouter(Navigation);