import React from "react";
import location from "../assets/Left Header.png";
import logo from "../assets/Group 1.png";
import binocular from "../assets/NoPath - Copy.png";
import cart from "../assets/NoPath - Copy (10).png";
import profile from "../assets/NoPath - Copy (11).png";
import heart from "../assets/Icon feather-heart.png";

const Logobar = () => {
  return (
    <div className="topMainDiv">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img src={location} alt="location" />
        </div>
        <div className="mainLogo">
          <img src={logo} alt="logo" />
        </div>
        <div className="topLogoDiv">
          <div>
            <img src={binocular} alt="binocular" />
          </div>
          <div>
            <img src={heart} alt="heart" />
          </div>
          <div>
            <img src={profile} alt="profile" />
          </div>
          <div>
            <img src={cart} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logobar;
