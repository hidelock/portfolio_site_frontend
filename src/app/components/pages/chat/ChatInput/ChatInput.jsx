import React from 'react'
import { RiSendPlane2Fill } from "react-icons/ri";
import { SiOpenai } from 'react-icons/si';
import { FaTrash } from 'react-icons/fa';
import './ChatInput.css'

const ChatInput = ({fetch, clear, input, setInput, messages, setMessages, loader, setLoader}) => {    

    const send_message = async (e) => {

        if ((e.key === 'Enter' || e.type === 'click') && !loader) {
            e.preventDefault()
            fetch()
        }
    };

    return (
        <div className="chat_container__form">
            <label><SiOpenai className="chat_container__form__button__icon" /></label>
            <textarea id='send_chat_input' wrap='soft' rows={1} maxLength={400} placeholder="до 400 символов" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={send_message} />
            <div className='chat_container__form__buttons'>
                <button className="chat_container__form__button" disabled={loader} onClick={clear}><FaTrash className="chat_container__form__button__icon" /></button>
                <button className="chat_container__form__button" disabled={loader} onClick={send_message}><RiSendPlane2Fill className="chat_container__form__button__icon" /></button>
            </div>
        </div>
    )
}

export default ChatInput