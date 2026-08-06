"use server";

import axios from "axios";
import { cookies } from "next/headers";

export const landlordgeleteproperty = async (id: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    throw new Error("Access token not found");
  }

  try {
    const res = await axios.delete(
      `https://assignment-04-drab.vercel.app/api/landlord/properties/${id}`,
      {
        headers: {
          Cookie: `AccessToken=${token}`,
        },
      }
    );

    return res.data;
  } catch (error: any) {
    // console.log("Status:", error.response?.status);
    // console.log("Response:", error.response?.data);

    throw new Error(
      error.response?.data?.message || "Failed to delete property"
    );
  }
};