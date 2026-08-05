import axios from "axios";
import { cookies } from "next/headers";

export const getmysingleproperty = async (id: string) => {
    const cookieStore = await cookies();

    const cookieHeader = cookieStore.get("accessToken")?.value
    try {
        const res = await axios.get(
            `https://assignment-04-drab.vercel.app/api/properties/${id}`,
            {
                headers: {
                    Cookie: `AccessToken=${cookieHeader}`,
                },
            }
        );

        return res.data.data.result;
    } catch (error) {
        console.error(error);
        return [];
    }
}