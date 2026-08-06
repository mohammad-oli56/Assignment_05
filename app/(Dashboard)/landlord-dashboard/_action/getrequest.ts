import axios from "axios";
import { cookies } from "next/headers";

export const getpropertyrequest = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  try {
    const res = await axios.get(
      "https://assignment-04-drab.vercel.app/api/landlord/requests",
      {
        headers: {
          Cookie: `AccessToken=${accessToken}`,
        },
      }
    );

    return res.data.data.result;
  } catch (error: any) {
    // console.log("Status:", error.response?.status);
    // console.log("Data:", error.response?.data);

    // যদি কোনো request না থাকে
    if (
      error.response?.status === 500 &&
      error.response?.data?.message === "not Available Request. Right now"
    ) {
      return [];
    }

    throw error;
  }
};