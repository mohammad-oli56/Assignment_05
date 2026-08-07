"use client";

import React, { useState } from "react";
import { createpayment } from "../_action/createpaymetn";

type Props = {
  requests: any[];
};

const PaymetCreateCard = ({ requests }: Props) => {
  const approvedRequests =
    requests?.filter(
      (item: any) => item.status === "APPROVED"
    ) || [];

  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handelPyment = async (id: string) => {
    try {
      setLoadingId(id);
      setMessage("");

      const result = await createpayment(id);

      if (result.success && result.paymentUrl) {
        setSuccess(true);
        setMessage(result.message);

        window.location.assign(result.paymentUrl);
        return;
      }

      setSuccess(false);
      setMessage(result.message || "Payment failed.");
    } catch (error) {
      console.error(error);

      setSuccess(false);
      setMessage("Something went wrong.");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="mb-2 text-3xl font-bold">
        Create Payment
      </h1>

      <p className="mb-8 text-gray-500">
        Complete payment for your approved rental requests.
      </p>

      {message && (
        <div
          className={`mb-6 rounded-lg border p-4 text-sm font-medium ${
            success
              ? "border-green-300 bg-green-100 text-green-700"
              : "border-red-300 bg-red-100 text-red-700"
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
              className="rounded-2xl border bg-white p-6 shadow-md transition hover:shadow-lg"
            >
              <h2 className="text-xl font-bold">
                {item.property?.title}
              </h2>

              <p className="mt-1 text-gray-500">
                {item.property?.location}
              </p>

              <p className="mt-3 text-2xl font-bold text-green-600">
                ৳{" "}
                {item.property?.price?.toLocaleString()}
              </p>

              <button
                onClick={() =>
                  handelPyment(item.id)
                }
                disabled={loadingId === item.id}
                className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                {loadingId === item.id
                  ? "Creating Payment..."
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