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

  return (
    <div style={{ margin: "2rem 0" }}>
      <div className="product-container">
        {categoryData.slice(0, visibleCards).map((product, index) => (
          <div key={index}>
            <img src={product.img} alt={product.name} width="100%" />
            <p className="nameDiv">
              {product.name}
            </p>
            <div className="star">
              <div>
                {[...Array(product.fullstar)].map((index) => (
                  <img key={index} src={product.fullstarimg} alt="fullstar" />
                ))}
                {product.halfstar > 0 && (
                  <img src={product.halfstarimg} alt="halfstar" />
                )}
              </div>
              <p>
                {product.reviews}
              </p>
            </div>
            <p className="price"
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
            className="buttonDiv"
          >
            {showAllCards ? "View Less" : "View All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Categories;
