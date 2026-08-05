"use server";

import axios from "axios";
import { cookies } from "next/headers";

const initialState = {
    success: false,
    message: "",
};

export async function updatePropertyAction(
    prevState: typeof initialState,
    formData: FormData
) {
    const cookieStore = await cookies();

    const token = cookieStore.get("accessToken")?.value;

    const id = formData.get("id") as string;

    


    try {
        await axios.put(
            `https://assignment-04-drab.vercel.app/api/landlord/properties/${id}`,
            {

                title: formData.get("title"),
                description: formData.get("description"),
                price: Number(formData.get("price")),
                location: formData.get("location"),
                address: formData.get("address"),
                bedrooms: Number(formData.get("bedrooms")),
                bathrooms: Number(formData.get("bathrooms")),
                area: Number(formData.get("area")),



            },
            {
                headers: {
                    Cookie: `AccessToken=${token}`,
                },
            }
        );

        return {
            success: true,
            message: "Property updated successfully",
        };
    } catch (error: any) {
        return {
            success: false,
            message:
                error?.response?.data?.message || "Failed to update property",
        };
    }
}