import React from "react";
import { getAllproperty } from "../_action/getAllProperty";
import PropertyList from "../_component/Propritylist";


const page = async () => {
  const data = await getAllproperty();

  console.log(data)

  return (
    <div className="pt-10">
      <PropertyList data={data} />
    </div>
  );
};

export default page;