"use client";

import { ArrowLeft, Calendar, CreditCard, DollarSign, FileText } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type PaymentProps = {
  payment: any;
};

const Paymentsingle = ({ payment }: PaymentProps) => {
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <h1 className="text-3xl font-bold">Payment Details</h1>
      </div>

      {/* Status Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Payment Information
            </h2>

            <div
              className={`inline-flex px-4 py-2 rounded-full font-semibold text-sm ${
                payment.status === "COMPLETED"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {payment.status}
            </div>
          </div>

          <div className="text-right">
            <p className="text-gray-500">Amount</p>
            <h2 className="text-4xl font-bold text-green-600">
              ৳ {payment.amount}
            </h2>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Payment */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">
            Payment Info
          </h2>

          <div className="space-y-5">
            <div className="flex gap-3">
              <CreditCard className="text-blue-600" />
              <div>
                <p className="text-gray-500 text-sm">
                  Transaction ID
                </p>
                <p className="font-medium break-all">
                  {payment.transactionId}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <DollarSign className="text-green-600" />
              <div>
                <p className="text-gray-500 text-sm">Provider</p>
                <p className="font-medium">
                  {payment.provider}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Calendar className="text-purple-600" />
              <div>
                <p className="text-gray-500 text-sm">Paid At</p>
                <p className="font-medium">
                  {new Date(payment.paidAt).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Calendar className="text-orange-600" />
              <div>
                <p className="text-gray-500 text-sm">
                  Created At
                </p>
                <p className="font-medium">
                  {new Date(payment.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rental Request */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">
            Rental Request
          </h2>

          <div className="space-y-5">
            <div>
              <p className="text-gray-500 text-sm">
                Request ID
              </p>
              <p className="font-medium break-all">
                {payment.rentalRequest.id}
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">
                Tenant ID
              </p>
              <p className="font-medium break-all">
                {payment.rentalRequest.tenantId}
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">
                Property ID
              </p>
              <p className="font-medium break-all">
                {payment.rentalRequest.propertyId}
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">
                Request Status
              </p>

              <span className="inline-flex mt-1 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                {payment.rentalRequest.status}
              </span>
            </div>

            <div>
              <p className="text-gray-500 text-sm">
                Move In Date
              </p>

              <p className="font-medium">
                {new Date(
                  payment.rentalRequest.moveInDate
                ).toLocaleDateString()}
              </p>
            </div>

            <div className="flex gap-3">
              <FileText className="text-gray-500 mt-1" />

              <div>
                <p className="text-gray-500 text-sm">
                  Message
                </p>

                <p className="font-medium">
                  {payment.rentalRequest.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paymentsingle;