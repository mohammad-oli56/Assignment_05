"use client";

import React from "react";

type IRequest = {
  id: string;
  tenantId: string;
  propertyId: string;
  moveInDate: string;
  message: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  createdAt: string;
  updatedAt: string;

  tenant: {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
  };

  property: {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    address: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    images: string[];
    amenities: string[];
    isAvailable: boolean;
    landlordId: string;
    categoryId: string;
    createdAt: string;
    updatedAt: string;

    category: {
      id: string;
      name: string;
    };

    landlord: {
      id: string;
      name: string;
      email: string;
    };
  };
};

type TRentalRequest = {
  rentalrequest: IRequest[];
};

const RentalRequestPage = ({ rentalrequest }: TRentalRequest) => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Rental Requests</h1>
          <p className="text-gray-500">
            Total Requests:
            <span className="ml-2 rounded bg-blue-100 px-2 py-1 font-semibold text-blue-700">
              {rentalrequest.length}
            </span>
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="px-4 py-3">Tenant</th>
              <th className="px-4 py-3">Property</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Move In</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Message</th>
            </tr>
          </thead>

          <tbody>
            {rentalrequest.map((request) => (
              <tr
                key={request.id}
                className="border-t transition hover:bg-gray-50"
              >
                <td className="px-4 py-4">
                  <p className="font-semibold">{request.tenant.name}</p>
                  <p className="text-sm text-gray-500">
                    {request.tenant.email}
                  </p>
                  <p className="text-sm text-gray-500">
                    {request.tenant.phoneNumber}
                  </p>
                </td>

                <td className="px-4 py-4">
                  <p className="font-semibold">{request.property.title}</p>
                  <p className="text-sm text-gray-500">
                    {request.property.location}
                  </p>
                </td>

                <td className="px-4 py-4 font-medium">
                  ৳ {request.property.price.toLocaleString()}
                </td>

                <td className="px-4 py-4">
                  {new Date(request.moveInDate).toLocaleDateString()}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      request.status === "APPROVED"
                        ? "bg-green-100 text-green-700"
                        : request.status === "REJECTED"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {request.status}
                  </span>
                </td>

                <td className="max-w-xs px-4 py-4 text-sm text-gray-600">
                  {request.message}
                </td>
              </tr>
            ))}

            {rentalrequest.length === 0 && (
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
  );
};

export default RentalRequestPage;