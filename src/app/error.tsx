'use client';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-lg bg-red-50 p-4">
            <h2 className="mb-3 text-xl font-bold text-red-600">Oops! Recipe not found</h2>
            <p className="mb-4 text-red-500">{error.message}</p>
            <button
                onClick={() => reset()}
                className="rounded bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
            >
                Try again
            </button>
        </div>
    );
}
