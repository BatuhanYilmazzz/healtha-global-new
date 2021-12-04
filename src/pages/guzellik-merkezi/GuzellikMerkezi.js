import React, { useContext, useEffect } from "react";
import { GuzellikMerkeziStyled } from "../../styles/pages";
import { useTranslation } from "react-i18next";
import DataContext from "../../context/dataContext";

function GuzellikMerkezi() {
  const { t } = useTranslation();
  const dataContext = useContext(DataContext);
  const { openHandleState, guzellikMerkeziState, getGuzellikMerkezi } =
    dataContext;

  useEffect(() => {
    getGuzellikMerkezi();
    // eslint-disable-next-line
  }, []);
  return (
    <GuzellikMerkeziStyled>
      <div
        className='masthead'
        style={{
          backgroundImage:
            guzellikMerkeziState &&
            `url(${
              process.env.REACT_APP_API_URL +
              guzellikMerkeziState[0]?.header_image?.url
            })`,
        }}
      >
        <h1>{guzellikMerkeziState && guzellikMerkeziState[0]?.header_title}</h1>
      </div>

      <div className='content'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <ul>
                <li>{t("Dip_liner")}</li>
                <li>{t("Kaş_alımı")}</li>
                <li>{t("Kaş_mezoterapi")}</li>
                <li>{t("Kaş_microbleyding")}</li>
              </ul>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <ul>
                <li>{t("İpek_kirpik")}</li>
                <li>{t("Kirpik_lifting")}</li>
                <li>{t("Cilt_bakımı")}</li>
                <li>{t("Cilt_bakım")}</li>
              </ul>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <ul>
                <li>{t("Lazer_epilasyon")}</li>
                <li>{t("Zayıflama_patleri")}</li>
                <li>{t("Masaj")}</li>
                <li>{t("Profesyonel_makyaj")}</li>
              </ul>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <ul>
                <li>{t("Gelin_makyajı")}</li>
                <li>{t("Manikür")}</li>
                <li>{t("Pedikür")}</li>
                <li>{t("Detox_programları")}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='güzellik-images'>
          <div className='container'>
            <div className='row '>
              {guzellikMerkeziState &&
                guzellikMerkeziState[0]?.beauty_photos.map((item, index) => (
                  <div className='col-sm-12 col-md-6 col-lg-3' key={index}>
                    <img
                      src={process.env.REACT_APP_API_URL + item?.image?.url}
                      alt='güzellik merkezi'
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className='container'>
          <button
            className='appointment-button'
            onClick={() => openHandleState("block")}
          >
            {t("GET_APPOINTMENT")}
          </button>
        </div>
      </div>
    </GuzellikMerkeziStyled>
  );
}

export default GuzellikMerkezi;
