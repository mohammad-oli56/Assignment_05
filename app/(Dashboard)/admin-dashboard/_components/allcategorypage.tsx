"use client";

import React from "react";

type TCategory = {
  id: string;
  name: string;
  description: string;
};

type TProps = {
  categories: TCategory[];
};

const Allcategorypage = ({ categories }: TProps) => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Categories</h1>
          <p className="text-gray-500">
            Total Categories:{" "}
            <span className="font-semibold">{categories.length}</span>
          </p>
        </div>

        <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700">
          Create Category
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="border-b p-3 text-left">#</th>
              <th className="border-b p-3 text-left">Name</th>
              <th className="border-b p-3 text-left">Description</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((cat, index) => (
              <tr key={cat.id} className="hover:bg-gray-50">
                <td className="border-b p-3">{index + 1}</td>
                <td className="border-b p-3 font-medium">{cat.name}</td>
                <td className="border-b p-3">{cat.description}</td>
              </tr>
            ))}

            {categories.length === 0 && (
              <tr>
                <td
                  colSpan={3}
                  className="p-6 text-center text-gray-500"
                >
                  No categories found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allcategorypage;