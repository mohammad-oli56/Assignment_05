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

        <div className="max-h-[calc(90vh-80px)] overflow-y-auto p-6">
               <form action={formAction} className="space-y-6">
          <input type="hidden" name="id" value={property.id} />

          <div className="grid gap-5 md:grid-cols-2">

            <div className="md:col-span-2">
              <label className="mb-2 block font-medium">
                Property Title
              </label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full rounded-lg border px-4 py-2 outline-none focus:border-green-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block font-medium">
                Description
              </label>
              <textarea
                rows={4}
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full rounded-lg border px-4 py-2 outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Monthly Rent
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full rounded-lg border px-4 py-2"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Area (sq.ft)
              </label>
              <input
                type="number"
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="w-full rounded-lg border px-4 py-2"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Bedrooms
              </label>
              <input
                type="number"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                className="w-full rounded-lg border px-4 py-2"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Bathrooms
              </label>
              <input
                type="number"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                className="w-full rounded-lg border px-4 py-2"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Location
              </label>
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full rounded-lg border px-4 py-2"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Address
              </label>
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full rounded-lg border px-4 py-2"
              />
            </div>

            <div className="md:col-span-2 flex items-center justify-between rounded-xl border bg-gray-50 p-4">
              <div>
                <h4 className="font-semibold">Availability</h4>
                <p className="text-sm text-gray-500">
                  Enable if the property is available for rent.
                </p>
              </div>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="isAvailable"
                  checked={formData.isAvailable}
                  onChange={handleChange}
                  className="h-5 w-5"
                />
                <span
                  className={`font-medium ${formData.isAvailable
                      ? "text-green-600"
                      : "text-red-500"
                    }`}
                >
                  {formData.isAvailable
                    ? "Available"
                    : "Unavailable"}
                </span>
              </label>
            </div>

          </div>

          {!state.success && state.message && (
            <p className="rounded-lg bg-red-50 p-3 text-red-600">
              {state.message}
            </p>
          )}

          <button
            disabled={pending}
            className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:opacity-50"
          >
            {pending ? "Updating..." : "Update Property"}
          </button>
             </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateModel;