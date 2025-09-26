import React from "react";

function Categories() {
  const items = ["Breakfast", "Vegan", "Meat", "Dessert", "Lunch", "Chocolate"];

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {items.map((category, i) => (
          <li key={i}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
