import React from "react";
import "./Styles.css";
import { MdOutlineExpandMore } from "react-icons/md";

function GridLayout(props) {
  return (
    <div style={{ marginTop: "100px" }}>
      <div
        style={{
          margin: "auto",
          width: "40%",
          height: "600px",
          backgroundColor: "#dee2e6",
          border: "2px solid ced4da",
          borderRadius: "10px",
          padding: "30px",
        }}
      >
        <div
          style={{
            margin: "auto",
            width: "85%",
            height: "550px",
            padding: "10px",
            backgroundColor: "#f1f3f5",
          }}
        >
          <div
            style={{
              margin: "auto",
              width: "80%",
              height: "490px",
              padding: "25px",
            }}
          >
            <div>
              <div className="item1" style={{ backgroundColor: "white" }}>
                <div className="container" style={{ fontWeight: "bold" }}>
                  <div style={{ color: "gray" }}>01</div>
                  <div style={{ color: "black" }}>Where are these chairs ?</div>
                  <div style={{ color: "gray" }}>
                    <MdOutlineExpandMore />
                  </div>
                </div>
              </div>
            </div>
            <div className="item2" style={{ backgroundColor: "white" }}>
              <div>
                <hr
                  style={{
                    border: "2px solid green",
                    borderRadius: "5px",
                  }}
                ></hr>
              </div>
              <div
                className="container1"
                style={{ fontWeight: "bold", color: "green", padding: "10px" }}
              >
                <div>02</div>
                <div>How long do i have to return my chairs</div>
                <div>
                  <MdOutlineExpandMore />
                </div>
              </div>
              <div style={{ paddingLeft: "50px" }}>
                <p style={{ maxWidth: "370px" }}>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                </p>
                <div>
                  <li>In publishing and graphic design,</li>
                  <li> a typeface without meaningful</li>
                  <li>a placeholder before final copy is</li>
                  <li>y used to demonstrate the visual</li>
                </div>
              </div>
            </div>
            <div className="item3" style={{ backgroundColor: "white" }}>
              <div className="container" style={{ fontWeight: "bold" }}>
                <div style={{ color: "gray" }}>03</div>
                <div>Do you Ship to countries outside the EU ?</div>
                <div style={{ color: "gray" }}>
                  <MdOutlineExpandMore />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridLayout;
