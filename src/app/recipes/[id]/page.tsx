import { Suspense } from 'react';
import Loading from '@/components/Loading';
import RecipeContent from '@/components/pages/RecipeContent';

interface PageWrapperProps {
    params: Promise<{
        id: string;
    }>;
}

const PageWrapper = async (props: PageWrapperProps) => {
    const params = await props.params;
    return (
        <Suspense fallback={<Loading />}>
            <RecipeContent params={params} />
        </Suspense>
    );
};

export default PageWrapper;
