"use server"
import axios from "axios";
import { cookies } from "next/headers";


export type FormState = {
    success: boolean;
    message: string;
}

export const createcategory = async (prevState: FormState, formData: FormData): Promise<FormState> => {
    const name = formData.get('name');
    const discription = formData.get('description')

    const cookieStore = await cookies();

    const cookieHeader = cookieStore.get("accessToken")?.value

    try {

        const res = await axios.post("https://assignment-04-drab.vercel.app/api/categories",
            {
                name: name,
                description: discription
            },
            {
                headers: {
                    Cookie: `AccessToken=${cookieHeader}`,
                }
            }
        )

        return {
            success: true,
            message: "Category created successfully",
        };

    } catch (error) {
        return {
            success: false,
            message: "Failed to create category",
        };
    }


}