"use client";

import React from "react";
import { Home, Building2, Clock3 } from "lucide-react";

type Request = {
  id: string;
  status: "PENDING";
};

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
  properties: TMyProperty[];
  requests: Request[];
  user: IUser;
};

const LandlordHome = ({
  properties = [],
  requests = [],
  user
}: Props) => {

   const userId = user?.data?.profile?.id;

    const myProperties = properties.filter(
    (property) => property.landlordId === userId
  );

  const pending = requests.filter(
    (item) => item.status === "PENDING"
  ).length;

  const cards = [
    {
      title: "My Properties",
      value: myProperties.length,
      color: "bg-blue-600",
      icon: <Building2 size={30} />,
    },
    {
      title: "Pending Requests",
      value: pending,
      color: "bg-yellow-500",
      icon: <Clock3 size={30} />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      {/* Header */}
      <div className="mb-10 flex items-center gap-3">
        <div className="bg-blue-600 p-3 rounded-xl text-white">
          <Home size={30} />
        </div>

        <div>
          <h1 className="text-3xl font-bold">Landlord Dashboard</h1>
          <p className="text-gray-500">
            Overview of your properties & rental requests
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className={`${card.color} p-5 flex justify-between items-center text-white rounded-t-2xl`}>
              <h2 className="font-semibold">{card.title}</h2>
              {card.icon}
            </div>

            <div className="p-6">
              <p className="text-5xl font-bold">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default LandlordHome;