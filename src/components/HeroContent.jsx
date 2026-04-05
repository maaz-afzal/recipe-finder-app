import React from "react";
import SearchBar from "./SearchBar";
import RecipeGrid from "./RecipeGrid";

const HeroContent = () => {
  return (
    <main>
      <div className="min-h-screen">
        <section className="py-16 px-4 bg-amber-100/50">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-serif">
              What are you <span className="text-amber-500">cooking</span>{" "}
              today?
            </h1>
            <p className="text-gray-500 mb-8 text-lg font-sans font-medium">
              Discover Delicious Recipes for Every Occasion
            </p>
            <SearchBar />
          </div>
        </section>
        <RecipeGrid />
      </div>
    </main>
  );
};

export default HeroContent;
