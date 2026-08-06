import React from "react";
import { getmyallrequest } from "./_action/getmyallrequest";
import { allpaymenthistory } from "./_action/allpaymenthistory";
import Home from "./_component/Home";

const page = async () => {
  const requests = await getmyallrequest();
  const allhistory = await allpaymenthistory();

  return (
    <Home
      requests={requests || []}
      allhistory={allhistory || []}
    />
  );
};

export default page;