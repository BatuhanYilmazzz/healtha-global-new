import React, { useContext, useEffect } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { NavbarStyled } from "../styles/components";
import { handleScroll } from "../animations/animation";
import { useTranslation } from "react-i18next";
import DataContext from "../context/dataContext";
import EventListener, { withOptions } from "react-event-listener";
import NavbarSocial from "./NavbarSocial";
import Brand from "./Brand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import $ from "jquery";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
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

  $(".navbar-collapse .nav-drop").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  return (
    <NavbarStyled>
      <EventListener
        target='window'
        onScroll={withOptions(handleScroll, {
          passive: true,
          capture: false,
        })}
      />
      <div className='navbar-animate'>
        <NavbarSocial />
        <div className='container'>
          <nav className='navbar navbar-expand-lg'>
            <NavLink className='navbar-brand' to='/'>
              <Brand />
            </NavLink>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <FontAwesomeIcon icon={faBars} color='#47b9bb' />
            </button>

            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <NavLink className='nav-link nav-drop' to='/sac-ekimi'>
                    {t("SAC_EKIMI")}
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link nav-drop'
                    to='/estetik-plastik-cerrahi'
                  >
                    {t("ESTETIK_PLASTIK_CERRAHI")}
                  </NavLink>
                </li>

                <li className='nav-item'>
                  <NavLink
                    className='nav-link nav-drop'
                    to='/obezite-metabolik-cerrahi'
                  >
                    {t("OBEZITE_METABOLİK_CERRAHI")}
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link nav-drop'
                    to={{
                      pathname: "/agız-dis-saglıgı",
                    }}
                  >
                    {t("AĞIZ_VE_DİŞ_SAGLIGI")}
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/kulak-burun-bogaz'>
                    {t("KBB")}
                  </NavLink>
                </li>
                <li className='nav-item '>
                  <NavLink className='nav-link nav-drop' to='/goz-saglıgı'>
                    {t("GÖZ_SAGLIGI")}
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link nav-drop' to='/guzellik-merkezi'>
                    {t("GUZELLİK_MERKEZİ")}
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link border-0 nav-drop'
                    to='/organizasyon-hizmetleri'
                  >
                    {t("ORGANİZASYON_HIZMETLERİ")}
                  </NavLink>
                </li>
                <li className='nav-item d-lg-none'>
                  <NavLink
                    to='/about-us'
                    className='nav-link border-0 nav-drop'
                  >
                    {t("ABOUT_US")}
                  </NavLink>
                </li>
                <li className='nav-item d-lg-none'>
                  <NavLink to='/gallery' className='nav-link border-0 nav-drop'>
                    {t("GALERİ")}
                  </NavLink>
                </li>
                <li className='nav-item d-lg-none'>
                  <NavLink
                    to='/contact-us'
                    className='nav-link border-0 nav-drop'
                  >
                    {t("İLETİŞİM")}
                  </NavLink>
                </li>
                <li className='nav-item d-lg-none my-3'>
                  <div className='text-left navbar-mobile-social'>
                    <a
                      href='https://www.linkedin.com/company/71556627'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} color='#47b9bb' />
                    </a>
                    <a
                      href='https://www.facebook.com/healthaglobal'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FontAwesomeIcon icon={faFacebook} color='#47b9bb' />
                    </a>
                    <a
                      href='https://twitter.com/GlobalHealtha'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FontAwesomeIcon icon={faTwitter} color='#47b9bb' />
                    </a>
                    <a
                      href='https://www.instagram.com/healthaglobal/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FontAwesomeIcon icon={faInstagram} color='#47b9bb' />
                    </a>
                    <a
                      href='https://www.youtube.com/channel/UCIAIYuuD09u0Kb44kUddPGg'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FontAwesomeIcon icon={faYoutube} color='#47b9bb' />
                    </a>
                  </div>
                </li>
                <li className='nav-item d-lg-none d-flex align-items-center justify-content-flex-start mobile-nav-social'>
                  <button
                    className={`${lang === "tr" ? "langactive" : ""} nav-drop`}
                    onClick={() => {
                      handleClick("tr");
                    }}
                  >
                    TR
                  </button>
                  <button
                    className={`${lang === "en" ? "langactive" : ""} nav-drop`}
                    onClick={() => {
                      handleClick("en");
                    }}
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
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </NavbarStyled>
  );
}

export default Navbar;
