import React from "react";
import OrderInfoCard from "@components/pages/order/OrderInfoCard/OrderInfoCard";
import OrderFormCard from "@components/pages/order/OrderFormCard/OrderFormCard";
import './OrderPage.css';

const OrderPage = () => {
  return (
    <div className="wrapper">
      <div className="order__content">
        <OrderInfoCard />
        <OrderFormCard />
      </div>
    </div>
  );
};

export default OrderPage;
