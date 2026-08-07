"use client";

import React from "react";
import CreateRequestModal from "./CreateRequestModal";
import Link from "next/link";

const SingleCard = ({ property, role,isLoggedIn  }: any) => {
  const getImage = () => {
    const img = property?.images?.[0];

    if (!img) {
      return "https://avatar.vercel.sh/property";
    }

    // Plain URL
    if (img.startsWith("http")) {
      return img;
    }

    // Markdown URL
    const markdown = img.match(/\((.*?)\)/);
    if (markdown?.[1]) {
      return markdown[1];
    }

    // Invalid URL
    return "https://avatar.vercel.sh/property";
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left */}
        <div>
          <img
            src={getImage()}
            alt={property.title}
            className="h-[500px] w-full rounded-2xl object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "https://avatar.vercel.sh/property";
            }}
          />
        </div>

        {/* Right */}
        <div className="space-y-5">
          <div>
            <h1 className="text-4xl font-bold">
              {property.title}
            </h1>

            <p className="mt-2 text-gray-500">
              {property.description}
            </p>
          </div>

          <h2 className="text-3xl font-bold text-green-600">
            ৳ {property.price.toLocaleString()}/month
          </h2>

          <div className="space-y-3 rounded-xl border p-5">
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
              <span>{property.category?.name}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Landlord</span>
              <span>{property.landlord?.name}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Status</span>

              <span
                className={
                  property.isAvailable
                    ? "font-semibold text-green-600"
                    : "font-semibold text-red-600"
                }
              >
                {property.isAvailable
                  ? "Available"
                  : "Not Available"}
              </span>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="mb-3 text-xl font-semibold">
              Amenities
            </h3>

            <div className="flex flex-wrap gap-3">
              {property.amenities?.map(
                (item: string, index: number) => (
                  <span
                    key={index}
                    className="rounded-full bg-gray-100 px-4 py-2 text-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {isLoggedIn ? (
        role === "TENANT" ? (
          <CreateRequestModal id={property.id} />
        ) : (
          <button
            disabled
            className="w-full cursor-not-allowed rounded-xl bg-gray-400 py-3 text-white"
          >
            You are not allowed
          </button>
        )
      ) : (
        <Link href="/login">
          <button className="w-full rounded-xl bg-blue-600 py-3 text-white">
            Login to Request
          </button>
        </Link>
      )}
        </div>
      </div>
    </div>
  );
};

export default SingleCard;