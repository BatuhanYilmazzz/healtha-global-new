import React, { useState } from "react";
import { ContactUsStyled } from "../../styles/pages";
import { useTranslation } from "react-i18next";
import Map from "../../layout/Map";
import emailjs from "emailjs-com";
import { images } from "../../constant/images";

function ContactUs() {
  const { t } = useTranslation();
  const [state, setState] = useState({
    name: "",
    message: "",
    email: "",
    service: "",
    phone: "",
  });
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  var template_params = {
    reply_to: "reply_to_value",
    from_name: `${state.name}`,
    to_name: "Aksan Health",
    message_html: `I am ${state.name} <br/> My email adress: ${state.email}<br/> My phone number : ${state.phone}<br/> I want to get service about ${state.service} <br/> Message:${state.message}`,
  };
  var service_id = "aksanhealth";
  var template_id = "mainpage";
  var user_id = "user_w83tNLLtCjsDK9FeoB3ex";
  function sendEmail(e) {
    e.preventDefault();
    emailjs.send(service_id, template_id, template_params, user_id);
    alert("We will keep in touch you as soon as possible");
    setState({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  }

  return (
    <ContactUsStyled>
      <div
        className='masthead'
        style={{ backgroundImage: `url(${images.contact.header})` }}
      >
        <h1>{t("CONTACT")}</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 contact'>
            <h1>{t("CONTACT_FORM")}</h1>
            <p className='mt-4'>{t("FOR_YOUR_QUESTION_CONTACT")}</p>
          </div>
          <div className='col-sm-12 col-md-6 contact'>
            <p>
              Konaklar Mah. Akağaç Sk. Aksan Binası No:7 34330 4. Levent
              Beşiktaş/İstanbul
            </p>
            <p>+90 212 293 45 08</p>
            <p className='font-weight-bold'> info@healthaglobal.com</p>
          </div>
        </div>
        <div className='row'>
          <form className='col-sm-12 col-md-6 contact' onSubmit={sendEmail}>
            <input
              type='text'
              placeholder={t("NAME_SURNAME")}
              value={state.name}
              name='name'
              onChange={onChange}
              required
            />
            <input
              type='email'
              placeholder={t("E_MAIL")}
              value={state.email}
              name='email'
              onChange={onChange}
              required
            />
            <input
              type='number'
              placeholder={t("PHONE_NUMBER")}
              value={state.phone}
              name='phone'
              onChange={onChange}
              required
            />
            <input
              type='text'
              placeholder={t("CHOOSE_SERVICE")}
              value={state.service}
              name='service'
              onChange={onChange}
              required
            />
            <textarea
              value={state.message}
              name='message'
              id=''
              cols='30'
              rows='10'
              placeholder={t("MESSAGE")}
              onChange={onChange}
              required
            ></textarea>
            <button type='submit' className='appointment-button'>
              {t("SEND")}
            </button>
          </form>
          <div className='col-sm-12 col-md-6 contact map'>
            <Map />
          </div>
        </div>
      </div>
    </ContactUsStyled>
  );
}

export default ContactUs;
