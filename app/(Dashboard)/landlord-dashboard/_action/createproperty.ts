"use server";

import axios from "axios";
import { cookies } from "next/headers";

export type FormState = {
  success: boolean;
  message: string;
};

export const createproperty = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  try {
    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
      price: Number(formData.get("price")),
      location: formData.get("location"),
      address: formData.get("address"),
      bedrooms: Number(formData.get("bedrooms")),
      bathrooms: Number(formData.get("bathrooms")),
      area: Number(formData.get("area")),
      categoryId: formData.get("categoryId"),
      images: (formData.get("images") as string)
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),
      amenities: (formData.get("amenities") as string)
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    };

    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await axios.post(
      "https://assignment-04-drab.vercel.app/api/landlord/properties",
      data, // request body
      {
        headers: {
          Cookie: `AccessToken=${accessToken}`,
        },
      }
    );

    

    return {
      success: true,
      message: "Property created successfully",
    };
  } catch (error: any) {
    console.log(error.response?.data || error);

    return {
      success: false,
      message:
        error.response?.data?.message || "Failed to create property",
    };
  }
};