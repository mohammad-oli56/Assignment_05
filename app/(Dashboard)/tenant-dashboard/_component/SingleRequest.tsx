"use client";

import React from "react";

type Props = {
  request: any;
};

const SingleRequest = ({ request }: Props) => {
  const { property } = request;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow p-6">
        <h1 className="text-3xl font-bold">{property.title}</h1>
        <p className="text-gray-500 mt-2">{property.description}</p>

        <div className="mt-4 flex flex-wrap gap-3">
          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700">
            {request.status}
          </span>

          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700">
            ${property.price}
          </span>

          <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700">
            {property.category.name}
          </span>
        </div>
      </div>

      {/* Property Image */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Property Details */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Property Information
          </h2>

          <div className="space-y-3">
            <p>
              <strong>Location:</strong> {property.location}
            </p>

            <p>
              <strong>Address:</strong> {property.address}
            </p>

            <p>
              <strong>Bedrooms:</strong> {property.bedrooms}
            </p>

            <p>
              <strong>Bathrooms:</strong> {property.bathrooms}
            </p>

            <p>
              <strong>Area:</strong> {property.area} sqft
            </p>

            <p>
              <strong>Available:</strong>{" "}
              {property.isAvailable ? "Yes" : "No"}
            </p>

            <p>
              <strong>Category:</strong> {property.category.name}
            </p>
          </div>
        </div>

        {/* Request Details */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Rental Request
          </h2>

          <div className="space-y-3">
            <p>
              <strong>Status:</strong> {request.status}
            </p>

            <p>
              <strong>Move In Date:</strong>{" "}
              {new Date(request.moveInDate).toLocaleDateString()}
            </p>

            <p>
              <strong>Message:</strong>
            </p>

            <div className="border rounded-lg p-4 bg-gray-50">
              {request.message}
            </div>

            <p>
              <strong>Requested At:</strong>{" "}
              {new Date(request.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Landlord */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-5">
          Landlord Information
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          <div>
            <p className="text-gray-500 text-sm">Name</p>
            <p className="font-semibold">
              {property.landlord.name}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Email</p>
            <p className="font-semibold">
              {property.landlord.email}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Phone</p>
            <p className="font-semibold">
              {property.landlord.phoneNumber}
            </p>
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Amenities
        </h2>

        <div className="flex flex-wrap gap-3">
          {property.amenities.map(
            (item: string, index: number) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleRequest;