"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
// import { useRouter } from "next/navigation";

export const getMe = async () => {


  // const router = useRouter();

  try {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
      

      // redirect("/login");
      return {
        success: false,
        message: "You are not logged in",
      };
    }

    const res = await axios.get(
      "https://assignment-04-drab.vercel.app/api/auth/me",
      {
        headers: {
          Cookie: `AccessToken=${accessToken}`,
        },
      }
    );
    // console.log(res.data)
    return res.data;
  } catch (error: any) {
    return {
      success: false,
      message:
        error.response?.data?.message || "Failed to fetch user",
    };
  }
};