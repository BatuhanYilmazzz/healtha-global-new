import React, { useEffect, useContext } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { NavbarSocialStyled } from "../styles/components";
import { useTranslation } from "react-i18next";
import DataContext from "../context/dataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

//
//
function NavbarSocial() {
  const { t, i18n } = useTranslation();
  let lang = localStorage.getItem("i18nextLng");
  const dataContext = useContext(DataContext);
  const { getLang } = dataContext;

  const history = useHistory();
  const location = useLocation();

  const handleClick = (language) => {
    i18n.changeLanguage(language);
    if (location.pathname === "/") {
      window.location.reload();
    } else {
      history.push("/");
    }
  };

  useEffect(() => {
    getLang(lang);
    // eslint-disable-next-line
  }, [lang]);
  return (
    <NavbarSocialStyled>
      <div className='row language-animate'>
        <div className='text-right col py-2'>
          <div className='container'>
            <NavLink to='/about-us' className='animate-link'>
              {t("ABOUT_US")}
            </NavLink>
            <NavLink to='/gallery' className='animate-link'>
              {t("GALERİ")}
            </NavLink>
            <NavLink to='/contact-us' className='mr-4 animate-link'>
              {t("İLETİŞİM")}
            </NavLink>
            <button
              className={`animate-link ${lang === "tr" ? "langactive" : ""}`}
              onClick={() => handleClick("tr")}
            >
              TR
            </button>
            <button
              className={`animate-link ${lang === "en" ? "langactive" : ""}`}
              onClick={() => handleClick("en")}
            >
              EN
            </button>
            <button
              className={`${lang === "fr" ? "langactive" : ""} nav-drop`}
              onClick={() => {
                handleClick("fr");
              }}
            >
              FR
            </button>
            <button
              className={`${lang === "ru" ? "langactive" : ""} nav-drop`}
              onClick={() => {
                handleClick("ru");
              }}
            >
              RU
            </button>
            <a
              href='https://ar.healthaglobal.com'
              className='animate-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              AR
            </a>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='text-right col pt-2 px-0'>
          <div className='container'>
            <a
              href='https://www.linkedin.com/company/71556627'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                color='white'
                size='lg'
                className='header-icon'
              />
            </a>
            <a
              href='https://www.facebook.com/healthaglobal'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faFacebook}
                color='white'
                size='lg'
                className='header-icon'
              />
            </a>
            <a
              href='https://twitter.com/GlobalHealtha'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faTwitter}
                color='white'
                size='lg'
                className='header-icon'
              />
            </a>
            <a
              href='https://www.instagram.com/healthaglobal/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faInstagram}
                color='white'
                size='lg'
                className='header-icon'
              />
            </a>
            <a
              href='https://www.youtube.com/channel/UCIAIYuuD09u0Kb44kUddPGg'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faYoutube}
                color='white'
                size='lg'
                className='header-icon'
              />
            </a>
          </div>
        </div>
      </div>
    </NavbarSocialStyled>
  );
}

export default NavbarSocial;
