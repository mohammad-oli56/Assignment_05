"use client";

import Link from "next/link";
import React from "react";

type TMyProperty = {
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
    description: string;
    createdAt: string;
    updatedAt: string;
  };

  landlord: {
    id: string;
    name: string;
  };
};

type IUser = {
  success: boolean;
  message?: string;
  statuscode?: number;
  data?: {
    profile: {
      id: string;
      name: string;
      email: string;
      phoneNumber: string;
      profileImage: string | null;
      role: "ADMIN" | "LANDLORD" | "TENANT";
      status: "ACTIVE" | "INACTIVE";
      createdAt: string;
      updatedAt: string;
    };
  };
};

type Props = {
  myproperty: TMyProperty[];
  user: IUser;
};

const Mypropertypage = ({ myproperty, user }: Props) => {
  const userId = user?.data?.profile?.id;

  const myProperties = myproperty.filter(
    (property) => property.landlordId === userId
  );

  

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left">Title</th>
            <th className="px-6 py-3 text-left">Description</th>
            <th className="px-6 py-3 text-left">Status</th>
            <th className="px-6 py-3 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {myProperties.length > 0 ? (
            myProperties.map((property) => (
              <tr
                key={property.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium">
                  {property.title}
                </td>

                <td className="px-6 py-4 max-w-sm truncate">
                  {property.description}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      property.isAvailable
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {property.isAvailable
                      ? "Available"
                      : "Unavailable"}
                  </span>
                </td>

                <td className="px-6 py-4 text-center">
                  <Link
                    href={`/landlord-dashboard/my-property/${property.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={4}
                className="text-center py-8 text-gray-500"
              >
                No properties found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Mypropertypage;