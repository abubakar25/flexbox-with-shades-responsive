import React from "react";
import { MdOutlineExpandMore } from "react-icons/md";

function FlexLayout(props) {
  return (
    <div>
      <div
        style={{
          // maxWidth: "350px",
          flexDirection: "row",
          flexWrap: "nowrap",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          height: "30px",
        }}
      >
        <div style={{ color: "gray", fontWeight: "bold" }}>01</div>
        <div style={{ color: "black", fontWeight: "bold", minWidth: "300px" }}>
          Where are these chairs assembled ?
        </div>
        <div style={{ color: "gray", fontWeight: "bold" }}>
          <MdOutlineExpandMore />
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            // width: "350px",
            gap: "12px",
            height: "30px",
          }}
        >
          <div style={{ fontWeight: "bold", color: "#40c057" }}>02</div>
          <div style={{ fontWeight: "bold", color: "#40c057" }}>
            How long do i have to return my chair ?{" "}
          </div>
          <div style={{ fontWeight: "bold", color: "#40c057" }}>
            <MdOutlineExpandMore />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "80px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-around",
            alignItems: "center",
            alignContent: "center",
            // maxWidth: "350px",
            gap: "12px",
            height: "30px",
          }}
        >
          <div style={{ maxWidth: "260px" }}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </div>
        </div>
      </div>
      <div style={{ marginTop: "132px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-around",
            alignItems: "center",
            alignContent: "center",
            // maxWidth: "350px",
            gap: "12px",
            height: "30px",
          }}
        >
          <div>
            <li>In publishing and graphic design,</li>
            <li> a typeface relying on meaningful</li>
            <li>a placeholder before final copy is</li>
            <li>y used to demonstrate the visual</li>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "40px" }}>
        <div
          style={{
            //   maxWidth: "350px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            gap: "12px",
            height: "30px",
            //   border: "2px solid green",
          }}
        >
          <div style={{ color: "gray", fontWeight: "bold" }}>03</div>
          <div style={{ color: "black", fontWeight: "bold" }}>
            Do you ship to countries outside the EU?{" "}
          </div>
          <div style={{ color: "gray" }}>
            <MdOutlineExpandMore />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexLayout;
