import axios from "axios";
import { cookies } from "next/headers";

export const getAllUser = async () => {
  const cookieStore = await cookies();

 const cookieHeader = cookieStore.get("accessToken")?.value


  const res = await axios.get("https://assignment-04-drab.vercel.app/api/admin/users",
  {
    headers: {
      Cookie: `AccessToken=${cookieHeader}`,
    },
  }
);



  return res.data.data.result;
};