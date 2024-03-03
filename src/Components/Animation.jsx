import React from "react";
import { animation } from "../data";

const Animation = () => {
  return (
    <div
      style={{
        display: "grid",
        width: "70%",
        margin: "auto",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "1rem",
        paddingBottom: "1rem",
      }}
    >
      {animation.map((elem, index) => (
        <div
          key={index}
          style={{
            width: "100%",
            height: "16rem",
            border: "1px solid #70645c",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
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
