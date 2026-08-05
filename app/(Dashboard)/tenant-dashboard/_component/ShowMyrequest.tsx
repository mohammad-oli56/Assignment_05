"use client";

import Link from "next/link";
import React from "react";

type Props = {
  requests: any[];
};

const ShowMyrequest = ({ requests }: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Rental Requests</h1>
        <p className="text-gray-500 mt-2">
          View all of your submitted rental requests.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-xl overflow-hidden border">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">#</th>
                <th className="px-6 py-4 text-left">Property</th>
                <th className="px-6 py-4 text-left">Move In Date</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Requested At</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {requests?.length > 0 ? (
                requests.map((item: any, index: number) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4">{index + 1}</td>

                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold">
                          {item.property?.title}
                        </p>

                        <p className="text-xs text-gray-500">
                          {item.property?.location}
                        </p>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      {new Date(
                        item.moveInDate
                      ).toLocaleDateString()}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold
                          ${
                            item.status === "PENDING"
                              ? "bg-yellow-100 text-yellow-700"
                              : item.status === "APPROVED"
                              ? "bg-green-100 text-green-700"
                              : item.status === "REJECTED"
                              ? "bg-red-100 text-red-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      {new Date(
                        item.createdAt
                      ).toLocaleDateString()}
                    </td>

                    <td className="px-6 py-4 text-center">
                      <Link
                        href={`/tenant-dashboard/my-request/${item.id}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="py-10 text-center text-gray-500"
                  >
                    No rental requests found.
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

export default ShowMyrequest;