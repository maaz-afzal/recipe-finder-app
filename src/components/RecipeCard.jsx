import { Heart } from "lucide-react";
import React from "react";

const RecipeCard = () => {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden h-48">
        <button className="absolute top-2 right-2 p-2 rounded-full backdrop-blur-sm transition-all duration-200 active:scale-90 bg-white/80 text-gray-500 hover:bg-red-50 hover:text-red-500">
          <Heart />
        </button>
        <span className="absolute bottom-2 left-2 text-xs px-2 py-0.5 bg-brand-500/90 text-white rounded-full font-medium"></span>
      </div>
      <div className="p-4">
        <h3 className="font-display text-base font-semibold text-gray-800 dark:text-gray-100 leading-snug mb-1 line-clamp-2"></h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1"></p>
      </div>
    </div>
  );
};

export default RecipeCard;
