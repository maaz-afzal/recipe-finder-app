import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeGrid = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="font-display text-2xl font-semibold text-gray-700 mb-6 font-serif">
        Discover Recipes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"></div>

      <RecipeCard/>
    </section>
  );
};

export default RecipeGrid;
