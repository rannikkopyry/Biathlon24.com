import React from "react";
import "./footer.scss";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import SignUpForm from "../SignUpForm/SignUpForm";
import SomeLinks from "../SomeLinks/SomeLinks";

export default function Footer() {
  return (
    <MDBFooter backgroundColor="dark" className="text-center text-lg-left">
        <div className="footer">
        <div className="upper">
          <div className="form">
          <SignUpForm />
          </div>
          <div className="links"> 
            <ul>
            <li><a href="/privacy-policy">Privacy policy</a></li>
            <li><a href="/terms-and-conditions">Terms and conditions</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          </div>
          <div className="somelinks">
          <SomeLinks />
          </div>

        </div>


      <div className="text-center p-3" style={{ backgroundColor: "grey" }}>
        &copy; {new Date().getFullYear()}{" "}
        <a className="text-dark" href="https://biathlon24.com/">
          biathlon24.com
        </a>
      </div>
      </div>
    </MDBFooter>
  );
}
