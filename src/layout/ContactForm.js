import React, { Fragment, useContext } from "react";
import { ContactFormStyled, ContactFormBodyStyled } from "../styles/components";
import { useTranslation } from "react-i18next";
import DataContext from "../context/dataContext";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useHistory } from "react-router";
import { emailjsInfo } from "../constant";

function ContactForm() {
  const dataContext = useContext(DataContext);
  const { openHandleState, formState } = dataContext;
  const { t } = useTranslation();

  const history = useHistory();

  const [state, setState] = useState({
    name: "",
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
    to_name: "Healtha Global",
    message_html: `I am ${state.name} <br/> My email adress: ${state.email}<br/> My phone number : ${state.phone}<br/>. I want to get service about ${state.service}`,
  };
  var service_id = emailjsInfo.service_id;
  var template_id = emailjsInfo.template_id;
  var user_id = emailjsInfo.user_id;

  function sendEmail(e) {
    e.preventDefault();

    emailjs.send(service_id, template_id, template_params, user_id).then(
      (result) => {
        alert("We will keep in touch you as soon as possible");
        setState({
          name: "",
          email: "",
          phone: "",
          service: "",
        });
      },
      (error) => {
        alert(error.text);
      }
    );
  }
  return (
    <Fragment>
      <ContactFormStyled>
        <button
          className='contact-form-icon'
          onClick={() => history.push("/contact-form")}
        >
          <p>{t("CONTACT_FORM")}</p>
          <img src='/images/form.png' alt='form' />
        </button>
      </ContactFormStyled>

      <ContactFormBodyStyled style={{ display: `${formState}` }}>
        <button
          className='close-button'
          onClick={() => openHandleState("none")}
        >
          X
        </button>
        <form className='container' onSubmit={sendEmail}>
          <h1>{t("ONLINE_APPOINTMENT")}</h1>
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
            name='email'
            value={state.email}
            onChange={onChange}
            required
          />
          <input
            type='text'
            placeholder={t("PHONE_NUMBER")}
            name='phone'
            value={state.phone}
            onChange={onChange}
            required
          />

          <select
            aria-label='Default select example'
            name='service'
            value={state.service}
            onChange={onChange}
          >
            <option selected>{t("CHOOSE_SERVICE")}</option>
            <option value={t("SERVICES_HAIR")}>{t("SERVICES_HAIR")}</option>
            <option value={t("SERVICES_PLASTIC_SURGERY")}>
              {t("SERVICES_PLASTIC_SURGERY")}
            </option>
            <option value={t("SERVICES_METABOLIC_SURGERY")}>
              {t("SERVICES_METABOLIC_SURGERY")}
            </option>
            <option value={t("SERVICES_KBB")}>{t("SERVICES_KBB")}</option>
            <option value={t("SERVICES_TEETH")}>{t("SERVICES_TEETH")}</option>
            <option value={t("SERVICES_EYE")}>{t("SERVICES_EYE")}</option>
            <option value={t("SERVICES_BEAUTY")}>{t("SERVICES_BEAUTY")}</option>
            <option value={t("SERVICES_ORGANIZATION")}>
              {t("SERVICES_ORGANIZATION")}
            </option>
          </select>

          <p className='messages-wrapper'>
            <input type='checkbox' className='messages' />
            {t("READ_CLARIFICATION")}
          </p>
          <button className='contact-us' type='submit'>
            {t("SUBMIT")}
          </button>
        </form>
      </ContactFormBodyStyled>
    </Fragment>
  );
}

export default ContactForm;
