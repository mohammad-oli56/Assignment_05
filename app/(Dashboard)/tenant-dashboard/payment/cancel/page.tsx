"use client";

import { XCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const PaymentCancelPage = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 to-gray-100 px-4">
      <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-2xl">
        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
          <XCircle className="h-14 w-14 text-red-600" />
        </div>

        {/* Title */}
        <h1 className="mt-6 text-3xl font-bold text-gray-800">
          Payment Cancelled
        </h1>

        {/* Description */}
        <p className="mt-3 text-gray-600">
          Your payment was cancelled before it was completed.
          <br />
          No amount has been charged to your account.
        </p>

        {/* Status */}
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="text-sm font-medium text-red-700">
            ❌ Payment was not completed.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-3">
          <button
            onClick={() =>
              router.push("/tenant-dashboard")
            }
            className="flex-1 rounded-xl border border-gray-300 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            back home
          </button>

          <button
            onClick={() =>
              router.push("/property")
            }
            className="flex-1 rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Browse Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelPage;