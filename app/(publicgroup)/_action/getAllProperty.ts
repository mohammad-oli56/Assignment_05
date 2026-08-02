import axios from "axios";

export const getAllproperty = async () => {
  try {
    const res = await axios.get(
      "https://assignment-04-drab.vercel.app/api/properties"
    );

    return res.data.data.result;
  } catch (error) {
    console.error(error);
    return [];
  }
};