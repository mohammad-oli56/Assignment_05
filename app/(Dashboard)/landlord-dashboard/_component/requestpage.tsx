"use client";

import React, { useTransition } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { handelstatusfromaction } from "../_action/handelstatus";

type TRequest = {
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
  };
};

type Props = {
  request?: TRequest[];
};

const Requestpage = ({ request = [] }: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handelstatus = async (id: string) => {
    try {
      const result = await handelstatusfromaction(id);

      if (result.success) {
        toast.success(result.message || "Status Updated Successfully");

        startTransition(() => {
          router.refresh();
        });
      } else {
        toast.error(result.message || "Failed to update status");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  if (request.length === 0) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow p-10 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            No Rental Requests
          </h2>
          <p className="mt-2 text-gray-500">
            You don't have any rental requests right now.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Rental Requests : {request.length}
      </h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left">Tenant</th>
              <th className="px-6 py-3 text-left">Property</th>
              <th className="px-6 py-3 text-left">Move In</th>
              <th className="px-6 py-3 text-left">Message</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {request.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">
                  <p className="font-semibold">{item.tenant.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.tenant.email}
                  </p>
                </td>

                <td className="px-6 py-4">{item.property.title}</td>

                <td className="px-6 py-4">
                  {new Date(item.moveInDate).toLocaleDateString()}
                </td>

                <td className="px-6 py-4 max-w-xs truncate">
                  {item.message}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === "APPROVED"
                        ? "bg-green-100 text-green-700"
                        : item.status === "REJECTED"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-center">
                  <button
                    disabled={isPending}
                    onClick={() => handelstatus(item.id)}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg"
                  >
                    {isPending ? "Updating..." : "Change Status"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Requestpage;