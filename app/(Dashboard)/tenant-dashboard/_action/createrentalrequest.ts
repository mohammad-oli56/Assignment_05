"use server";

import axios from "axios";
import { cookies } from "next/headers";

const initialState = {
  success: false,
  message: "",
};

export const createrentalrequest = async (
  prevState: typeof initialState,
  formData: FormData
) => {
  try {
    const cookieStore = await cookies();

    const token =
      cookieStore.get("accessToken")?.value;

    const propertyId = formData.get(
      "propertyId"
    ) as string;

    const moveDate = formData.get(
      "moveDate"
    ) as string;

    const message = formData.get(
      "message"
    ) as string;

    await axios.post(
      "https://assignment-04-drab.vercel.app/api/rentals",
      {
        propertyId,
        moveInDate: moveDate,
        message,
      },
      {
        headers: {
          Cookie: `AccessToken=${token}`,
        },
      }
    );

    return {
      success: true,
      message: "Rental request submitted successfully.",
    };
  } catch (error: any) {
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something went wrong.",
    };
  }
};