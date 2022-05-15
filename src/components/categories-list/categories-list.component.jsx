import React, { useState } from "react";
import "./categories-list.styles.scss";

const CategoriesList = ({ category, selectCategory }) => {
  const { name, isSelected } = category;

  const handleClick = () => {
    selectCategory(category);
  };

  return (
    <div className="categories-list-container">
      <span
        className={`category-name ${isSelected ? "selected" : "not-selected"}`}
        onClick={handleClick}
      >
        {name}
      </span>
    </div>
  );
};

export default CategoriesList;
