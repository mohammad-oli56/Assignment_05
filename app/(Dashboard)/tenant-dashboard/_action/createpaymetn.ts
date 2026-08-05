"use server";

import axios from "axios";
import { cookies } from "next/headers";

export const createpayment = async (id: string) => {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await axios.post(
      "https://assignment-04-drab.vercel.app/api/payments/create",
      {
        rentalRequestId: id,
      },
      {
        headers: {
          Cookie: `AccessToken=${accessToken}`,
        },
      }
    );

    return {
      success: true,
      message: res.data.message,
      paymentUrl: res.data.data.result.GatewayPageURL,
    };
  } catch (error: any) {
    return {
      success: false,
      message:
        error?.response?.data?.message || "Payment creation failed.",
      paymentUrl: "",
    };
  }
};