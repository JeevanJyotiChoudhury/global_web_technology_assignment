import React, { useState } from "react";
import { customerTestimonials } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../assets/Icon ionic-ios-arrow-round-back.png";
import rightArrow from "../assets/Group 926.png";
import "../style/carousal.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <img src={rightArrow} alt="" />
        </div>
      </div>
    ),

    prevArrow: (
      <div>
        <div className="next-slick-arrow">
          <img src={leftArrow} alt="" />
        </div>
      </div>
    ),
  };
  return (
    <div
      style={{
        borderBottom: "2px solid #cdcdcd",
        width: "70%",
        margin: "auto",
        paddingBottom: "2rem",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#70645C",
          fontSize: "2.5rem",
          paddingBottom: "1rem",
        }}
      >
        customer testimonials
      </h1>
      <div>
        <Slider {...settings}>
          {customerTestimonials.map((item, index) => (
            <div key={index} className="card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "1.5rem 0",
                }}
              >
                <img src={item.quote} alt="quote" />
              </div>

              <p style={{ textAlign: "center", fontSize: "0.9rem" }}>
                {item.desc}
              </p>
              <div
                className="stars"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  bottom: "3rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                {[...Array(item.fullstar)].map((_, index) => (
                  <img key={index} src={item.fullstarimg} alt="fullstar" />
                ))}
                {item.halfstar > 0 && (
                  <img src={item.halfstarimg} alt="halfstar" />
                )}
              </div>

              <p
                style={{
                  textAlign: "center",
                  position: "absolute",
                  bottom: "1rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "0.9rem",
                }}
              >
                {item.name}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
