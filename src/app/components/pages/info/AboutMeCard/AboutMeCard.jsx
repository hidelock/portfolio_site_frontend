import React from 'react'
import human_img from './assets/images/about_me_card_human.png';
import './AboutMeCard.css';

const AboutMeCard = (props) => {

    const about_me_text = 'Я - веб-программист, который с легкостью создает современные сайты и приложения на различных технологиях и фреймворках. Моей главной целью является создание высококачественных и удобных продуктов для пользователей, которые будут отвечать всем требованиям клиента. Я уверен в своих способностях и стремлюсь развиваться в этой области. Если вы ищите разработчика в свой проект, то смело создайте ордер и вскоре я с вами свяжусь. По другим вопросам свяжитесь любым удобным для вас способом.';

  return (
    <div className='about-me-card card-container'>
        <div className="about-me-card__img">
            <img src={human_img} alt="human icon"/>
        </div>
        <div className="about-me-card__text">
            {about_me_text}
        </div>
    </div>
  )
}

export default AboutMeCard