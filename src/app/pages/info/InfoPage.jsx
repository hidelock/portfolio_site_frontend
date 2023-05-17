import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { RiGithubFill, RiTelegramFill } from "react-icons/ri";
import { SiElement, SiXmpp } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { ContactsService } from '@service/ContactsService';
import AboutMeCard from '@components/pages/info/AboutMeCard/AboutMeCard';
import ContactsCard from '@components/pages/info/ContactsCard/ContactsCard';
import SkillsCard from '@components/pages/info/SkillsCard/SkillsCard';
import CircleAnimation from '@components/pages/info/CircleAnimation/CircleAnimation';
import './InfoPage.css';

const InfoPage = () => {
  const [contacts, setContacts] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    const fetchContacts = async () => {
      setLoader(true)
      try {
        const { body } = await ContactsService.get();

        const contacts = body.map(({ id, title, name, link }) => {
          let icon;

          switch (title) {
            case 'github':
              icon = <RiGithubFill />;
              break;
            case 'telegram':
              icon = <RiTelegramFill />;
              break;
            case 'element':
              icon = <SiElement />;
              break;
            case 'jabber':
              icon = <SiXmpp />;
              break;
            case 'mail':
            default:
              icon = <HiMail />;
          }

          return { id, title, name, link, icon };
        });

        setContacts(contacts);
      } catch (error) {
        console.log(error)
        toast.error('Произошла ошибка с сервером!');
      }
      finally{
        setLoader(false)
      }
    }

    fetchContacts();
  }, []);




  return (
    <div className='wrapper'>
      <div className="info__about-me">
        <AboutMeCard />
        <ContactsCard contacts={contacts} loader={loader}/>
      </div>
      <SkillsCard />
      <CircleAnimation />
    </div>
  )
}

export default InfoPage