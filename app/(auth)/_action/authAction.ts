"use server";

import axios from "axios";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type TPrevState = {
  success: boolean;
  message: string;
};

export async function loginAction( prevState: TPrevState, formData: FormData): Promise<TPrevState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  let redirectPath: string | null = null;

  try {
    const res = await axios.post(
      "https://assignment-04-drab.vercel.app/api/auth/login",
      {
        email,
        password,
      }
    );

    if (!res.data.success) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    const accessToken = res.data.data.accessToken;

    const cookieStore = await cookies();

    cookieStore.set("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    const decodedToken = jwt.decode(accessToken) as JwtPayload | null;

    if (!decodedToken) {
      return {
        success: false,
        message: "Invalid token",
      };
    }

    switch (decodedToken.role) {
      case "ADMIN":
        redirectPath = "/admin-dashboard";
        break;
      case "LANDLORD":
        redirectPath = "/landlord-dashboard";
        break;
      case "TENANT":
        redirectPath = "/tenant-dashboard";
        break;
      default:
        redirectPath = "/";
        break;
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || "Login failed",
    };
  }

  
  if (redirectPath) {
    redirect(redirectPath);
  }

  return {
    success: false,
    message: "Something went wrong",
  };
}