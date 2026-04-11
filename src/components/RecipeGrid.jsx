import React, { useCallback } from "react";
import RecipeCard from "./RecipeCard";
import { fetchRecipes, searchRecipes } from "../services/api";
import useFetch from "../hooks/useFetch";

const RecipeGrid = ({ query }) => {
  const fetchFunction = useCallback(
    () => (query ? searchRecipes(query) : fetchRecipes()),
    [query],
  );

  const { data, error, loading } = useFetch(fetchFunction);

  if (loading) {
    return (
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 font-serif tracking-tight">
            Discover Recipes
          </h1>
          {query && (
            <p className="text-gray-500 mt-2 text-lg">
              Searching for "
              <span className="font-semibold text-orange-600">{query}</span>"
            </p>
          )}
        </div>
        <div className="min-h-[40vh] flex flex-col items-center justify-center">
          <div className="w-10 h-10 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mb-3"></div>
          <p className="text-gray-500 font-medium">Loading recipes...</p>
        </div>
      </section>
    );
  }

  // showing error message
  if (error) {
    return (
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 font-serif tracking-tight">
            Discover Recipes
          </h1>
        </div>
        <div className="min-h-[40vh] flex items-center justify-center">
          <div className="text-center p-6 bg-red-50 rounded-xl border border-red-100">
            <p className="text-red-600 font-semibold">Error loading recipes</p>
            <p className="text-red-400 text-sm mt-1">{error.message}</p>
          </div>
        </div>
      </section>
    );
  }

  // showing the grid
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 font-serif tracking-tight">
          Discover Recipes
        </h1>
        {query && (
          <p className="text-gray-500 mt-2 text-lg">
            Searching for "
            <span className="font-semibold text-orange-600">{query}</span>"
          </p>
        )}
      </div>

      {/* Grid or Empty State */}
      {data && data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
          <p className="text-gray-400 text-lg font-medium">No recipes found.</p>
        </div>
      )}
    </section>
  );
};

export default RecipeGrid;
