import React from 'react'
import { SiOpenai } from "react-icons/si";

const ChatEmpty = () => {
    return (
        <div className="container__empty">
            <p><SiOpenai /> ChatGPT</p>
            <p>Начините общаться с исскуственным интелектом совершенно бесплатно и прямо сейчас!</p>
        </div>
    )
}

export default ChatEmpty