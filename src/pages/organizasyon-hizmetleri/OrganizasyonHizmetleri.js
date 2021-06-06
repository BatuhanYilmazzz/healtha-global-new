import React, { useContext } from 'react';
import { OrganizasyonHizmetleriStyled } from '../../styles/pages';
import { useTranslation } from 'react-i18next';
import DataContext from '../../context/dataContext';
const OrganizasyonHizmetleri = () => {
  const { t } = useTranslation();
  const dataContext = useContext(DataContext);
  const { openHandleState } = dataContext;

  return (
    <OrganizasyonHizmetleriStyled>
      <div
        className='masthead'
        style={{
          backgroundImage: `url(/images/organizasyon-hizmetleri/organizasyonhizmetleri.jpg)`,
        }}
      >
        <h1>{t('ORGANİZASYON_HIZMETLERİ')}</h1>
      </div>

      <div className='content'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h4>{t('SURGERY_PLANNING_DESC')}</h4>
            </div>
          </div>
        </div>

        <div className='organization-images'>
          <div className='container'>
            <div className='row '>
              <div className='col-sm-12 col-md-6 col-lg-3'>
                <img
                  src='/images/organizasyon-hizmetleri/organizasyonhizmetleri1.jpg'
                  alt='güzellik merkezi'
                />
              </div>
              <div className='col-sm-12 col-md-6 col-lg-3'>
                <img
                  src='/images/organizasyon-hizmetleri/organizasyonhizmetleri2.jpg'
                  alt='güzellik merkezi'
                />
              </div>
              <div className='col-sm-12 col-md-6 col-lg-3'>
                <img
                  src='/images/organizasyon-hizmetleri/organizasyonhizmetleri3.jpg'
                  alt='güzellik merkezi'
                />
              </div>
              <div className='col-sm-12 col-md-6 col-lg-3'>
                <img
                  src='/images/organizasyon-hizmetleri/organizasyonhizmetleri4.jpg'
                  alt='güzellik merkezi'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <p>{t('ORGANIZATION_DESC')}</p>
          <p>{t('ORGANIZATION_DESC_2')}</p>
          <button
            className='appointment-button'
            onClick={() => openHandleState('block')}
          >
            {t('GET_APPOINTMENT')}
          </button>
        </div>
      </div>
    </OrganizasyonHizmetleriStyled>
  );
};

export default OrganizasyonHizmetleri;
