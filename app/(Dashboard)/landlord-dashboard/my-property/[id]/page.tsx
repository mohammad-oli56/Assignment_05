import React from "react";
import { getmysingleproperty } from "../../_action/getmysingleproperty";
import Link from "next/link";

type TParam = {
  params: Promise<{ id: string }>;
};

const Page = async ({ params }: TParam) => {
  const { id } = await params;

  const property = await getmysingleproperty(id);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Property Image */}
        <div className="h-[400px] bg-gray-200">
          <img
            src={property.images?.[0] || "/placeholder.jpg"}
            alt={property.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 space-y-8">
          {/* Header */}
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold">{property.title}</h1>
              <p className="text-gray-500 mt-2">
                {property.category.name} • {property.location}
              </p>
            </div>

            <div className="text-right">
              <h2 className="text-3xl font-bold text-blue-600">
                ৳ {property.price}
              </h2>

              <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                  property.isAvailable
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {property.isAvailable ? "Available" : "Unavailable"}
              </span>
            </div>
          </div>

          {/* Description */}
          <section>
            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
              Description
            </h2>

            <p className="text-gray-700 leading-7">
              {property.description}
            </p>
          </section>

          {/* Property Details */}
          <section>
            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
              Property Details
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-500 text-sm">Bedrooms</p>
                <h3 className="text-xl font-bold">{property.bedrooms}</h3>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-500 text-sm">Bathrooms</p>
                <h3 className="text-xl font-bold">{property.bathrooms}</h3>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-500 text-sm">Area</p>
                <h3 className="text-xl font-bold">{property.area} sqft</h3>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-500 text-sm">Category</p>
                <h3 className="text-xl font-bold">
                  {property.category.name}
                </h3>
              </div>
            </div>
          </section>

          {/* Location */}
          <section>
            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
              Location
            </h2>

            <p className="font-medium">{property.location}</p>
            <p className="text-gray-600">{property.address}</p>
          </section>

          {/* Amenities */}
          <section>
            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
              Amenities
            </h2>

            <div className="flex flex-wrap gap-3">
              {property.amenities.map((item: string) => (
                <span
                  key={item}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* Landlord */}
          <section>
            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
              Landlord Information
            </h2>

            <div className="bg-gray-50 rounded-xl p-5">
              <p className="text-gray-500">Owner</p>
              <h3 className="text-lg font-semibold">
                {property.landlord.name}
              </h3>
            </div>
          </section>

          {/* Property Info */}
          <section>
            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
              Property Information
            </h2>

            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Created:</strong>{" "}
                {new Date(property.createdAt).toLocaleDateString()}
              </p>

              <p>
                <strong>Last Updated:</strong>{" "}
                {new Date(property.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </section>

          {/* Buttons */}
          <div className="border-t pt-8">
            <div className="grid md:grid-cols-2 gap-5">
              <Link
                href={`/dashboard/properties/update/${property.id}`}
                className="bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-xl font-semibold transition"
              >
                ✏️ Update Property
              </Link>

              <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition">
                🗑 Delete Property
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;