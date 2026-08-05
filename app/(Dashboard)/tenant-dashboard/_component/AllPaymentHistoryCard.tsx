"use client";

import Link from "next/link";
import React from "react";

type Props = {
  payments: any[];
};

const AllPaymentHistoryCard = ({ payments }: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Payment History
        </h1>

        <p className="mt-2 text-gray-500">
          View all your payment transactions.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">#</th>
                <th className="px-6 py-4 text-left">Transaction ID</th>
                <th className="px-6 py-4 text-left">Amount</th>
                <th className="px-6 py-4 text-left">Provider</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Created</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {payments?.length > 0 ? (
                payments.map((payment: any, index: number) => (
                  <tr
                    key={payment.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4">{index + 1}</td>

                    <td className="px-6 py-4 font-medium">
                      {payment.transactionId?.slice(0, 12)}...
                    </td>

                    <td className="px-6 py-4 font-semibold text-green-600">
                      ৳ {payment.amount.toLocaleString()}
                    </td>

                    <td className="px-6 py-4">
                      {payment.provider}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold
                          ${
                            payment.status === "COMPLETED"
                              ? "bg-green-100 text-green-700"
                              : payment.status === "FAILED"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                      >
                        {payment.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      {new Date(payment.createdAt).toLocaleDateString()}
                    </td>

                    <td className="px-6 py-4 text-center">
                      <Link
                        href={`/tenant-dashboard/payment-history/${payment.id}`}
                        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="py-10 text-center text-gray-500"
                  >
                    No payment history found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllPaymentHistoryCard;