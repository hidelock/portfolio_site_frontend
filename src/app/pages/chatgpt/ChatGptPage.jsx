import React, { useState } from "react";
import ChatContent from "@components/pages/chat/ChatContent/ChatContent";
import ChatInput from "@components/pages/chat/ChatInput/ChatInput";
import LoaderSpinner from '@components/shared/LoaderSpinner/LoaderSpinner';
import { ChatService } from "@service/ChatService";
import { toast } from 'react-toastify';
import "./ChatGptPage.css";

const ChatGptPage = () => {
  const [loader, setLoader] = useState(false);
  const [messages, setMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);
  const [input, setInput] = useState('')

  const fetch_message = async () => {

    try {
      setLoader(true);

      if (input.length < 3) toast.error('Ваш текст должен иметь длину от 3 символов');
      else {
        const array = [...messages, { role: 'user', content: input }];
        setMessages(array);
        setInput("")

        const response = await ChatService.post(input);
        if (!response.status) toast.error('Возникла ошибка!');
        setMessages(prevMessages => [...prevMessages, { role: 'assistant', content: response.body }]);
      }
    } catch (error) {
      console.log(error)
      toast.error('Произошла ошибка с сервером!');
    } finally {
      setLoader(false);
    }
  }

  const clear_messages = () => {

    if (messages.length > 0) {
        localStorage.removeItem('messages');
        setMessages([]);
        setLoader(false)
        toast.success('История удалена!')
    } else toast.error('В данный момент нечего очищать!')
}

  return (
    <div className="wrapper">
      <div className="chat_container card-container">
        <div className="chat_container__content">
          <ChatContent messages={messages} setMessages={setMessages} />
          {loader && <div className="chat_container__loading"><LoaderSpinner /></div>}
        </div>
        <ChatInput fetch={fetch_message} clear={clear_messages} input={input} setInput={setInput} messages={messages} setMessages={setMessages} loader={loader} setLoader={setLoader} />
      </div>
    </div>
  );
};

export default ChatGptPage;
