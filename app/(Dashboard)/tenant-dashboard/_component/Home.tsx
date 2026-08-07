"use client";

import React from "react";
import {
  ClipboardList,
  Clock3,
  CheckCircle2,
  XCircle,
  CreditCard,
} from "lucide-react";

interface Request {
  id: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
}

interface Payment {
  id: string;
  status: "PENDING" | "COMPLETED" | "FAILED";
}

interface Props {
  requests: Request[];
  allhistory: Payment[];
}

const Home = ({ requests, allhistory }: Props) => {
  const totalRequests = requests.length;

  const pendingRequests = requests.filter(
    (item) => item.status === "PENDING"
  ).length;

  const approvedRequests = requests.filter(
    (item) => item.status === "APPROVED"
  ).length;

  const rejectedRequests = requests.filter(
    (item) => item.status === "REJECTED"
  ).length;

  const completedPayments = allhistory.filter(
    (item) => item.status === "COMPLETED"
  ).length;

  const cards = [
    {
      title: "Total Requests",
      count: totalRequests,
      color: "bg-blue-500",
      icon: ClipboardList,
    },
    {
      title: "Pending Requests",
      count: pendingRequests,
      color: "bg-yellow-500",
      icon: Clock3,
    },
    {
      title: "Approved Requests",
      count: approvedRequests,
      color: "bg-green-500",
      icon: CheckCircle2,
    },
    {
      title: "Rejected Requests",
      count: rejectedRequests,
      color: "bg-red-500",
      icon: XCircle,
    },
    {
      title: "Completed Payments",
      count: completedPayments,
      color: "bg-purple-500",
      icon: CreditCard,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">
         TENANT Dashboard
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {card.title}
                    </p>

                    <h2 className="mt-2 text-4xl font-bold text-gray-800">
                      {card.count}
                    </h2>
                  </div>

                  <div
                    className={`rounded-full p-4 text-white ${card.color}`}
                  >
                    <Icon size={28} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}

        <div className="mt-10 rounded-2xl bg-white p-6 shadow-md">
          <h2 className="mb-6 text-2xl font-semibold">
            Summary
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-green-200 bg-green-50 p-5">
              <p className="text-sm text-gray-600">
                Approved Requests
              </p>

              <p className="mt-2 text-3xl font-bold text-green-600">
                {approvedRequests}
              </p>
            </div>

            <div className="rounded-xl border border-purple-200 bg-purple-50 p-5">
              <p className="text-sm text-gray-600">
                Completed Payments
              </p>

              <p className="mt-2 text-3xl font-bold text-purple-600">
                {completedPayments}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;