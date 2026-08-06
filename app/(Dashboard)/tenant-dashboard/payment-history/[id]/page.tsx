import React from "react";
import { singlepaymetn } from "../../_action/singlepayment";
import Paymentsingle from "../../_component/Paymentsingle";

type TParam = {
  params: Promise<{ id: string }>;
};

const PaymentSinglepage = async ({ params }: TParam) => {
  const { id } = await params;

  const payment = await singlepaymetn(id);

  return (
    <div className="p-6">
      <Paymentsingle payment={payment} />
    </div>
  );
};

export default PaymentSinglepage;