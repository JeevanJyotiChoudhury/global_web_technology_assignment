import React from "react";
import facebook from "../assets/Icon feather-facebook.png"
import twitter from "../assets/Icon feather-twitter.png"
import youtube from "../assets/Icon feather-youtube.png"
import instagram from "../assets/Icon feather-instagram.png"
import linkedin from "../assets/Icon feather-linkedin.png"

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#71645c", width: "100%", color: "white" }}>
      <div
        style={{
          width: "70%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "1rem",
        }}
      >
        <div style={{ paddingBottom: "1rem", marginBottom: "1rem" }}>
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>SHOP</p>
          <p style={{ marginBottom: "0.5rem" }}>Face Care</p>
          <p style={{ marginBottom: "0.5rem" }}>Body Care</p>
          <p style={{ marginBottom: "0.5rem" }}>Hair Care</p>
          <p style={{ marginBottom: "0.5rem" }}>Custom</p>
          <p style={{ marginBottom: "0.5rem" }}>Gifting</p>
        </div>
        <div style={{ paddingBottom: "1rem", marginBottom: "1rem" }}>
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>ABOUT</p>
          <p style={{ marginBottom: "0.5rem" }}>Our Story</p>
          <p style={{ marginBottom: "0.5rem" }}>Giving Back</p>
          <p style={{ marginBottom: "0.5rem" }}>Why Timeless</p>
          <p style={{ marginBottom: "0.5rem" }}>Philosophy</p>
          <p style={{ marginBottom: "0.5rem" }}>Certification</p>
          <p style={{ marginBottom: "0.5rem" }}>Careers</p>
          <p style={{ marginBottom: "0.5rem" }}>Policies</p>
          <p style={{ marginBottom: "0.5rem" }}>Blog</p>
        </div>
        <div style={{ paddingBottom: "1rem", marginBottom: "1rem" }}>
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            QUICK LINKS
          </p>
          <p style={{ marginBottom: "0.5rem" }}>My Account</p>
          <p style={{ marginBottom: "0.5rem" }}>Custom Product</p>
          <p style={{ marginBottom: "0.5rem" }}>Timeless Club</p>
          <p style={{ marginBottom: "0.5rem" }}>Customer Stories</p>
          <p style={{ marginBottom: "0.5rem" }}>Terms & Conditions</p>
          <p style={{ marginBottom: "0.5rem" }}>Refer a Friend</p>
          <p style={{ marginBottom: "0.5rem" }}>Contact Us</p>
          <p style={{ marginBottom: "0.5rem" }}>FAQS</p>
        </div>
        <div style={{ paddingBottom: "1rem", marginBottom: "1rem" }}>
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            GET IN TOUCH
          </p>
          <p style={{ marginBottom: "0.5rem" }}>
            Email: timelesscare@timelessbeautysecrets.in
          </p>
          <p style={{ marginBottom: "0.5rem" }}>Phone: +91-9090530001</p>
          <p style={{ marginBottom: "1rem" }}>
            Address: 175, EPIP Industrial Area, Whitefield, Bangalore - 560066
          </p>
          <p style={{ marginBottom: "0.5rem" }}>FOLLOW US</p>
          <div style={{display:"flex",justifyContent:"space-between",width:"60%",marginTop:"1rem"}}>
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
            <img src={linkedin} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
