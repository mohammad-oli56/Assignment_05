import React from "react";
import { getmysingleproperty } from "../../_action/getmysingleproperty";
import Singlepropertycard from "../../_component/Singlepropertycard";

type TParam = {
  params: Promise<{ id: string }>;
};

const Page = async ({ params }: TParam) => {
  const { id } = await params;

  const property = await getmysingleproperty(id);
  console.log(property)

  return (
    <div>
      <Singlepropertycard property={property} />
    </div>
  );
};

export default Page;