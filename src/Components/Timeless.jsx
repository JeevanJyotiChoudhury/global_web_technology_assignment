import React, { useState } from "react";
import { timelessData } from "../data";
import bgImage from "../assets/Image 18.png";

const Timeless = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2.5rem",
  };

  const itemStyle = {
    border: "2px solid black",
    textAlign: "center",
    position: "relative",
    minHeight: "27rem",
  };

  const headingStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    fontSize: "2rem",
    transform: "translate(-50%, -50%)",
    transition: "opacity 0.3s ease",
    opacity: 1,
    width: "70%",
    margin: "auto",
  };

  const descriptionStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transition: "opacity 0.3s ease",
    opacity: 0,
    width: "70%",
    margin: "auto",
  };

  return (
    <div style={{ width: "70%", margin: "auto", padding: "2rem 0" }}>
      <h1
        style={{
          textAlign: "center",
          color: "#70645C",
          fontSize: "2.5rem",
          paddingBottom: "1rem",
        }}
      >
        why timeless
      </h1>
      <div style={gridContainerStyle}>
        {timelessData.map((el, index) => (
          <div
            key={index}
            style={itemStyle}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              style={{
                marginTop: "25%",
              }}
            >
              <img
                src={bgImage}
                alt=""
                style={{ opacity: "0.3" }}
                width="100%"
                height="150%"
              />
            </div>
            <div
              style={{
                ...headingStyle,
                opacity: hoveredIndex === index ? 0 : 1,
              }}
            >
              <p>{el.heading}</p>
            </div>
            <div
              style={{
                ...descriptionStyle,
                opacity: hoveredIndex === index ? 1 : 0,
              }}
            >
              <p style={{ fontSize: "1.5rem", paddingBottom: "1.5rem" }}>
                {el.heading}
              </p>
              <p style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
                {el.desc1}
              </p>
              <p style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
                {el.desc2}
              </p>
              <p style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
                {el.desc3}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeless;
