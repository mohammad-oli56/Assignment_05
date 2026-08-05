"use client";

import React, { useState } from "react";
import { createpayment } from "../_action/createpaymetn";
import { useRouter } from "next/navigation";

type Props = {
  requests: any[];
};

const PaymetCreateCard = ({ requests }: Props) => {

  const router = useRouter()

  const approvedRequests =requests?.filter((item: any) => item.status === "APPROVED") || [];

  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

const handelPyment = async (id: string) => {
  try {
    const result = await createpayment(id);

    if (result.success && result.paymentUrl) {
  window.open(result.paymentUrl, "_blank", "noopener,noreferrer");
  router.push("/tenant-dashboard/payment-history");
  return;
}

    alert(result.message);
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Create Payment</h1>
        <p className="text-gray-500 mt-2">
          Complete payment for your approved rental requests.
        </p>
      </div>

      {message && (
        <div
          className={`mb-6 rounded-lg p-4 text-sm font-medium ${
            success
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {message}
        </div>
      )}

      {approvedRequests.length === 0 ? (
        <div className="rounded-xl border bg-white p-10 text-center shadow">
          <h2 className="text-xl font-semibold">
            No Approved Requests
          </h2>

          <p className="mt-2 text-gray-500">
            Once a landlord approves your request, it will appear here.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {approvedRequests.map((item: any) => (
            <div
              key={item.id}
              className="rounded-2xl border bg-white p-6 shadow-md"
            >
              <h2 className="text-xl font-bold">
                {item.property?.title}
              </h2>

              <p className="text-gray-500">
                {item.property?.location}
              </p>

              <p className="mt-2 font-semibold text-green-600">
                ৳ {item.property?.price?.toLocaleString()}
              </p>

              <button
                onClick={() => handelPyment(item.id)}
                disabled={loadingId === item.id}
                className="mt-5 w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                {loadingId === item.id
                  ? "Creating..."
                  : "Pay Now"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaymetCreateCard;