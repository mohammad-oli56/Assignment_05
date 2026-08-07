export default function Loading() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
        <div className="flex flex-col items-center">
          {/* Spinner */}
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />

          <h2 className="mt-6 text-2xl font-bold text-gray-800">
            Loading...
          </h2>

          <p className="mt-2 text-center text-gray-500">
            Please wait while we fetch your data.
          </p>

          {/* Skeleton */}
          <div className="mt-8 w-full space-y-4">
            <div className="h-4 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-4/6 animate-pulse rounded bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}