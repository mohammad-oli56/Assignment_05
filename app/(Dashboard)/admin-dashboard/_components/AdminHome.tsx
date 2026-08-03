"use client";

import React from "react";
import {
  Users,
  Home,
  FolderTree,
  FileText,
} from "lucide-react";

interface Props {
  totalUsers: number;
  totalRequests: number;
  totalCategories: number;
  totalProperties: number;
}

const stats = (
  totalUsers: number,
  totalRequests: number,
  totalCategories: number,
  totalProperties: number
) => [
  {
    title: "Total Users",
    value: totalUsers,
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Properties",
    value: totalProperties,
    icon: Home,
    color: "bg-green-500",
  },
  {
    title: "Categories",
    value: totalCategories,
    icon: FolderTree,
    color: "bg-yellow-500",
  },
  {
    title: "Rental Requests",
    value: totalRequests,
    icon: FileText,
    color: "bg-purple-500",
  },
];

const AdminHome = ({
  totalUsers,
  totalRequests,
  totalCategories,
  totalProperties,
}: Props) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">
        Admin Dashboard
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats(
          totalUsers,
          totalRequests,
          totalCategories,
          totalProperties
        ).map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{item.title}</p>

                  <h2 className="mt-2 text-4xl font-bold text-gray-800">
                    {item.value}
                  </h2>
                </div>

                <div
                  className={`${item.color} flex h-14 w-14 items-center justify-center rounded-xl text-white`}
                >
                  <Icon size={28} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminHome;