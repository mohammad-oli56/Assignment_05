import React from "react";
import { PropertyCard } from "../_component/PropertyCard";
import { getAllproperty } from "../_action/getAllProperty";
import { getMe } from "@/service/getMe";

const page = async () => {
  const data = await getAllproperty();


 

  return (
    <div className="grid pt-10 grid-cols-1 md:grid-cols-3 gap-4">
      {data.map((property: any, index: number) => (
        <PropertyCard key={index} data={property} />
      ))}
    </div>
  );
};

export default page;