import React from "react";
import Mypropertypage from "../_component/mypropertypage";
import { getmyproperty } from "../_action/getmyproperty";
import { getMe } from "@/service/getMe";

const Page = async () => {
  const myproperty = await getmyproperty();
  const user = await getMe();

  return (
    <div>
      <Mypropertypage
        myproperty={myproperty}
        user={user}
      />
    </div>
  );
};

export default Page;