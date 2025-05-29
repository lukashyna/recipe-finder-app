import Link from 'next/link';
import RecipeCard from '@/components/RecipeCard';
import Title from '@/components/Title';
import { fetchRecipes } from '@/app/services/api/recipes';

async function RecipesContent({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
    const query = Array.isArray(searchParams.query) ? searchParams.query[0] : searchParams.query;

    const cuisine = Array.isArray(searchParams.cuisine) ? searchParams.cuisine[0] : searchParams.cuisine;

    const time = Array.isArray(searchParams.time) ? searchParams.time[0] : searchParams.time;

    const recipes = await fetchRecipes({ query, cuisine, time });

    if (!recipes || recipes.length === 0) {
        return (
            <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center bg-gray-50 p-6">
                <Title text="Recipes" />
                <p className="text-lg text-gray-600">No recipes found. Try different search criteria.</p>
                <Link href="/" className="`w-full mt-8 rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">
                    To start
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-[calc(100vh-64px)] bg-gray-50 p-6">
            <Title text="Recipes" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} id={recipe.id} image={recipe.image} title={recipe.title} />
                ))}
            </div>
        </div>
    );
}

export default RecipesContent;
