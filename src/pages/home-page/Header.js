import React, { useContext } from "react";
import { HeaderStyled } from "../../styles/pages";
import { useTranslation } from "react-i18next";
import DataContext from "../../context/dataContext";
import { images } from "../../constant/images";

function Header() {
  const { t } = useTranslation();
  const dataContext = useContext(DataContext);
  const { openHandleState, anasayfaState } = dataContext;

  return (
    <HeaderStyled
      style={{
        backgroundImage:
          anasayfaState &&
          `url(${
            /*  process.env.REACT_APP_API_URL + anasayfaState[0]?.header_image?.url */ images
              .home.header
          })`,
      }}
    >
      <div className='row'>
        <div className='col'>
          <div className='content'>
            <h1 className='title'>
              {anasayfaState && anasayfaState[0]?.header_title}
            </h1>
            <p className='description'>
              {" "}
              {anasayfaState && anasayfaState[0]?.header_description}
            </p>
            <button onClick={() => openHandleState("block")}>
              {t("CALL_YOU_BACK")}
            </button>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}

export default Header;
