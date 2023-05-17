import React from 'react'
import './ContactsCard.css';
import ContactItem from './ContactItem/ContactItem';
import LoaderSpinner from '@components/shared/LoaderSpinner/LoaderSpinner';
import ContactsEmpty from '../ContactsEmpty/ContactsEmpty';

const ContactsCard = ({ contacts, loader }) => {

  if (loader) {
    return (
      <div className='contacts-card card-container'>
        <p className='contacts-card__title'> Links</p>
        <LoaderSpinner />
      </div>
    )
  }

  if (contacts.length <= 0) {
    return (
      <div className='contacts-card card-container'>
        <p className='contacts-card__title'>Links</p>
        <ContactsEmpty />
      </div>
    )
  }

  return (
    <div className='contacts-card card-container'>
      <p className='contacts-card__title'> Links</p>
        {contacts.map((item) =>
          <ContactItem key={item.id} title={item.title} name={item.name} icon={item.icon} link={item.link} />
        )}

    </div>
  )
}

export default ContactsCard