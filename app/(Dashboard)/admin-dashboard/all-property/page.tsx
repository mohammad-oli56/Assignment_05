import { getAllproperty } from "@/app/(publicgroup)/_action/getAllProperty";
import Showallpropertyadmin from "../_components/Showallpropertyadmin";

const Page = async () => {
  const data = await getAllproperty();

  return (
    <div className="container mx-auto py-10">
      <Showallpropertyadmin data={data} />
    </div>
  );
};

export default Page;