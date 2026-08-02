import axios from "axios";
import { cookies } from "next/headers";

export const getAllUser = async () => {
  const cookieStore = await cookies();

 const cookieHeader = cookieStore.get("accessToken")?.value

//  console.log(cookieHeader)
  const res = await axios.get("https://assignment-04-drab.vercel.app/api/admin/users",
  {
    headers: {
      Cookie: `AccessToken=${cookieHeader}`,
    },
  }
);

// console.log(res.data.data.result)

  return res.data.data.result;
};