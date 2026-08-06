"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export const handelstatusfromaction = async (id: string,status:string) => {
  try {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await axios.patch(
      `https://assignment-04-drab.vercel.app/api/landlord/requests/${id}`,
      {
        status: status,
      },
      {
        headers: {
          Cookie: `AccessToken=${accessToken}`,
        },
      }
    );

    // Change this path to your actual page path
    revalidatePath("/landlord/request");

    return {
      success: true,
      message: "Status updated successfully",
      data: res.data,
    };
  } catch (error: any) {
    return {
      success: false,
      message:
        error?.response?.data?.message || "Failed to update status",
    };
  }
};