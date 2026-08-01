import Banner from "@/components/shared/Banner";
import Navbar from "@/components/shared/Navbar";
import { getMe } from "@/service/getMe";
import Image from "next/image";

export default async function Home() {

  // const user = await getMe()

  // console.log(user)

  return (
    <div>
     
      <Banner/>
      
    </div>
  );
}
