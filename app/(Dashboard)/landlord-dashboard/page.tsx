import React from "react";
import { getmyproperty } from "./_action/getmyproperty";
import { getpropertyrequest } from "./_action/getrequest";
import LandlordHome from "./_component/Home";
import { getMe } from "@/service/getMe";

const page = async () => {
  const properties = await getmyproperty();
  const requests = await getpropertyrequest();
  const user = await getMe();

  return (
    <LandlordHome
      properties={properties}
      requests={requests}
       user={user}
    />
  );
};

export default page;