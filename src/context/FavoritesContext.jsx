import { createContext, useContext, useState } from "react";

// Context
const FavoritesContext = createContext(null);

// Provider - sabka data yahan manage hoga
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  const addFavorite = (meal) => {
    const updated = [...favorites, meal];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const removeFavorite = (id) => {
    const updated = favorites.filter((meal) => meal.idMeal !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const isFavorites = (id) => {
    return favorites.find((meal) => meal.idMeal === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

// Custom hook - components mein use karne ke liye
export const useFavoritesContext = () => useContext(FavoritesContext);