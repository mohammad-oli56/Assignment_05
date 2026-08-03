"use server";

import axios from "axios";
import { cookies } from "next/headers";

export const changeuserstatus = async ({
  id,
  value,
}: {
  id: string;
  value: "ACTIVE" | "BLOCKED";
}) => {
  try {
    console.log(id, value);

    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await axios.patch(
      `https://assignment-04-drab.vercel.app/api/admin/users/${id}`,
      {
        status: value,
      },
      {
        headers: {
          Cookie: `AccessToken=${accessToken}`,
        },
      }
    );

    console.log(res.data);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.response?.status);
      console.error(error.response?.data);
    } else {
      console.error(error);
    }
    throw error;
  }
};