import { Suspense } from 'react';
import Loading from '@/components/Loading';
import RecipesContent from '@/components/pages/RecipesContent';

export const dynamic = 'force-dynamic';
export const revalidate = 60;

const RecipesPage = async (
    props: { searchParams: Promise<Record<string, string | string[] | undefined>> }
) => {
    const searchParams = await props.searchParams;
    return (
        <Suspense fallback={<Loading />}>
            <RecipesContent searchParams={searchParams} />
        </Suspense>
    );
};
export default RecipesPage;
