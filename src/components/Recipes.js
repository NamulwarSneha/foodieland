import React from "react";

function Recipes() {
  const recipes = [
    "Big and Juicy Cheeseburger",
    "Fruity Pancake",
    "Salmon",
    "Mayo salad",
    "Chicken MeatBalls with Cheese",
    "One pot Chicken and Rice",
  ];

  return (
    <section>
      <h2>Simple and tasty recipes</h2>
      <ul>
        {recipes.map((recipe, i) => (
          <li key={i}>{recipe}</li>
        ))}
      </ul>
    </section>
  );
}

export default Recipes;
