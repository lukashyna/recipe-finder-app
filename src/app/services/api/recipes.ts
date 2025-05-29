const BASE_URL = "https://api.spoonacular.com";

const headers = {
  "x-api-key": process.env.SPOONACULAR_API_KEY!,
};
interface Ingredient {
    original: string;
  }

interface Recipe {
    id: number;
    title: string;
    image: string;
    extendedIngredients: Ingredient[];
    readyInMinutes: number;
    cookingMinutes: number;
    preparationMinutes: number;
    servings: number;
    pricePerServing: number;
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    healthScore: number;
  }

export const fetchRecipeById = async (id: string): Promise<Recipe> => {
  try {
    const res = await fetch(`${BASE_URL}/recipes/${id}/information`, {
      headers,
      next: { revalidate: 60 } 
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch recipe with id ${id}`);
    }

    return await res.json();
  } catch (error) {
    console.error(`Error fetching recipe ${id}:`, error);
    throw error;
  }
};

export const fetchRecipes = async (params: {
  query?: string;
  cuisine?: string;
  time?: string;
}): Promise<Recipe[]> => {
  try {
    const searchParams = new URLSearchParams({
      ...(params.query && { query: params.query }),
      ...(params.cuisine && { cuisine: params.cuisine }),
      ...(params.time && { maxReadyTime: params.time }),
      number: "12",
    });

    const res = await fetch(
      `${BASE_URL}/recipes/complexSearch?${searchParams.toString()}`,
      {
        headers,
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch recipes: ${res.status}`);
    }

    const data = await res.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};