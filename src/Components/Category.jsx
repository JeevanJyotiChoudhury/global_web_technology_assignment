import React, { useState } from "react";
import Buttons from "./Buttons";
import Categories from "./Categories";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("face");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container">
      <Buttons
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <Categories selectedCategory={selectedCategory} />
    </div>
  );
};

export default Category;
