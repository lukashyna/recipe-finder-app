import Image from 'next/image';
import Title from '@/components/Title';
import RecipeDetailItem from '@/components/RecipeDetailItem';
import { fetchRecipeById } from '@/app/services/api/recipes';

const RecipeContent = async ({ params }: { params: { id: string } }) => {
    if (!params?.id) return <div>Recipe ID not provided</div>;

    const recipe = await fetchRecipeById(params.id);

    return (
        <div className="mx-auto max-w-4xl space-y-6 p-6 text-gray-800">
            <Title text={recipe.title} />

            {/* IMAGE */}
            <div className="relative h-96 w-full overflow-hidden rounded-lg">
                <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* META DATA */}
            <div className="grid gap-6 text-sm md:grid-cols-2">
                <div className="space-y-2">
                    <RecipeDetailItem label="Servings" value={recipe.servings} />
                    <RecipeDetailItem label="Ready in" value={`${recipe.readyInMinutes} min`} />
                    <RecipeDetailItem label="Preparation" value={`${recipe.preparationMinutes} min`} />
                    <RecipeDetailItem label="Cook" value={`${recipe.cookingMinutes} min`} />
                    <RecipeDetailItem label="Price/Serving" value={`$${(recipe.pricePerServing / 100).toFixed(2)}`} />
                </div>

                {/* DIET INFO */}
                <div className="space-y-2">
                    <RecipeDetailItem label="Vegetarian" value={recipe.vegetarian ? 'Yes' : 'No'} />
                    <RecipeDetailItem label="Vegan" value={recipe.vegan ? 'Yes' : 'No'} />
                    <RecipeDetailItem label="Gluten Free" value={recipe.glutenFree ? 'Yes' : 'No'} />
                    <RecipeDetailItem label="Dairy Free" value={recipe.dairyFree ? 'Yes' : 'No'} />
                    <RecipeDetailItem label="Health Score" value={recipe.healthScore} />
                </div>
            </div>

            {/* INGREDIENTS */}
            {recipe.extendedIngredients?.length > 0 && (
                <div>
                    <h2 className="mb-2 text-xl font-semibold">Ingredients</h2>
                    <ul className="list-inside list-disc space-y-1">
                        {recipe.extendedIngredients.map((ing: { original: string }, i: number) => (
                            <li key={i}>{ing.original}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default RecipeContent;
