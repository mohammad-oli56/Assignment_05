"use client";

import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 to-gray-100 px-4">
      <div className="w-full max-w-lg rounded-3xl border border-red-100 bg-white p-10 text-center shadow-2xl">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
          <AlertTriangle className="h-12 w-12 text-red-600" />
        </div>

        <h1 className="mt-6 text-3xl font-bold text-gray-800">
          Oops! Something went wrong
        </h1>

        <p className="mt-3 text-gray-600">
          We couldn't complete your request.
          <br />
          Please try again or return to the home page.
        </p>

        {process.env.NODE_ENV === "development" && (
          <div className="mt-6 rounded-xl bg-gray-100 p-4 text-left">
            <p className="text-sm font-semibold text-red-600">
              Error
            </p>

            <p className="mt-2 break-words text-sm text-gray-700">
              {error.message}
            </p>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => reset()}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <RefreshCcw size={18} />
            Try Again
          </button>

          <button
            onClick={() => router.push("/")}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-300 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            <Home size={18} />
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}