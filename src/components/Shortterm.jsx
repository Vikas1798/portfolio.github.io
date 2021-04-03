import React from "react";
import "./Shortterm.css";
const Shortterm = () => {
  const imagelogo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPa-5zXm96yCzJyhhdHbIwv-nZssocUhZqJYQYzaFx5-QqDsPD_UfMgT3GbmODfkgEBa4&usqp=CAU";
  const profilepicture =
    "https://ichef.bbci.co.uk/news/1024/cpsprodpb/66CC/production/_116361362_tes1.png";

  return (
    <div className="shortcontainer">
      <div className="nameandlogo">
        <h3 style={{ fontSize: "40px" }}>Rajesh Sawhney</h3>
        <img
          src={imagelogo}
          alt="Logo"
          style={{ width: "90px", height: "60px", borderRadius: "30px" }}
        />
      </div>
      <div className="flex-container">
        <div className="flex-item-1">
          {/* <h3>Rajesh Sawhney</h3> */}
          <br />
          <h5> investment portfolio</h5>
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
            <span style={{ color: "#85929e" }}> Tranche amount :</span>50,00,000
          </h3>
          <h3>
            <span style={{ color: "#85929e" }}> Total amount :</span>20,00,000
          </h3>
          <br />
          <br />
          <h3>
            <span style={{ color: "#85929e" }}> Date :</span>29 sep,2020
          </h3>
        </div>
        <div className="flex-item-3">
          <br />
          <img
            src={profilepicture}
            style={{ width: "170px", height: "130px" }}
            alt="Logo"
          />
          <h6>
            {" "}
            <span style={{ color: "gray", fontSize: "20px" }}>
              Created By :
            </span>{" "}
            Elon Musk
          </h6>
          <p style={{ fontSize: "20px" }}>
            {" "}
            (<span style={{ color: "gray", fontSize: "20px" }}>Advisor </span> -
            Apple Inc.)
          </p>
          <p style={{ fontSize: "15px", color: "blue" }}> more info</p>
        </div>
      </div>
    </div>
  );
};
export default Shortterm;
