import React, { useState } from "react";
import { toast } from "react-toastify";
import CustomInput from "@components/ui/CustomInput/CustomInput";
import CustomTextarea from "@components/ui/CustomTextarea/CustomTextarea";
import InfoDiv from "@components/shared/InfoDiv/InfoDiv";
import CustomButton from "@components/ui/CustomButton/CustomButton";
import { OrdersService } from "@service/OrdersService";
import "./OrderFormCard.css";


const OrderFormCard = () => {
  const [name, setName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [description, setDescription] = useState("");
  const [element, setElement] = useState("");
  const [jabber, setJabber] = useState("");
  const [term, setTerm] = useState("");
  const [disabled, setDisabled] = useState(false);

  const fetch = async (e) => {
    e.preventDefault();
    setDisabled(true);

    try {

      if (!name || !telegram || !description) toast.error('Заполните обязательные поля!')
      else if (name.length < 3 || telegram < 3 || description.length < 3) toast.error('Ваш текст должен иметь длину от 2 символов')
      else {
        const response = await OrdersService.post(name, telegram, description, element || 'Пусто', jabber || 'Пусто', term || '0');

        if (!response.status) toast.error('Произошла ошибка! Свяжитесь со мной по контактам!')
        else {
          toast.success('Заказ успешно отправлен!')
          setName("")
          setTelegram("")
          setDescription("")
          setElement("")
          setJabber("")
          setTerm("")
        }
      }
    } catch (error) {
      console.log(error)
      toast.error('Произошла ошибка! Свяжитесь со мной по контактам!');
    }
    finally {
      setTimeout(() => setDisabled(false), 1000)
    }
  }

  return (
    <form className="order__form card-container">
      <div className="order__form__left">
        <CustomInput
          required={true}
          label="Ваше имя"
          value={name}
          onChange={setName}
          maxLength={50}
        />
        <CustomInput
          required={true}
          label="Telegram"
          value={telegram}
          onChange={setTelegram}
          maxLength={50}
        />
        <CustomTextarea
          required={true}
          label="Краткое описание проекта"
          value={description}
          onChange={setDescription}
          maxLength={300}
        />
      </div>
      <div className="order__form__right">
        <CustomInput
          label="Element"
          value={element}
          onChange={setElement}
          maxLength={50}
        />
        <CustomInput
          label="Jabber"
          value={jabber}
          onChange={setJabber}
          maxLength={50}
        />
        <CustomInput
          label="Сроки (в днях)"
          value={term}
          onChange={setTerm}
          maxLength={10}
        />
        <InfoDiv>
          После создания заказа я свяжусь с вами, чтобы обсудить детали
        </InfoDiv>
        <div className="order__form__button">
          <CustomButton onClick={fetch} disabled={disabled}>Отправить заказ</CustomButton>
        </div>
      </div>
    </form>
  );
};

export default OrderFormCard;
