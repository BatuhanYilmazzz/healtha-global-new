import React from 'react';
import { AboutUsStyled } from '../../styles/pages';
import { useTranslation } from 'react-i18next';

function AboutUs() {
  const { t } = useTranslation();

  return (
    <AboutUsStyled>
      <div
        className='masthead'
        style={{ backgroundImage: `url(/images/about-us/aboutus.jpg)` }}
      >
        <h1>{t('ABOUT_US')}</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>{t('WHO_WE_ARE')}</h1>
            <p>{t('WHO_WE_ARE_DESC')}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h1>{t('OUR_MISSION')}</h1>
            <p>{t('OUR_MISSION_DESC')}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h1>{t('OUR_VISION')}</h1>
            <p>{t('OUR_VISION_DESC')}</p>
          </div>
        </div>
      </div>
    </AboutUsStyled>
  );
}

export default AboutUs;
