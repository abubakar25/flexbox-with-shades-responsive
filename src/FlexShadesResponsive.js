import React from "react";
import { MdOutlineExpandMore } from "react-icons/md";

function FlexShadesResponsive(props) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "gray",
      }}
    >
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "750px",
              height: "600px",
              backgroundColor: "#ced4da",
              // border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "1px 1px 2px 3px #ced4da",
            }}
          >
            <div
              style={{
                width: "520px",
                height: "500px",
                backgroundColor: "#e9ecef",
                // border: "1px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "1px 1px 2px 3px #e9ecef",
              }}
            >
              <div
                style={{
                  width: "340px",
                  height: "450px",
                  // backgroundColor: "blue",
                  // border: "1px solid black",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div>
                  <div>
                    <div>
                      <div
                        style={{
                          marginTop: "10px",
                          flexDirection: "row",
                          flexWrap: "nowrap",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "30px",
                          border: "white",
                          boxShadow: "1px 1px 2px 3px #faeeee",
                          backgroundColor: "white",
                        }}
                      >
                        <div style={{ color: "gray", fontWeight: "bold" }}>
                          01
                        </div>
                        <div
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            minWidth: "300px",
                            marginLeft: "5px",
                          }}
                        >
                          Where are these chairs assembled ?
                        </div>
                        <div style={{ color: "gray", fontWeight: "bold" }}>
                          <MdOutlineExpandMore />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div
                        style={{
                          // border: "3px solid black",
                          border: "white",
                          boxShadow: "1px 1px 2px 3px #faeeee",
                          height: "340px",
                          marginTop: "20px",
                          backgroundColor: "white",
                        }}
                      >
                        <div>
                          <hr
                            style={{
                              border: "2px solid green",
                              borderRadius: "5px",
                            }}
                          ></hr>
                        </div>
                        <div style={{ display: "flex" }}>
                          <div style={{ color: "#40c057", fontWeight: "bold" }}>
                            02
                          </div>
                          <div
                            style={{
                              fontWeight: "bold",
                              minWidth: "300px",
                              color: "#40c057",
                              marginLeft: "5px",
                            }}
                          >
                            How long do i have to return my chair ?
                          </div>
                          <div style={{ color: "#40c057", fontWeight: "bold" }}>
                            <MdOutlineExpandMore />
                          </div>
                        </div>

                        <div style={{ padding: "24px" }}>
                          In publishing and graphic design, Lorem ipsum is a
                          placeholder text commonly used to demonstrate the
                          visual form of a document or a typeface without
                          relying on meaningful content. Lorem ipsum may be used
                          as a placeholder before final copy is available.
                        </div>
                        <div style={{ padding: "24px" }}>
                          <li>In publishing and graphic design,</li>
                          <li> a typeface relying on meaningful</li>
                          <li>a placeholder before final copy is</li>
                          <li>y used to demonstrate the visual</li>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div
                        style={{
                          marginTop: "20px",
                          flexDirection: "row",
                          flexWrap: "nowrap",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "30px",
                          // border: "3px solid black",
                          backgroundColor: "white",
                          border: "white",
                          boxShadow: "1px 1px 2px 3px #faeeee",
                        }}
                      >
                        <div style={{ color: "gray", fontWeight: "bold" }}>
                          03
                        </div>
                        <div
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            minWidth: "300px",
                            marginLeft: "5px",
                          }}
                        >
                          Do you Ship to countries outside EU ?
                        </div>
                        <div style={{ color: "gray", fontWeight: "bold" }}>
                          <MdOutlineExpandMore />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexShadesResponsive;
