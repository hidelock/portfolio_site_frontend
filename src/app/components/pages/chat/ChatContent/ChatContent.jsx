import React, { useEffect, useMemo, useRef } from 'react'
import ChatMessage from "@components/pages/chat/ChatMessage/ChatMessage";
import './ChatContent.css';
import { toast } from 'react-toastify';
import ChatEmpty from '../ChatEmpty/ChatEmpty';

const ChatContent = ({ messages }) => {

    //Save data localsotrage
    const messages_update = useRef(null)
    useEffect(() => {
        messages_update.current?.scrollIntoView({ behavior: "smooth" });

        try { localStorage.setItem('messages', JSON.stringify(messages)); }
        catch (error) {
            toast.error('Ошибка при получении истории сообщений! История была очищена!')
            console.log(error);
            localStorage.clear();
        }

    }, [messages]);

    const content = useMemo(() => {

        if (messages.length <= 0) return <ChatEmpty />
        else {
            return messages.map((item, index) =>
                <ChatMessage key={index} content={item.content} role={item.role}/>
            )
        }

    }, [messages])


    return (
        <div className='chat__content'>
            { content }
            <span ref={messages_update}/>
        </div>
    )
}

export default ChatContent