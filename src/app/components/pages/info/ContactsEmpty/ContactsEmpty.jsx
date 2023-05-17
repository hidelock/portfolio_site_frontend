import React from 'react'
import { RiContactsFill } from "react-icons/ri";
import './ContactsEmpty.css'

const ContactsEmpty = () => {
    return (
        <div className="container__empty contacts__empty">
            <p><RiContactsFill /> Links</p>
            <p>Доступных контактов не найдено!</p>
        </div>
    )
}

export default ContactsEmpty