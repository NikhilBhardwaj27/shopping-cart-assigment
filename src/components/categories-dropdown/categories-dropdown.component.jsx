import React from "react";
import "./categories-dropdown.styles.scss";

const CategoryDropDown = ({ categories,selectCategory }) => {

  const handleSelection = (e) => {
    selectCategory(JSON.parse(e.target.value))
  }
  return (
    <div className="dropdown-container">
      <select name="categories" id="categories" onChange={(e) => handleSelection(e)}>
        {categories.map((category) => (
          <option key={category.id} value={JSON.stringify(category)}>{category.name}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropDown;
