import React from "react";
import { allpaymenthistory } from "../_action/allpaymenthistory";
import AllPaymentHistoryCard from "../_component/AllPaymentHistoryCard";

const PaymentHistorypage = async () => {
  const allhistory = await allpaymenthistory();

  return (
    <div className="p-6">
      <AllPaymentHistoryCard payments={allhistory} />
    </div>
  );
};

export default PaymentHistorypage;