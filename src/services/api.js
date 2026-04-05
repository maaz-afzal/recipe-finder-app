const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchRecipes = async () => {
  try {
    const res = await fetch(`${BASE_URL}/random.php`);

    if (!res.ok) {
      throw new Error("Failed to fetch recipe");
    }

    const data = await res.json();
    return data.meals?.[0];

  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
};
