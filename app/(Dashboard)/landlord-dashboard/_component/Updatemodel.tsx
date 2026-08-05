"use client";

import React, { useActionState, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { updatePropertyAction } from "../_action/update";
import { useRouter } from "next/navigation";




export type TProperty = {
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
};

type Props = {
  property: TProperty;
};

const initialState = {
  success: false,
  message: "",
};

const UpdateModel = ({ property }: Props) => {

    const routet = useRouter()

  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: property.title,
    description: property.description,
    price: property.price,
    location: property.location,
    address: property.address,
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    area: property.area,
    isAvailable: property.isAvailable,
  });

  const [state, formAction, pending] = useActionState(
    updatePropertyAction,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      routet.push("/landlord-dashboard/my-property")
      setOpen(false);
    }
  }, [state]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;

      setFormData((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]:
          ["price", "bedrooms", "bathrooms", "area"].includes(name)
            ? Number(value)
            : value,
      }));
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="bg-blue-600 text-white px-5 py-2 rounded-lg">
        Update
      </DialogTrigger>

      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Update Property</DialogTitle>
        </DialogHeader>

        <form action={formAction} className="space-y-4">

          <input type="hidden" name="id" value={property.id} />

          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />


        

          {!state.success && (
            <p className="text-red-500">{state.message}</p>
          )}

          <button
            disabled={pending}
            className="w-full bg-green-600 text-white py-2 rounded"
          >
            {pending ? "Updating..." : "Update Property"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateModel;