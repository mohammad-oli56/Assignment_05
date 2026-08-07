"use client";

import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

const PaymentSuccessPage = () => {
  const router = useRouter();

  const handleRouter = () => {
    router.push("/tenant-dashboard/payment-history");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 to-gray-100 px-4">
      <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-2xl">
        {/* Success Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-14 w-14 text-green-600" />
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-3xl font-bold text-gray-800">
          Payment Successful 🎉
        </h1>

        {/* Description */}
        <p className="mt-3 text-gray-600">
          Your payment has been completed successfully.
          <br />
          Thank you for choosing our service.
        </p>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200" />

        {/* Status */}
        <div className="rounded-xl bg-green-50 p-4">
          <p className="text-sm font-medium text-green-700">
            ✔ Your rental payment has been confirmed.
          </p>
        </div>

        {/* Button */}
        <button
          onClick={handleRouter}
          className="mt-8 w-full rounded-xl bg-green-600 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-green-700"
        >
          Back to Payment History
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;