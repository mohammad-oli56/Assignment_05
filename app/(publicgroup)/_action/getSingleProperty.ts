import axios from "axios";

export const GetSingleProperty = async(id:string)=>{
 try {
    const res = await axios.get(
      `https://assignment-04-drab.vercel.app/api/properties/${id}`
    );

    return res.data.data.result;
  } catch (error) {
    console.error(error);
    return [];
  }
}