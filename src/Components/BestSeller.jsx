import React, { useState } from "react";
import { bestSellerData } from "../data";

const BestSeller = () => {
  const totalCards = bestSellerData.length;

  const [showAllCards, setShowAllCards] = useState(false);

  const toggleShowCards = () => {
    setShowAllCards((prevShowAllCards) => !prevShowAllCards);
  };

  const visibleCards = showAllCards ? totalCards : 8;
  return (
    <div
      className="bestSellerDiv">
      <h1
        style={{
          textAlign: "center",
          color: "#70645C",
          fontSize: "2.5rem",
          paddingBottom: "1rem",
        }}
      >
        Our Best seller
      </h1>
      <div className="bestSeller">
        {bestSellerData.slice(0, visibleCards).map((product, index) => (
          <div key={index}>
            <img src={product.img} alt={product.name} width="100%" />
            <p className="nameDiv">{product.name}</p>
            <div className="star">
              <div>
                {[...Array(product.fullstar)].map((index) => (
                  <img key={index} src={product.fullstarimg} alt="fullstar" />
                ))}
                {product.halfstar > 0 && (
                  <img src={product.halfstarimg} alt="halfstar" />
                )}
              </div>
              <p>{product.reviews}</p>
            </div>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
      {totalCards > 4 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem 0",
          }}
        >
          <button onClick={toggleShowCards} className="buttonDiv">
            {showAllCards ? "View Less" : "View All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default BestSeller;
