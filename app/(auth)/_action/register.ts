'use server';

import axios from "axios";

export type FormState = {
  success: boolean;
  message: string;
};

export const resinsteAction = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const password = formData.get("password") as string;

    if (!name || !email || !phoneNumber || !password) {
      return {
        success: false,
        message: "All fields are required.",
      };
    }

    await axios.post(
      "https://assignment-04-drab.vercel.app/api/auth/register",
      {
        name,
        email,
        password,
        phoneNumber,
      }
    );

    return {
      success: true,
      message: "Registration successful!",
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