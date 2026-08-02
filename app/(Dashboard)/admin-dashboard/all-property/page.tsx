import { getAllproperty } from '@/app/(publicgroup)/_action/getAllProperty';
import { PropertyCard } from '@/app/(publicgroup)/_component/PropertyCard';
import React from 'react'

const page = async() => {
   const data = await getAllproperty();
  return (
     <div className="grid pt-10 grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((property: any, index: number) => (
            <PropertyCard key={index} data={property} />
          ))}
        </div>
  )
}

export default page
