import React from "react";
import bottombar from "../assets/TIMELESS BEAUTY SECRETS®.png";
import upi from "../assets/upi-icon.png";
import americanexpress from "../assets/Icon awesome-cc-amex.png";
import discover from "../assets/Icon payment-discover.png";
import dinersclub from "../assets/Icon awesome-cc-diners-club.png";
import jcb from "../assets/Icon awesome-cc-jcb.png";
import mastero from "../assets/Icon payment-maestro-alt.png";
import matercard from "../assets/Icon metro-mastercard.png";
import paypal from "../assets/Icon metro-cc-paypal.png";
import visa from "../assets/Icon metro-visa.png";

const Bottombar = () => {
  return (
    <div style={{ width: "70%", margin: "auto", padding: "0.5% 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <img src={bottombar} alt="bottombar" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
            alignItems: "center",
          }}
        >
          <div>
            <img src={upi} alt="upi" />
          </div>
          <div>
            <img src={americanexpress} alt="americanexpress" />
          </div>
          <div>
            <img src={discover} alt="discover" />
          </div>
          <div>
            <img src={dinersclub} alt="dinersclub" />
          </div>
          <div>
            <img src={jcb} alt="jcb" />
          </div>
          <div>
            <img src={mastero} alt="mastero" />
          </div>
          <div>
            <img src={matercard} alt="matercard" />
          </div>
          <div>
            <img src={paypal} alt="paypal" />
          </div>
          <div>
            <img src={visa} alt="visa" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottombar;
