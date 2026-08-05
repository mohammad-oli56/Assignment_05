"use client";

import React from "react";
import CreateRequestModal from "./CreateRequestModal";

const SingleCard = ({ property, role }: any) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left */}
        <div>
          {/* Property Image */}
        </div>

        {/* Right */}
        <div className="space-y-5">
          <div>
            <h1 className="text-4xl font-bold">{property.title}</h1>

            <p className="text-gray-500 mt-2">
              {property.description}
            </p>
          </div>

          <h2 className="text-3xl font-bold text-green-600">
            ৳ {property.price.toLocaleString()}/month
          </h2>

          <div className="space-y-3 border rounded-xl p-5">
            <div className="flex justify-between">
              <span className="font-medium">Location</span>
              <span>{property.location}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Address</span>
              <span>{property.address}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Bedrooms</span>
              <span>{property.bedrooms}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Bathrooms</span>
              <span>{property.bathrooms}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Area</span>
              <span>{property.area} sq.ft</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Category</span>
              <span>{property.category.name}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Landlord</span>
              <span>{property.landlord.name}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Status</span>

              <span
                className={`font-semibold ${
                  property.isAvailable
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {property.isAvailable
                  ? "Available"
                  : "Not Available"}
              </span>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Amenities
            </h3>

            <div className="flex flex-wrap gap-3">
              {property.amenities.map(
                (item: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 rounded-full text-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {role === "TENANT" ? (
            <CreateRequestModal id={property.id} />
          ) : (
            <button
              disabled
              className="w-full py-3 rounded-xl bg-gray-400 text-white cursor-not-allowed"
            >
              You are not allowed
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCard;