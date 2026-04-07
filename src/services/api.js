const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Get some random recipe
export async function fetchRecipes(count = 8) {
  const promises = [];

  for (let i = 0; i < count; i++) {
    const promise = fetch(`${BASE_URL}/random.php`).then((response) =>
      response.json(),
    );

    promises.push(promise);
  }

  const results = await Promise.all(promises);

  return results
  .map((result) => result.meals?.[0])
  .filter((meal) => meal !== null && meal !== undefined);
}

// Search by name
export const searchRecipes = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search.php?s=${query}`);

    if (!response.ok) {
      throw new Error("Recipe not found");
    }

    const data = await response.json();
    return data.meals ?? [];
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

// Search by id
export const fetchRecipeById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);

    if (!response.ok) {
      throw new Error("Recipe not found");
    }

    const data = await response.json();
    return data.meals?.[0] ?? null;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

// Search by category
export const fetchByCategory = async (category) => {
  try {
    const response = await fetch(`${BASE_URL}/filter.php?c=${category}`);

    if (!response.ok) {
      throw new Error("Category not found");
    }

    const data = await response.json();
    return data.meals ?? [];
  } catch (error) {
    console.error(error.message);
    return null;
  }
};
