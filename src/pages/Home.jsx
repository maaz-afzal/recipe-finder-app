import React from "react";
import SearchBar from "../components/SearchBar";
import RecipeGrid from "../components/RecipeGrid";

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="px-4 py-16 bg-amber-200/60">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-3 font-serif">
            What Will You <span className="text-amber-400">Cook</span> Today?
          </h1>
          <p className="text-gray-500 mb-8 text-lg font-sans">
            Search and discover recipes from around the world
          </p>
        </div>
        <SearchBar />
      </section>

      <RecipeGrid />


      {/* <section>
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="mb-6 text-2xl font-semibold text-gray-700 font-display font-serif">
            Discover Recipes
          </h2>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
