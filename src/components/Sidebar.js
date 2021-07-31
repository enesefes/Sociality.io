import React from "react";
import Logo from "../images/Sociality_Logo_MonochromaticV_positive-svg.png";
import Navigation_ClientLogos from "./Navigation_ClientLogos";
import Navigation_Menu from "./Navigation_Menu";

import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="Navigation-SocialityLogo">
        <img className="logo" src={Logo} alt="Sociality-Logo" />
        <div className="navigation">
          <Navigation_ClientLogos />
          <Navigation_Menu />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
