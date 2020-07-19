import React from "react";
import "../../Style/Landing.css";
import { Button } from "@material-ui/core";

function GetStarted() {
  return (
    <div className="Landing-getstarted">
      <div className="Landing-getstarted--heading">Ready to get started?</div>
      <div className="Landing-getstarted--btns">
        <Button
          variant="contained"
          style={{
            color: "#3695EF",
            backgroundColor: "white",
            margin: "10px",
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 600
          }}
        >
          Join As A FreeLancer*
        </Button>
        <Button
          variant="contained"
          style={{
            color: "white",
            backgroundColor: "#FF4162",
            margin: "10px",
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 600
          }}
        >
          Post A Job
        </Button>
      </div>
      <div className="Landing-getstarted--txt">
        * Gignav charges 3% service fees for payments made on the platform. You
        can also receive payments outside the platform.
      </div>
    </div>
  );
}

export default GetStarted;
