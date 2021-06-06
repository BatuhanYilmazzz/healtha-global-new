import React, { useContext } from 'react';
import { AgızDisSaglıgıStyled } from '../../styles/pages';
import { useTranslation } from 'react-i18next';
import DataContext from '../../context/dataContext';

function AgızDisSaglıgı() {
  const { t } = useTranslation();
  const dataContext = useContext(DataContext);
  const { openHandleState } = dataContext;
  return (
    <AgızDisSaglıgıStyled>
      <div
        className='masthead'
        style={{
          backgroundImage: `url(/images/agız-dis/agızvedis.jpg)`,
        }}
      >
        <h1>{t('AĞIZ_VE_DİŞ_SAGLIGI')}</h1>
      </div>
      <div className='row'>
        <div className='col-12 content'>
          <div className='container'>
            <p className='comment'>{t('AĞIZ_VE_DİŞ_SAGLIGI_DESC')}</p>
            <div className='row'>
              <div className='col-sm-12 col-md-6'>
                <img
                  className='w-100'
                  src='/images/agız-dis/agızvedıs2.jpg'
                  alt={t('AĞIZ_VE_DİŞ_SAGLIGI')}
                />
                <img
                  className='w-100'
                  src='/images/agız-dis/agızvedıs3.jpg'
                  alt={t('AĞIZ_VE_DİŞ_SAGLIGI')}
                />
              </div>
              <div className='col-sm-12 col-md-6'>
                <ul>
                  <li>{t('Porselen_lamina')}</li>
                  <li>{t('Kompozit_lamina')}</li>
                  <li>{t('Zirkonyum')} </li>
                  <li>{t('E_max')}</li>
                  <li>{t('Beyazlatma')}</li>
                  <li>{t('Ağız_çene_cerrahisi')}</li>
                  <li>{t('Estetik_diş_hekimliği')}</li>
                  <li>{t('Protez')}</li>
                  <li>{t('Ortodonti')}</li>
                  <li>{t('Koruyucu_diş_tedavisi')}</li>
                </ul>
                <button
                  className='appointment-button'
                  onClick={() => openHandleState('block')}
                >
                  {t('GET_APPOINTMENT')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AgızDisSaglıgıStyled>
  );
}

export default AgızDisSaglıgı;
