import React from "react";
import "./etusivu.scss";
import { Select, Typography, Row, Col, Card } from "antd";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit"; 
import Loader from "../Loader";
import Logo from "../../images/logo.png"

import { Hashtag } from "react-twitter-widgets";
import Dropdown from "../Dropdown/Dropdown";
import Topbar from "../Topbar/Topbar";

export default function Etusivu() {
  return (
    <>
      <div className="etusivu">
      <div className="heading">
        <h2></h2>
      </div>

      <div className="content">
        <div className="left">
          <h2>Latest news</h2>
          <Dropdown />
        </div>
        <div className="right">
          <h2>Upcoming competitions</h2>
        </div>
      </div>
      </div>
      </>
  );
}
