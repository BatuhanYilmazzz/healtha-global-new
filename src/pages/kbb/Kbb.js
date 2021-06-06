import React, { useContext } from 'react';
import { KbbStyled } from '../../styles/pages';
import { useTranslation } from 'react-i18next';
import DataContext from '../../context/dataContext';
function Kbb() {
  const { t } = useTranslation();
  const dataContext = useContext(DataContext);
  const { openHandleState } = dataContext;

  return (
    <KbbStyled>
      <div
        className='masthead'
        style={{
          backgroundImage: `url(/images/kbb/kbb.jpg)`,
        }}
      >
        <h1>{t('KBB')}</h1>
      </div>
      <div className='container'>
        <div className='content'>
          <div className='row'>
            <div className='col-sm-12 col-md-6'>
              <img
                className='w-100'
                src='/images/kbb/kbb2.jpg'
                alt={t('KBB')}
              />
            </div>
            <div className='col-sm-12 col-md-6 py-3 py-md-0'>
              <ul>
                <li>{t('Septoplasti_ameliyatı')}</li>
                <li>{t('Tonsillektomi')}</li>
                <li>{t('Tonsillektomi_adenoidektomi')}</li>
                <li>{t('Adenoidektomi')}</li>
                <li>{t('Kulak_tüpü_ameliyatı')}</li>
                <li>{t('Timpanoplasti')}</li>
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
    </KbbStyled>
  );
}

export default Kbb;
