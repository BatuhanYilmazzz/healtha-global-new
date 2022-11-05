import React, { useContext, useEffect } from "react";
import { KbbStyled } from "../../styles/pages";
import { useTranslation } from "react-i18next";
import DataContext from "../../context/dataContext";
import Markdown from "markdown-to-jsx";
import { images } from "../../constant/images";

function Kbb() {
  const { t } = useTranslation();
  const dataContext = useContext(DataContext);
  const { openHandleState, getKbb, kbbState } = dataContext;

  useEffect(() => {
    getKbb();
    // eslint-disable-next-line
  }, []);

  return (
    <KbbStyled>
      <div
        className='masthead'
        style={{
          backgroundImage:
            kbbState &&
            `url(${
              /*   process.env.REACT_APP_API_URL + kbbState[0]?.header_image?.url */ images
                .kbb.header
            })`,
        }}
      >
        <h1>{kbbState && kbbState[0]?.header_title}</h1>
      </div>
      <div className='row'>
        <div className='col-12 content'>
          <div className='container'>
            <p className='comment'>
              {kbbState && kbbState[0]?.main_part.description && (
                <Markdown>{kbbState[0]?.main_part.description}</Markdown>
              )}
            </p>
            <div className='row'>
              <div className='col-sm-12 col-md-6'>
                {kbbState && kbbState[0]?.main_part?.img_1 && (
                  <img
                    className='w-100'
                    src={
                      /*  process.env.REACT_APP_API_URL +
                      kbbState[0]?.main_part?.img_1.url */ images.kbb.images[0]
                    }
                    alt=''
                  />
                )}
                {kbbState && kbbState[0]?.main_part?.img_2 && (
                  <img
                    className='w-100'
                    src={
                      process.env.REACT_APP_API_URL +
                      kbbState[0]?.main_part?.img_2.url
                    }
                    alt=''
                  />
                )}
              </div>
              <div className='col-sm-12 col-md-6'>
                <ul>
                  <ul>
                    {kbbState && kbbState[0]?.main_part.topics && (
                      <Markdown>{kbbState[0]?.main_part.topics}</Markdown>
                    )}
                  </ul>
                </ul>
                <button
                  className='appointment-button'
                  onClick={() => openHandleState("block")}
                >
                  {t("GET_APPOINTMENT")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </KbbStyled>
  );
}

export default Kbb;
