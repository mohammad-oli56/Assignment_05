"use server";

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
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phoneNumber =
      formData.get("phoneNumber")?.toString().trim() || "";
    const password = formData.get("password")?.toString() || "";
    const confirmPassword =
      formData.get("confirmPassword")?.toString() || "";

    if (!name || !email || !password || !confirmPassword) {
      return {
        success: false,
        message: "All required fields must be filled.",
      };
    }

    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Invalid email address.",
      };
    }

    if (password.length < 6) {
      return {
        success: false,
        message: "Password must be at least 6 characters.",
      };
    }

    if (password !== confirmPassword) {
      return {
        success: false,
        message: "Passwords do not match.",
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
        error?.response?.data?.message ??
        "Something went wrong.",
    };
  }
};