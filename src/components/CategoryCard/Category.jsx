import React from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <CategoryCard
        title="Games"
        bg="./category_cards/1.png"
        ico="./category_cards/1.svg"
      />
      <CategoryCard
        title="IRL"
        bg="./category_cards/2.png"
        ico="./category_cards/2.svg"
      />
      <CategoryCard
        title="Music"
        bg="./category_cards/3.png"
        ico="./category_cards/3.svg"
      />
      <CategoryCard
        title="Esports"
        bg="./category_cards/4.png"
        ico="./category_cards/4.svg"
      />
    </div>
  );
};

export default Category;
