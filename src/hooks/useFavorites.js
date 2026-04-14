import React, { useState } from "react";

const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const addFavorite = (meal) => {
    const newFavorites = [...favorites, meal];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const removeFavorite = (id) => {
    const filterFavorites = favorites.filter((meal) => meal.idMeal !== id);
    setFavorites(filterFavorites);
    localStorage.setItem("favorites", JSON.stringify(filterFavorites));
  };

  const isFavorites = (id) => {
    return favorites.find((meal) => meal.idMeal === id);
  };

  return { favorites, isFavorites, addFavorite, removeFavorite };
};

export default useFavorites;
