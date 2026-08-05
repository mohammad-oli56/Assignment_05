import React from "react";
import { getmyallrequest } from "../_action/getmyallrequest";
import PaymetCreateCard from "../_component/PaymetCreateCard";

const PaymentCreatepage = async () => {
  const requests = await getmyallrequest();

  return (
    <div className="p-6">
      <PaymetCreateCard requests={requests} />
    </div>
  );
};

export default PaymentCreatepage;