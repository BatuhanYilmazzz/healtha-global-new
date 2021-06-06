import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FooterStyled } from '../styles/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { v4 } from 'uuid';

/*let lang;
if (localStorage.i18nextLng) {
  lang = localStorage.getItem("i18nextLng");
}*/
const Footer = () => {
  // React i18next
  const { t, i18n } = useTranslation();
  // Context
  const [state, setState] = useState({
    email: '',
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const { email } = state;
  const sendForm = () => {
    console.log('work');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendForm({
      id: v4(),
      email,
    });
    alert('Thank you for subscribe');
    setState({
      email: '',
    });
  };

  return (
    <FooterStyled>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-5'>
            <form
              onSubmit={handleSubmit}
              className='d-sm-block d-lg-flex text-center'
            >
              <input
                type='email'
                onChange={handleChange}
                value={state.email}
                name='email'
                placeholder={t('E_MAIL')}
              />
              <button type='submit'>{t('SUBSCRIBE')}</button>
            </form>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-3'>
            <ul>
              <li>
                Konaklar Mah. Akağaç Sk. Aksan Binası No:7 34330 4. Levent
                Beşiktaş/İstanbul
              </li>
              <li>+90 212 293 45 08</li>
              <li className='font-weight-bold'>info@healthaglobal.com</li>
            </ul>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 footer__links'>
            <a
              href='https://www.linkedin.com/company/71556627'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedinIn} color='white' />
            </a>
            <a
              href='https://www.facebook.com/healthaglobal'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faFacebook} color='white' />
            </a>
            <a
              href='https://twitter.com/GlobalHealtha'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faTwitter} color='white' />
            </a>
            <a
              href='https://www.instagram.com/healthaglobal/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faInstagram} color='white' />
            </a>
            <a
              href='https://www.youtube.com/channel/UCIAIYuuD09u0Kb44kUddPGg'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faYoutube} color='white' />
            </a>
          </div>
        </div>
        <div className='footer__kvkk'>
          <a download href={`/kvkk/kvkk_${i18n.language}.pdf`}>
            {t('KVKK_FOOTER')}
          </a>
          <p>Copyright © 2020 Healtha Global</p>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
