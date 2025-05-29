import { Suspense } from 'react';
import Loading from '@/components/Loading';
import RecipesContent from '@/components/pages/RecipesContent';

export const dynamic = 'force-dynamic';
export const revalidate = 60;

const RecipesPage = ({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) => {
    return (
        <Suspense fallback={<Loading />}>
            <RecipesContent searchParams={searchParams} />
        </Suspense>
    );
};
export default RecipesPage;
