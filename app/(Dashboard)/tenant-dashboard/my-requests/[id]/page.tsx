import React from "react";
import { singlerequest } from "../../_action/singlerequest";
import SingleRequest from "../../_component/SingleRequest";

type TParam = {
  params: Promise<{ id: string }>;
};

const Singlepage = async ({ params }: TParam) => {
  const { id } = await params;

  const request = await singlerequest(id);

  return (
    <div className="p-6">
      <SingleRequest request={request} />
    </div>
  );
};

export default Singlepage;