import React from "react";
import { SiOpenai, SiAwesomewm } from "react-icons/si";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./ChatMessage.css";

const ChatMessage = (props) => {

  return (
    <div className="chat__row">
      <div className={props.role === 'assistant' ? 'chat__row__icon assistant' : 'chat__row__icon user'}>
        {props.role === 'assistant' ? <SiOpenai /> : <SiAwesomewm />}
      </div>
      <div className="chat__row__content">
        <ReactMarkdown>{props.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ChatMessage;
