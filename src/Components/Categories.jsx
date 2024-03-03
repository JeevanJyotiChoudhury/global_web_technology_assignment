import React, { useState } from "react";
import { data } from "../data";

const Categories = ({ selectedCategory }) => {
  const categoryData = data[selectedCategory];
  const totalCards = categoryData.length;

  const [showAllCards, setShowAllCards] = useState(false);

  const toggleShowCards = () => {
    setShowAllCards((prevShowAllCards) => !prevShowAllCards);
  };

  const visibleCards = showAllCards ? totalCards : 4;

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1.5rem",
    width: "100%",
    
  };

  return (
    <div style={{ margin: "2rem 0" }}>
      <div className="product-container" style={gridContainerStyle}>
        {categoryData.slice(0, visibleCards).map((product, index) => (
          <div key={index}>
            <img src={product.img} alt={product.name} width="100%" />
            <p
              style={{
                fontSize: "0.9rem",
                textAlign: "center",
                padding: "0.3rem 0",
              }}
            >
              {product.name}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "60%",
                margin: "auto",
                justifyContent: "space-between",
                padding: "0 0.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {[...Array(product.fullstar)].map((index) => (
                  <img key={index} src={product.fullstarimg} alt="fullstar" />
                ))}
                {product.halfstar > 0 && (
                  <img src={product.halfstarimg} alt="halfstar" />
                )}
              </div>
              <p
                style={{
                  fontSize: "0.7rem",
                  padding: "0.3rem 0",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {product.reviews}
              </p>
            </div>
            <p
              style={{
                textAlign: "center",
                fontSize: "0.9rem",
                padding: "0.3rem 0",
              }}
            >
              {product.price}
            </p>
          </div>
        ))}
      </div>
      {totalCards > 4 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <button
            onClick={toggleShowCards}
            style={{
              borderRadius: "50px",
              padding: "0.2rem 2rem",
              border: "2px solid #707070",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            {showAllCards ? "View Less" : "View All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Categories;
