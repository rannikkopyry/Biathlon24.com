import React from "react";
import "./topbar.scss";
import Logo from "../../images/logo.png";
import SomeLinks from "../SomeLinks/SomeLinks";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="left">

      </div>
      <div className="middle">
        <a href="/">
          <img src={Logo} alt="" />
        </a>
        </div>
      <div className="right">
      <SomeLinks />
      
      </div>
    </div>
  );
}
