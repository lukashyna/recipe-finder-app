import Image from 'next/image';
import Link from 'next/link';

interface RecipeCardProps {
    id: number;
    image: string;
    title: string;
}

export default function RecipeCard({ id, image, title }: RecipeCardProps) {
    return (
        <Link href={`/recipes/${id}`} passHref>
            <div className="flex h-full flex-col rounded-lg bg-white p-4 shadow transition hover:shadow-lg">
                <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded">
                    <Image
                        src={image || '../app/assets/img/placeholder.jpg'}
                        alt={title}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                </div>
                <h3 className="mt-auto line-clamp-2 text-lg font-medium">{title}</h3>
            </div>
        </Link>
    );
}
