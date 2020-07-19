import React from "react";
import "../../Style/Footer.css";
import { Link } from "@material-ui/core";

function Footer() {
  return (
    <div className="Footer-container">
      <div className="Footer-container--1">
        <div
          style={{
            fontWeight: 500,
            fontSize: "13px",
            lineHeight: "15px",
            color: "#363848"
          }}
        >
          <img
            src={require("../../Images/logo-og.png")}
            alt=""
            style={{ verticalAlign: "middle" }}
          />
          <label> &#169;2020 GigNav, LLC</label>
        </div>
        <div>
          <Link
            style={{
              fontWeight: 500,
              fontSize: "13px",
              lineHeight: "15px",
              color: "#363848",
              cursor: "pointer"
            }}
          >
            Terms Of Service
          </Link>
        </div>
        <div>
          <Link
            style={{
              fontWeight: 500,
              fontSize: "13px",
              lineHeight: "15px",
              color: "#363848",
              cursor: "pointer"
            }}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="Footer-container--2">
        <div>
          <Link
            style={{
              fontWeight: 600,
              fontSize: "13px",
              lineHeight: "15px",
              color: "#3695EF",
              cursor: "pointer"
            }}
          >
            getstarted@gignav.com
          </Link>
        </div>
        <div
          style={{
            fontWeight: 600,
            fontSize: "13px",
            lineHeight: "15px",
            color: "#363848"
          }}
        >
          1-833-4-GIGNAV
        </div>
      </div>
    </div>
  );
}

export default Footer;
