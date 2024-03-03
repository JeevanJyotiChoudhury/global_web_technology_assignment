import React from "react";
import { buttonData } from "../data";

const Buttons = ({ selectedCategory, handleCategoryChange }) => {
  return (
    <div
      style={{
        width: "100%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {buttonData.map((button, index) => (
        <button
          key={index}
          onClick={() => handleCategoryChange(button.label.toLowerCase())}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            borderRadius: "60px",
            padding: "0.5rem 1rem",
            border: "2px solid #737373",
            backgroundColor:
              selectedCategory === button.label.toLowerCase()
                ? "pink"
                : "transparent",
          }}
        >
          <img src={button.imgSrc} alt={`buttonImg${index + 1}`} width="50%" />
          <h1>{button.label}</h1>
        </button>
      ))}
    </div>
  );
};

export default Buttons;
