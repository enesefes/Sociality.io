import React from "react";
import Picture from "../images/Picture.png";
import Content from "./Content";

import "./page.css";

function Page() {
  return (
    <div className="page">
      <div className="top__bar">
        <ul className="description">
          <li>Published</li>
          <li>Scheduled</li>
          <li>Need Approval</li>
          <li>Error</li>
          <li>Notes</li>
        </ul>
        <div className="top__bar__profile">
          <img src={Picture} alt="profile" />
        </div>
      </div>
      <Content />
    </div>
  );
}

export default Page;
