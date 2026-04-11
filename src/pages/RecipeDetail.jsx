import React, { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchRecipeById } from "../services/api";
import useFetch from "../hooks/useFetch";
import { ArrowLeft, Heart } from "lucide-react";

const RecipeDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchFunction = useCallback(() => fetchRecipeById(id), [id]);
  const { data, loading, error } = useFetch(fetchFunction);

  const handleBack = () => navigate("/");

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Error!</p>
      </div>
    );
  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Recipe not found</p>
      </div>
    );

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (data[`strIngredient${i}`]) {
      ingredients.push(
        `${data[`strIngredient${i}`]} ${data[`strMeasure${i}`]}`,
      );
    } else {
      break;
    }
  }

  const instructions =
    data.strInstructions
      ?.split(/\r?\n/)
      .map((s) => s.trim())
      .filter((s) => s.length > 10) ?? [];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors mb-6 cursor-pointer"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back</span>
        </button>

        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-96 w-full">
            <img
              src={data.strMealThumb}
              alt={data.strMeal}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Tags */}
            <div className="absolute bottom-20 left-6 flex gap-2">
              <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-md">
                {data.strCategory}
              </span>
              <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-md">
                {data.strArea}
              </span>
            </div>

            {/* Title */}
            <h1 className="absolute bottom-6 left-6 text-3xl font-bold text-white font-serif drop-shadow-md">
              {data.strMeal}
            </h1>

            {/* Save Button */}
            <button className="absolute bottom-6 right-4 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-all flex gap-2 items-center cursor-pointer">
              <Heart size={24} />
              <span>Save</span>
            </button>
          </div>
        </div>

        {/* Ingredients & Instructions Grid */}
        <div className="mx-auto max-w-6xl mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ingredients Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit">
            <h2 className="text-2xl font-bold font-serif text-gray-800 mb-6 pb-2 border-b border-orange-100">
              Ingredients
            </h2>
            <ul className="-space-y-3">
              {ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg"
                >
                  <div className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></div>
                  <span className="text-gray-700 font-medium capitalize">
                    {ingredient}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit">
            <h2 className="text-2xl font-bold font-serif text-gray-800 mb-6 pb-2 border-b border-orange-100">
              Instructions
            </h2>
            <ol className="space-y-4">
              {instructions.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
            {/* Youtube Link */}
            <a
              href={data.strYoutube}
              target="_blank"
              className="bg-orange-500 hover:bg-orange-600 rounded-2xl px-5 py-2 mt-5 font-bold text-white cursor-pointer inline-flex items-center justify-center transition-colors"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
