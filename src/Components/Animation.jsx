import React from "react";
import { animation } from "../data";

const Animation = () => {
  return (
    <div className="animationGrid">
      {animation.map((elem, index) => (
        <div className="circular-container" key={index}>
          <div
            style={{ display: "flex", justifyContent: "center", height: "50%" }}
          >
            <img src={elem.imgUrl} alt="" style={{ paddingTop: "2rem" }} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "50%",
              paddingTop: "10px",
              background: "#70645C",
              color: "white",
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            {elem.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Animation;
