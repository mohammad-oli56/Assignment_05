'use server';

import axios from "axios";
import { cookies } from "next/headers";

export type FormState = {
  success: boolean;
  message: string;
};

export const reviewgive = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  try {
    const id = formData.get("id");
    const rating = formData.get("rating");
    const comment = formData.get("comment");

    if (!rating) {
      return {
        success: false,
        message: "Please select a rating.",
      };
    }

    if (!comment) {
      return {
        success: false,
        message: "Please write a comment.",
      };
    }

    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    await axios.post(
      "https://assignment-04-drab.vercel.app/api/reviews", 
      {
        propertyId: id,
        rating: Number(rating),
        comment,
      },
      {
        headers: {
          Cookie: `AccessToken=${accessToken}`,
        },
      }
    );

    return {
      success: true,
      message: "Review submitted successfully.",
    };
  } catch (error: any) {
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something went wrong. Please try again.",
    };
  }
};