import React from "react";
import "./Longterm.css";
const Longterm = () => {
  const imagelogo = "https://www.facebook.com/images/fb_icon_325x325.png";

  const profilepicture =
    "data:image/jpeg;base64,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";

  return (
    <div className="shortcontainer">
      <div className="nameandlogo">
        <h3 style={{ fontSize: "40px" }}> Mark Zuckerberg</h3>
        <img
          src={imagelogo}
          alt="Logo"
          style={{ width: "80px", height: "90px", borderRadius: "30px" }}
        />
      </div>
      <div className="flex-container">
        <div className="flex-item-1">
          <br />
          <h5> Chief Executive Officer of Facebook Portfolio</h5>
          <p>
            portfolio suitable for as per the current market scenario for long
            term invester
          </p>
          <br />
          <div className="consist">
            <p className="p1"> Consists:</p>
            <p className="p2"> Stocks</p>
            <p className="p3"> Bonds</p>
            <p className="p4"> Mutual funds</p>
            <p className="p5"> Gold ETFs</p>
          </div>
          <br />
          <div className="threeboxes">
            <p className="box1">
              <i className="fa fa-inr" />
              Value
            </p>
            <p className="box2">
              <i className="material-icons" style={{ fontSize: "20px" }}>
                warning
              </i>
              Moderate Risk
            </p>
            <p className="box3">
              <i class="material-icons">equalizer</i> Top Sector
            </p>
          </div>
        </div>

        <div className="flex-item-2">
          <h3>
            <span style={{ color: "#85929e" }}> Tranche amount :</span>
            120,00,000
          </h3>
          <h3>
            <span style={{ color: "#85929e" }}> Total amount :</span>
            70,00,000,0000,000
          </h3>
          <br />
          <br />
          <h3>
            <span style={{ color: "#85929e" }}> Date :</span>4 oct,2019
          </h3>
        </div>
        <div className="flex-item-3">
          <br />
          <img
            src={profilepicture}
            style={{ width: "140px", height: "150px" }}
            alt="Logo"
          />
          <h6>
            <span style={{ color: "gray", fontSize: "20px" }}>
              Created By :
            </span>
            Mark Zuckerberg
          </h6>
          <p style={{ fontSize: "20px" }}>
            (<span style={{ color: "gray", fontSize: "20px" }}>Advisor </span> -
            Apple Inc.)
          </p>
          <p style={{ fontSize: "15px", color: "blue" }}> more info</p>
        </div>
      </div>
    </div>
  );
};
export default Longterm;
