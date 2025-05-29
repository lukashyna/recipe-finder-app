import Link from 'next/link';
import Title from '@/components/Title';

const NotFound = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
            <Title text="Oops! Cannot find page" />
            <Link href="/" className="`w-full rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">
                Go back home
            </Link>
        </div>
    );
};

export default NotFound;
