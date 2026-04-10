import React, { useCallback } from "react";
import RecipeCard from "./RecipeCard";
import { fetchRecipes, searchRecipes } from "../services/api";
import useFetch from "../hooks/useFetch";

const RecipeGrid = ({ query }) => {
  const fetchFunction = useCallback(
    () => (query ? searchRecipes(query) : fetchRecipes()),
    [query],
  );

  const { data, error, loading } = useFetch(fetchFunction, query);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="font-display text-2xl font-semibold text-gray-700 mb-6 font-serif">
        Discover Recipes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {loading === true && (
          <p className="text-center mx-auto max-w-6xl font-bold text-2xl text-amber-400">
            Loading...
          </p>
        )}
        {error && <p>Error: {error.message}</p>}
        {data &&
          data.map((meal) => <RecipeCard key={meal.idMeal} meal={meal} />)}
      </div>
    </section>
  );
};

export default RecipeGrid;
