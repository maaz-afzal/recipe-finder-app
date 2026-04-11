import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ meal }) => {
  const navigate = useNavigate();

  const handleRecipeClick = () => {
    navigate(`/recipe/${meal.idMeal}`);
  };

  return (
    <div
      className="cursor-pointer rounded-xl shadow-sm hover:shadow-md transition duration-200 hover:scale-102"
      onClick={handleRecipeClick}
    >
      <div className="relative h-50 rounded-t-xl overflow-hidden">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>

        {/* Favorite Button icon */}
        <button
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 backdrop-blur-sm transition-all duration-200 hover:bg-red-50 hover:text-red-500 active:scale-90"
          onClick={(e) => {
            e.stopPropagation();
            console.log("Added to favorites:", meal.strMeal);
          }}
        >
          <Heart size={18} />
        </button>

        {/* Category Tag */}
        <span className="absolute bottom-2 left-2 text-xs px-2 py-0.5 bg-black/70 text-white rounded-full font-medium">
          {meal.strCategory || "Uncategorized"}
        </span>
      </div>
      {/* Recipe Details */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-800 leading-snug mb-1 line-clamp-2">
          {meal.strMeal}
        </h3>

        <p className="text-xs text-gray-500 flex items-center gap-1">
          🌍 {meal.strArea || "Various"}
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
