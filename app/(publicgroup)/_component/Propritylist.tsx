"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PropertyCard } from "./PropertyCard";

interface Property {
  id: string;
  title: string;
  location: string;
  address: string;
  description: string;
  price: number;
  images: string[];
}

interface PropertyListProps {
  data: Property[];
}

const ITEMS_PER_PAGE = 8;

const PropertyList = ({ data }: PropertyListProps) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("all");
  const [price, setPrice] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Get unique locations
  const locations = useMemo(() => {
    return [...new Set(data.map((item) => item.location))];
  }, [data]);

  // Filter properties
  const filteredProperties = useMemo(() => {
    return data.filter((item) => {
      const keyword = search.toLowerCase();

      const matchesSearch =
        !search ||
        item.title.toLowerCase().includes(keyword) ||
        item.location.toLowerCase().includes(keyword) ||
        item.address.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword);

      const matchesLocation =
        location === "all" || item.location === location;

      let matchesPrice = true;

      switch (price) {
        case "under10":
          matchesPrice = item.price < 10000;
          break;
        case "10-20":
          matchesPrice =
            item.price >= 10000 && item.price <= 20000;
          break;
        case "20-30":
          matchesPrice =
            item.price > 20000 && item.price <= 30000;
          break;
        case "30+":
          matchesPrice = item.price > 30000;
          break;
        default:
          matchesPrice = true;
      }

      return (
        matchesSearch &&
        matchesLocation &&
        matchesPrice
      );
    });
  }, [data, search, location, price]);

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search, location, price]);

  // Pagination
  const totalPages = Math.ceil(
    filteredProperties.length / ITEMS_PER_PAGE
  );

  const paginatedProperties = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProperties.slice(
      start,
      start + ITEMS_PER_PAGE
    );
  }, [filteredProperties, currentPage]);

  const clearFilters = () => {
    setSearch("");
    setLocation("all");
    setPrice("all");
    setCurrentPage(1);
  };

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-4">
          {/* Search */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search property..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full rounded-lg border py-2.5 pl-10 pr-4 outline-none focus:border-blue-500"
            />
          </div>

          {/* Location */}
          <select
            value={location}
            onChange={(e) =>
              setLocation(e.target.value)
            }
            className="rounded-lg border p-2.5 outline-none focus:border-blue-500"
          >
            <option value="all">
              All Locations
            </option>

            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          {/* Price */}
          <select
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
            className="rounded-lg border p-2.5 outline-none focus:border-blue-500"
          >
            <option value="all">
              All Prices
            </option>
            <option value="under10">
              Under ৳10,000
            </option>
            <option value="10-20">
              ৳10,000 - ৳20,000
            </option>
            <option value="20-30">
              ৳20,000 - ৳30,000
            </option>
            <option value="30+">
              Above ৳30,000
            </option>
          </select>

          {/* Clear */}
          <button
            onClick={clearFilters}
            className="rounded-lg bg-red-500 px-4 py-2.5 font-medium text-white hover:bg-red-600"
          >
            Clear Filters
          </button>
        </div>

        <p className="mt-5 text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold">
            {paginatedProperties.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold">
            {filteredProperties.length}
          </span>{" "}
          properties
        </p>
      </div>

      {/* Property Cards */}
      {filteredProperties.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {paginatedProperties.map(
              (property) => (
                <PropertyCard
                  key={property.id}
                  data={property}
                />
              )
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.max(prev - 1, 1)
                  )
                }
                disabled={currentPage === 1}
                className="rounded-lg border px-4 py-2 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>

              {Array.from(
                { length: totalPages },
                (_, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setCurrentPage(index + 1)
                    }
                    className={`h-10 w-10 rounded-lg border transition ${
                      currentPage ===
                      index + 1
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {index + 1}
                  </button>
                )
              )}

              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(
                      prev + 1,
                      totalPages
                    )
                  )
                }
                disabled={
                  currentPage === totalPages
                }
                className="rounded-lg border px-4 py-2 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-xl border border-dashed py-20 text-center">
          <Search
            size={50}
            className="mx-auto mb-4 text-gray-400"
          />

          <h2 className="text-2xl font-semibold">
            No Properties Found
          </h2>

          <p className="mt-2 text-gray-500">
            Try changing your search or
            filters.
          </p>
        </div>
      )}
    </div>
  );
};

export default PropertyList;