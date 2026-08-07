"use client";

import { PropertyCard } from "@/app/(publicgroup)/_component/PropertyCard";

interface Property {
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
}

interface Props {
  data: Property[];
}

const Showallpropertyadmin = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {data.map((property) => (
        <PropertyCard
          key={property.id}
          data={property}
        />
      ))}
    </div>
  );
};

export default Showallpropertyadmin;