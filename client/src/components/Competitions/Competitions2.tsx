import React from "react"
import "./competitions.scss"
import { Link, withRouter } from "react-router-dom";

function Competitions2(props:any) {
    return (
      <div className="competitions">
          
          <div className="left"> 

          </div>
          
          <div className="middle">
  
            <div className="menu">
              <ul className="navbar-nav ml-auto">
                <li
                  className={`nav-item  ${
                    props.location.pathname === "/Competitions/Worldcup" ? "active" : ""
                  }`}
                ><a href="/Competitions/Worldcup">
                  <Link className="nav-link" to="/Competitions/Worldcup">
                    World cup
                    <span className="sr-only">(current)</span>
                  </Link>
                </a></li>
                <li
                  className={`nav-item  ${
                    props.location.pathname === "/Competitions/Ibucup" ? "active" : ""
                  }`}
                ><a href="/Competitions/Ibucup">
                  <Link className="nav-link" to="/Competitions/Ibucup">
                    Ibu cup
                  </Link>
                </a></li>
                <li
                  className={`nav-item  ${
                    props.location.pathname === "/Competitons/Juniorcup" ? "active" : ""
                  }`}
                ><a href="/Competitions/Juniorcup">
                  <Link className="nav-link" to="/Competitions/Juniorcup">
                    Ibu Junior Cup
                  </Link>
                </a></li>
                <li
                  className={`nav-item  ${
                    props.location.pathname === "/Competitions/Nationals" ? "active" : ""
                  }`}
                ><a href="/Competitions/Nationals">
                  <Link className="nav-link" to="/Competitions/Nationals">
                    Nationals
                  </Link>
                </a></li>
                <li
                  className={`nav-item  ${
                    props.location.pathname === "/Competitions/Summerbiathlon" ? "active" : ""
                  }`}
                ><a href="/Competitions/Summerbiathlon">
                  <Link className="nav-link" to="/Competitions/Summerbiathlon">
                    Summer Biathlon
                  </Link>
                </a></li>
              </ul>
              </div>


              <div className="related">
                <p>Related competitions</p>
              </div>
              </div>


            <div className="right">

            </div>
        
      </div>
    );
  }
  
  export default withRouter(Competitions2);