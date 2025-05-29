'use client';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return (
        <html>
            <body>
                <div className="flex min-h-screen flex-col items-center justify-center bg-red-50 p-4">
                    <h2 className="mb-4 text-2xl font-bold text-red-600">Something went wrong!</h2>
                    <p className="mb-6 text-red-500">{error.message}</p>
                    <button
                        onClick={() => reset()}
                        className="rounded bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    );
}
