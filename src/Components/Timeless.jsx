import React, { useState } from "react";
import { timelessData } from "../data";
import bgImage from "../assets/Component 15 – 86.png";

const Timeless = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2.5rem",
  };

  const itemStyle = {
    border: "2px solid black",
    padding: "1rem",
    textAlign: "center",
    position: "relative",
    minHeight: "22rem",
  };

  const headingStyle = (index) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    fontSize: "2rem",
    transform: "translate(-50%, -50%)",
    transition: "opacity 0.3s ease",
    opacity: hoveredIndex === null || hoveredIndex !== index ? 1 : 0,
  });

  const descriptionStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transition: "opacity 0.3s ease",
    opacity: hoveredIndex !== null ? 1 : 0,
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
            <div style={headingStyle(index)}>
              <p>{el.heading}</p>
            </div>
            <div style={descriptionStyle}>
              <p style={{ fontSize: "1.5rem" }}>{el.heading}</p>
              <p>{el.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeless;
