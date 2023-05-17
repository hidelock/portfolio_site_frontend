import React from "react";
import "./OrderInfoCard.css";

const OrderInfoCard = () => {
  return (
    <div className="order__info_card card-container">
      <div className="order__info_card__circles">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div></div>
      </div>
      <div className="order__info_card__text">
        <div>1. Заполните форму.</div>
        <div>2. Отправьте заказ.</div>
        <div>3. Я свяжусь с вами.</div>
      </div>
    </div>
  );
};

export default OrderInfoCard;
