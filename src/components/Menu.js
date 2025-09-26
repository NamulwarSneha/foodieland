
import React from 'react';
const recipes = [
  {
    title: 'Big and Juicy Cheeseburger',
    time: '30 minutes',
    category: 'Snack',
    image: '', 
  },
  
  {
    title: 'Fruity Pancake',
    time: '30 minutes',
    category: 'Breakfast',
    image: '',
  },

  {
    title: 'Salmon',
    time: '30 minutes',
    category: 'Fish',
    image: '',
  },

   {
    title: 'Mayo salad',
    time: '10 minutes',
    category: 'Healthy',
    image: '',
  },

  {
    title: 'Chicken MeatBalls with Cheese',
    time: '40 minutes',
    category: 'Meat',
    image: '',
  },

  {
    title: 'One pot Chicken and Rice',
    time: '40 minutes',
    category: 'Meal',
    image: '',
  },
];

function Menu({ recipe }) {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <Menu key={index} recipe={recipe} />
      ))}
    </div>
  );
}

export default Menu;
