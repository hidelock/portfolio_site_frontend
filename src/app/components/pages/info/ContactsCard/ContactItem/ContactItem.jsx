import React from 'react'
import './ContactItem.css';

const ContactItem = (props) => {
    return (
        <div className="contacts-card__item">
            <a href={props.link} title={props.title} target="_blank" rel="noreferrer">
                {props.icon}
            </a>
            <p title={props.title}>{props.name}</p>
        </div>
    )
}

export default ContactItem