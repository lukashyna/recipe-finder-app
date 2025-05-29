import { Suspense } from 'react';
import Loading from '@/components/Loading';
import RecipeContent from '@/components/pages/RecipeContent';

interface PageWrapperProps {
    params: {
        id: string;
    };
}

const PageWrapper = ({ params }: PageWrapperProps) => {
    return (
        <Suspense fallback={<Loading />}>
            <RecipeContent params={params} />
        </Suspense>
    );
};

export default PageWrapper;
