import React from "react";
import "./Navigation_ClientLogos.css";
import ClientLogo1 from "../images/Layer 14.png";
import ClientLogo2 from "../images/Layer 17.png";
import ClientLogo3 from "../images/d54ca00e10db35ab.png";
import ClientLogo4 from "../images/Layer 16.png";
import ClientLogo5 from "../images/NESTLE PURE LİFE.png";
import ClientLogo6 from "../images/Layer 16 (1).png";

function Navigation_ClientLogos() {
  return (
    <div>
      <div className="Navigation-ClientLogos">
        <div className="Navigation-ClientLogos__logos">
          <div className="client__logo ">
            <div className="non__active__logo"> </div>
            <img className="client__img" src={ClientLogo1} alt="" />
          </div>
          <div className="client__logo">
            <div className="non__active__logo"> </div>
            <div className="Notification">99</div>
            <img className="client__img" src={ClientLogo2} alt="" />
          </div>
          <div className="client__logo ">
            <div className="non__active__logo"> </div>
            <img className="client__img" src={ClientLogo3} alt="" />
          </div>
          <div className="client__logo active__logo">
            <div className="non__active__logo active__logo"> </div>
            <img
              className="client__img active__image"
              src={ClientLogo4}
              alt=""
            />
          </div>
          <div className="client__logo">
            <div className="non__active__logo"> </div>
            <img className="client__img" src={ClientLogo5} alt="" />
          </div>
          <div className="client__logo">
            <div className="non__active__logo"> </div>
            <img className="client__img" src={ClientLogo6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation_ClientLogos;
