import Banner from "@/components/shared/Banner";
import CTA from "@/components/shared/CTA";
import FAQ from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import HowItWorks from "@/components/shared/HowItWorks";
import Navbar from "@/components/shared/Navbar";
import Statistics from "@/components/shared/Statistics";
import Testimonials from "@/components/shared/Testimonials";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
import { getMe } from "@/service/getMe";
import Image from "next/image";
import { getAllproperty } from "./(publicgroup)/_action/getAllProperty";
import HomeProperty from "@/components/shared/HomeProperty";

export default async function Home() {

  // const user = await getMe()

const data = await getAllproperty();

  return (
    <div>

      <Banner />
      <HomeProperty data={data}/>
      <WhyChooseUs />
      <HowItWorks />
      <Statistics />
      <Testimonials />
      <FAQ/>
      <CTA />
      <Footer />

    </div>
  );
}
