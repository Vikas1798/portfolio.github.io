import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="menustyle">
          <ul>
            <li>
              <Link to="/">Short Term</Link>
            </li>
            <li>
              <Link to="/midterm">Mid Term</Link>
            </li>
            <li>
              <Link to="/longterm">Long Term</Link>
            </li>
          </ul>
        </div>
        <label className="lable">
          <input type="checkbox" />
          &nbsp;&nbsp;Inclue existing portfolio for portfolio recomandation
        </label>
      </div>
      <hr className="line" />
    </>
  );
};
export default Navbar;
