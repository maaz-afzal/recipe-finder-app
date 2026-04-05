const url = "https://www.themealdb.com/api/json/v1/1/random.php";

export const fetchRecipes = async () => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch data");
  
  const data = await res.json();
  return data.meals[0];
};
