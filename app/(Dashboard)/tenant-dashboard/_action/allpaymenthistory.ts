import axios from "axios";
import { cookies } from "next/headers";

export const allpaymenthistory = async () => {
  try {
    const cookieStore = await cookies();

    const cookieHeader = cookieStore.get("accessToken")?.value;

    console.log("Token:", cookieHeader);

    const res = await axios.get(
      "https://assignment-04-drab.vercel.app/api/payments",
      {
        headers: {
          Cookie: `AccessToken=${cookieHeader}`,
        },
      }
    );

    return res.data.data.result;
  } catch (error: any) {
    console.log("Status:", error.response?.status);
    console.log("Response:", error.response?.data);

    return [];
  }
};