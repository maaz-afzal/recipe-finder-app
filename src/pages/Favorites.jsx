import React from "react";
import { Link } from "react-router-dom";
import { useFavoritesContext } from "../context/FavoritesContext";
import RecipeCard from "../components/RecipeCard";

const Favorites = () => {
  const { favorites } = useFavoritesContext();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-serif font-bold text-2xl mb-8">Favorites</h1>

      {favorites.length === 0 ? (
        <div className="flex justify-center items-center flex-col gap-2 mt-20">
          <p className="text-neutral-500 font-serif text-xl">
            No Favorites Yet
          </p>
          <Link to="/">
            <button className="bg-orange-500 px-6 py-2 cursor-pointer rounded-md font-semibold text-white text-lg">
              Browse Recipes
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {favorites.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
