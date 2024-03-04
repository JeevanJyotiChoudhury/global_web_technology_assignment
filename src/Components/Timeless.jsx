import React, { useState } from "react";
import { timelessData } from "../data";
import bgImage from "../assets/Image 18.png";

const Timeless = () => {
  const [hoveredIndexes, setHoveredIndexes] = useState(
    Array(timelessData.length).fill(false)
  );

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
    top: "8%",
    left: "50%",
    fontSize: "2rem",
    transform: "translate(-50%, -50%)",
    transition: "top 0.3s ease, transform 0.3s ease",
    opacity: 1,
    width: "90%",
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

  const handleMouseEnter = (index) => {
    const updatedIndexes = [...hoveredIndexes];
    updatedIndexes[index] = true;
    setHoveredIndexes(updatedIndexes);
  };

  const handleMouseLeave = (index) => {
    const updatedIndexes = [...hoveredIndexes];
    updatedIndexes[index] = false;
    setHoveredIndexes(updatedIndexes);
  };

  return (
    <div className="timelessMain">
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
      <div className="timelessGrid">
        {timelessData.map((el, index) => (
          <div
            key={index}
            style={itemStyle}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div style={{ marginTop: "25%" }}>
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
                top: hoveredIndexes[index] ? "15%" : "50%",
              }}
            >
              <p>{el.heading}</p>
            </div>
            <div
              style={{
                ...descriptionStyle,
                opacity: hoveredIndexes[index] ? 1 : 0,
              }}
            >
              <p style={{ fontSize: "0.8rem", paddingTop: "5rem" }}>
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
