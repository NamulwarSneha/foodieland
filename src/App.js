import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Recipes from "./components/Recipes";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import Chef from "./components/Chef"
import Insta from "./components/Insta"
import Menu from "./components/Menu"

function App() {
  return (
    <div>
      <Header />
      <Categories />
      <Recipes />
      <Chef />
      <NewsLetter />
      <Footer />
      <Insta />
      <Menu />
    </div>
  );
}

export default App;
