import { createContext, useContext } from "react";
import useFavorites from "../hooks/useFavorites";

export const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  const { favorites, addFavorite, removeFavorite, isFavorites } =
    useFavorites();

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => useContext(FavoritesContext);
