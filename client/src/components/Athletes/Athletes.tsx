import React from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardLink, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import "./athletes.scss";

export default function Athletes() {
  return (
    <div className="athletes">
      <div className="left"></div>

      <div className="middle">
        <div className="heading">
          <h2>Athletes</h2>
        </div>

        <div className="kortit">
          <MDBCard style={{ width: "18rem" }}>
            <MDBCardImage
              position="top"
              alt="..."
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/062.jpg"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
            <MDBListGroup flush>
              <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
              <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
              <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
            </MDBListGroup>
            <MDBCardBody>
              <MDBCardLink href="#">Card link</MDBCardLink>
              <MDBCardLink href="#">Card link</MDBCardLink>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>

      <div className="right"></div>
    </div>
  );
}
