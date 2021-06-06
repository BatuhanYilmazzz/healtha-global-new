import React, { Fragment, useContext } from 'react';
import { ContactFormStyled, ContactFormBodyStyled } from '../styles/components';
import { useTranslation } from 'react-i18next';
import DataContext from '../context/dataContext';
import { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const dataContext = useContext(DataContext);
  const { openHandleState, formState } = dataContext;
  const { t } = useTranslation();
  const [state, setState] = useState({
    name: '',
    email: '',
    service: '',
    phone: '',
  });
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  var template_params = {
    reply_to: 'reply_to_value',
    from_name: `${state.name}`,
    to_name: 'Aksan Health',
    message_html: `I am ${state.name} <br/> My email adress: ${state.email}<br/> My phone number : ${state.phone}<br/>. I want to get service about ${state.service}`,
  };
  var service_id = 'aksanhealth';
  var template_id = 'template_JYeyN37b';
  var user_id = 'user_w83tNLLtCjsDK9FeoB3ex';
  function sendEmail(e) {
    e.preventDefault();
    emailjs.send(service_id, template_id, template_params, user_id);
    alert('We will keep in touch you as soon as possible');
    setState({
      name: '',
      email: '',
      phone: '',
      service: '',
    });
  }
  return (
    <Fragment>
      <ContactFormStyled>
        <button
          className='contact-form-icon'
          onClick={() => openHandleState('block')}
        >
          <p>{t('CONTACT_FORM')}</p>
          <img src='/images/form.png' alt='form' />
        </button>
      </ContactFormStyled>

      <ContactFormBodyStyled style={{ display: `${formState}` }}>
        <button
          className='close-button'
          onClick={() => openHandleState('none')}
        >
          X
        </button>
        <form className='container' onSubmit={sendEmail}>
          <h1>{t('ONLINE_APPOINTMENT')}</h1>
          <input
            type='text'
            placeholder={t('NAME_SURNAME')}
            name='name'
            value={state.name}
            onChange={onChange}
            required
          />
          <input
            type='email'
            placeholder={t('E_MAIL')}
            name='email'
            value={state.email}
            onChange={onChange}
            required
          />
          <input
            type='text'
            placeholder={t('PHONE_NUMBER')}
            name='phone'
            value={state.phone}
            onChange={onChange}
            required
          />
          <input
            type='text'
            placeholder={t('CHOOSE_SERVICE')}
            name='service'
            value={state.service}
            onChange={onChange}
            required
          />

          <p className='messages-wrapper'>
            <input type='checkbox' className='messages' />
            {t('READ_CLARIFICATION')}
          </p>
          <button className='contact-us' type='submit'>
            {t('SUBMIT')}
          </button>
        </form>
      </ContactFormBodyStyled>
    </Fragment>
  );
}

export default ContactForm;
