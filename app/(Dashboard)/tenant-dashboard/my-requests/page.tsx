import React from "react";
import ShowMyrequest from "../_component/ShowMyrequest";
import { getmyallrequest } from "../_action/getmyallrequest";

const MyRequestpage = async () => {
  const requests = await getmyallrequest();

  return (
    <div className="p-6">
      <ShowMyrequest requests={requests} />
    </div>
  );
};

export default MyRequestpage;