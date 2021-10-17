import React, { useState } from "react";
import { ConsultancyStyled } from "../../styles/pages";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { emailjsInfo } from "../../constant";

function Consultancy() {
  const { t } = useTranslation();
  const [state, setState] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  var template_params = {
    reply_to: "reply_to_value",
    from_name: `${state.name}`,
    to_name: "Aksan Health",
    message_html: `I am ${state.name} <br/> My email adress: ${state.email}<br/> I want to get service about ${state.service} <br/> Message: ${state.message}`,
  };

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .send(
        emailjsInfo.service_id,
        emailjsInfo.template_id,
        template_params,
        emailjsInfo.user_id
      )
      .then(() => {
        alert("We will keep in touch you as soon as possible");
        setState({
          name: "",
          email: "",
          service: "",
          message: "",
        });
      })
      .catch((error) => {
        alert(error.text);
      });
  }
  return (
    <ConsultancyStyled>
      <div className='container'>
        <h1>{t("CONSULTANTY")}</h1>
        <div className='row'>
          <div className='col'>
            <form onSubmit={sendEmail}>
              <input
                type='text'
                placeholder={t("NAME_SURNAME")}
                name='name'
                value={state.name}
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
                type='text'
                placeholder={t("CHOOSE_TOPIC")}
                value={state.service}
                name='service'
                onChange={onChange}
                required
              />
              <textarea
                name='message'
                id=''
                cols='30'
                rows='8'
                placeholder={t("MESSAGE")}
                onChange={onChange}
                value={state.message}
                required
              ></textarea>
              <button type='submit'>{t("SEND")}</button>
            </form>
          </div>
        </div>
      </div>
    </ConsultancyStyled>
  );
}

export default Consultancy;
