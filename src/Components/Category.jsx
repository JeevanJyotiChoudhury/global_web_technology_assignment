import React, { useState } from "react";
import Buttons from "./Buttons";
import Categories from "./Categories";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("face");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div
      style={{
        paddingBottom: "0.5rem",
        paddingTop: "2rem",
        width: "70%",
        margin: "auto",
        borderBottom: "2px solid #cdcdcd",
      }}
    >
      <Buttons
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <Categories selectedCategory={selectedCategory} />
    </div>
  );
};

export default Category;
