"use client"

import React, { useActionState, useEffect } from "react";
import { createproperty, FormState } from "../_action/createproperty";
import { useRouter } from "next/navigation";


type TCategory = {
    id: string,
    name: string,
    description: string
}

type Tcategory = {
    category: TCategory[]
}

const initialState: FormState = {
    success: false,
    message: '',
}


const PropertycreateFrom = ({ category }: Tcategory) => {

    const router = useRouter()

    const [state, formAction, isPending] = useActionState(createproperty, initialState);

     useEffect(() => {
      if (state.success) {
        router.push("/landlord-dashboard/my-property");
      }
    }, [state.success, router]);

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="bg-white shadow-lg rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-6">Create Property</h2>

                <form action={formAction} className="space-y-6">
                    {/* Title */}
                    <div>
                        <label className="block mb-2 font-medium">Title</label>
                        <input
                            name="title"
                            type="text"
                            placeholder="Luxury Apartment"
                            className="w-full border rounded-lg px-4 py-3"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block mb-2 font-medium">Description</label>
                        <textarea
                            name="description"
                            placeholder="Property description..."
                            className="w-full border rounded-lg px-4 py-3"
                        />
                    </div>

                    {/* Price */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div>
                            <label className="block mb-2 font-medium">Price</label>
                            <input
                                name="price"
                                type="number"
                                placeholder="200"
                                className="w-full border rounded-lg px-4 py-3"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">Bedrooms</label>
                            <input
                                name="bedrooms"
                                type="number"
                                placeholder="3"
                                className="w-full border rounded-lg px-4 py-3"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">Bathrooms</label>
                            <input
                                name="bathrooms"
                                type="number"
                                placeholder="2"
                                className="w-full border rounded-lg px-4 py-3"
                            />
                        </div>
                    </div>

                    {/* Area & Category */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block mb-2 font-medium">Area</label>
                            <input
                                name="area"
                                type="number"
                                placeholder="1450"
                                className="w-full border rounded-lg px-4 py-3"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">Category</label>
                            <select
                                name="categoryId"
                                className="w-full border rounded-lg px-4 py-3"
                            >
                                <option value="">Select Category</option>

                                {category.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Location & Address */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block mb-2 font-medium">Location</label>
                            <input
                                name="location"
                                type="text"
                                placeholder="Dhaka"
                                className="w-full border rounded-lg px-4 py-3"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">Address</label>
                            <input
                                name="address"
                                type="text"
                                placeholder="Dhanmondi 27"
                                className="w-full border rounded-lg px-4 py-3"
                            />
                        </div>
                    </div>

                    {/* Images */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Image URLs (One per line)
                        </label>
                        <textarea
                            name="images"
                            placeholder={`https://example.com/image1.jpg
https://example.com/image2.jpg`}
                            className="w-full border rounded-lg px-4 py-3"
                        />
                    </div>

                    {/* Amenities */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Amenities (Comma separated)
                        </label>
                        <input
                            name="amenities"
                            type="text"
                            placeholder="WiFi, Parking, Lift"
                            className="w-full border rounded-lg px-4 py-3"
                        />
                    </div>

                    {/* Message */}
                    {state.message && (
                        <p
                            className={`text-sm ${state.success ? "text-green-600" : "text-red-600"
                                }`}
                        >
                            {state.message}
                        </p>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isPending}
                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-medium"
                    >
                        {isPending ? "Creating..." : "Create Property"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PropertycreateFrom;