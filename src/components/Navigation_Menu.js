import React from "react";
import "./Navigation_Menu.css";
import "./accordion.css";
import Icon1 from "./icons/Icon1.png";
import Icon2 from "./icons/Shape1.png";
import Icon3 from "./icons/Icon3.png";
import Icon4 from "./icons/Icon4.png";
import Icon5 from "./icons/Icon5.png";
import Icon6 from "./icons/Icon6.png";

function Navigation_Menu() {
  return (
    <div className="menu">
      <div className="menu__link mb">
        <div className="menu__icon">
          <img src={Icon1} alt="icon1" />
        </div>
        <button className="menu__button">NOTIFICATIONS</button>
        <div className="menu_notification">29</div>
      </div>
      <div className="menu__link">
        <div className="menu__icon">
          <img src={Icon2} alt="icon1" />
        </div>
        <button className="menu__button">SUMMARY</button>
        <div className="menu_right_icon">+</div>
      </div>
      <div className="menu__link">
        <div className="menu__icon">
          <img src={Icon3} alt="icon1" />
        </div>
        <button className="menu__button">PUBLISH</button>

        <div className="menu_right_icon">+</div>
      </div>
      <div className="menu__link">
        <div className="menu__icon">
          <img src={Icon4} alt="icon1" />
        </div>
        <button className="menu__button">ENGAGE</button>
        <div className="menu_right_icon">+</div>
      </div>
      <div className="menu__link">
        <div className="menu__icon">
          <img src={Icon5} alt="icon1" />
        </div>
        <button className="menu__button">LISTEN</button>
        <div className="menu_right_icon">+</div>
      </div>
      <div className="menu__link">
        <div className="menu__icon">
          <img src={Icon6} alt="icon1" />
        </div>
        <button className="menu__button">REPORT</button>
        <div className="menu_right_icon">+</div>
      </div>
    </div>
  );
}

export default Navigation_Menu;
