import React from "react";
import Slider from "react-slick";
import { environmentCarousal } from "../data";
import { environmentData } from "../data";
import "../style/carousal.css";

const Environment = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "88%",
        margin: "auto",
        alignItems: "center",
        padding: "1rem 0",
      }}
    >
      <div style={{ width: "60%", textAlign: "center" }}>
        <h1 style={{ color: "#70645C", fontSize: "2.5rem" }}>
          {environmentData.heading1}
        </h1>
        <h1 style={{ color: "#70645C", fontSize: "2.5rem" }}>
          {environmentData.heading2}
        </h1>
        <p style={{ width: "70%", margin: "auto" }}>
          {environmentData.description}
        </p>
      </div>
      <Slider {...settings} style={{ width: "40%", cursor:"pointer" }}>
        {environmentCarousal.map((el, index) => (
          <div key={index} className="box">
            <img src={el.src} alt={el.alt} className="image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Environment;
