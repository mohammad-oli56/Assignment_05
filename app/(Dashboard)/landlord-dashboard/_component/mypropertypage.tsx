"use client";

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

type Props = {
  myproperty: TMyProperty[];
};

const Mypropertypage = ({ myproperty }: Props) => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Properties</h1>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Location</th>
              <th className="px-4 py-3 text-left">Bedrooms</th>
              <th className="px-4 py-3 text-left">Bathrooms</th>
              <th className="px-4 py-3 text-left">Area</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {myproperty.length > 0 ? (
              myproperty.map((property) => (
                <tr key={property.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3">{property.title}</td>
                  <td className="px-4 py-3">{property.category.name}</td>
                  <td className="px-4 py-3">${property.price}</td>
                  <td className="px-4 py-3">{property.location}</td>
                  <td className="px-4 py-3">{property.bedrooms}</td>
                  <td className="px-4 py-3">{property.bathrooms}</td>
                  <td className="px-4 py-3">{property.area} sqft</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded text-sm font-medium ${
                        property.isAvailable
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {property.isAvailable ? "Available" : "Unavailable"}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex gap-2 justify-center">
                      <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Update
                      </button>

                      <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={9}
                  className="text-center py-8 text-gray-500"
                >
                  No properties found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mypropertypage;