import React from "react";
import "./Styles.css";

import { MdOutlineExpandMore } from "react-icons/md";

function PureGridLayout(props) {
  return (
    <div>
      <div className="GridContainer">
        <div className="number" style={{ fontWeight: "bold", color: "gray" }}>
          01
        </div>
        <div className="text" style={{ color: "black", fontWeight: "bold" }}>
          Where are these chairs assembled ?
        </div>
        <div className="drop" style={{ color: "gray" }}>
          <MdOutlineExpandMore />
        </div>

        <div
          className="number1"
          style={{ fontWeight: "bold", color: "#40c057" }}
        >
          02
        </div>
        <div className="text1" style={{ fontWeight: "bold", color: "#40c057" }}>
          How long do i have to return my chair ?
        </div>
        <div className="drop1" style={{ color: "#40c057" }}>
          <MdOutlineExpandMore />
        </div>
        <div className="para">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </div>
        <div className="list">
          <li>In publishing and graphic design,</li>
          <li> a typeface relying on meaningful</li>
          <li>a placeholder before final copy is</li>
          <li>y used to demonstrate the visual</li>
        </div>
        <div className="number2" style={{ fontWeight: "bold", color: "gray" }}>
          03
        </div>
        <div className="text2" style={{ color: "black", fontWeight: "bold" }}>
          Do you ship to countries outside the EU ?
        </div>
        <div className="drop2" style={{ color: "gray" }}>
          <MdOutlineExpandMore />
        </div>
      </div>
    </div>
  );
}

export default PureGridLayout;
