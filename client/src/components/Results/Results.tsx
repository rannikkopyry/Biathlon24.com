import React from "react"
import "./results.scss"
import { Link, withRouter } from "react-router-dom";

function Results(props) {
    return (
      <div className="results">
            <div className="left">
              
            </div>
          <div className="middle">
            <div className="navbar">
              <ul className="navbar-nav ml-auto">
                <li
                  className={`nav-item  ${
                    props.location.pathname === "/Results/Worldcup" ? "active" : ""
                  }`}
                ><a href="/">
                  <Link className="nav-link" to="/Results/Worldcup">
                    World cup
                    <span className="sr-only">(current)</span>
                  </Link>
                </a></li>
                <li
                  className={`nav-item  ${
                    props.location.pathname === "/Results/Ibucup" ? "active" : ""
                  }`}
                ><a href="/Results/Ibucup">
                  <Link className="nav-link" to="/Results/Ibucup">
                    Ibu cup
                  </Link>
                </a></li>
                <li
                  className={`nav-item  ${
                    props.location.pathname === "/Results/Juniorcup" ? "active" : ""
                  }`}
                ><a href="/Results/Juniorcup">
                  <Link className="nav-link" to="/Results/Juniorcup">
                    Ibu Junior Cup
                  </Link>
                </a></li>
                <li
                  className={`nav-item  ${
                    props.location.pathname === "/Results/Nationals" ? "active" : ""
                  }`}
                ><a href="/Results/Nationals">
                  <Link className="nav-link" to="/Results/Nationals">
                    Nationals
                  </Link>
                </a></li>
                <li
                  className={`nav-item  ${
                    props.location.pathname === "/Results/Summerbiathlon" ? "active" : ""
                  }`}
                ><a href="/Results/Summerbiathlon">
                  <Link className="nav-link" to="/Results/Summerbiathlon">
                    Summer biathlon
                  </Link>
                </a></li>
              </ul>
            </div>
            </div>
        
      </div>
    );
  }
  
  export default withRouter(Results);
