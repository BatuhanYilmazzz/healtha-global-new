import React, { useContext } from 'react';
import { ObeziteMetabolikCerrahiStyled } from '../../styles/pages';
import { useTranslation } from 'react-i18next';
import DataContext from '../../context/dataContext';
function ObeziteMetabolikCerrahi() {
  const { t } = useTranslation();
  const dataContext = useContext(DataContext);
  const { openHandleState } = dataContext;

  return (
    <ObeziteMetabolikCerrahiStyled>
      <div
        className='masthead'
        style={{
          backgroundImage: `url(/images/obezite-metabolik-cerrahi/obezitemetabolikcerrahi.jpg)`,
        }}
      >
        <h1>{t('OBEZITE_METABOLİK_CERRAHI')}</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col content'>
            <p className='comment'>{t('OBEZITE_METABOLİK_CERRAHI_DESC')}</p>
            <div className='row'>
              <div className='col-sm-12 col-md-6'>
                <img
                  src='/images/obezite-metabolik-cerrahi/obezite.jpg'
                  alt={t('OBEZITE_METABOLİK_CERRAHI')}
                />
              </div>
              <div className='col-sm-12 col-md-6'>
                <ul>
                  <li>{t('Sleeve_Gastrektomi')}</li>
                  <li>{t('Gastrik_By-Pass')}</li>
                  <li>{t('Transit_bipartisyon')}</li>
                  <li>{t('Diverted_ileal_interpozisyon')}</li>
                  <li>{t('Non-Diverted_ileal_interpozisyon')}</li>
                  <li>{t('Sadi-S')}</li>
                  <li>{t('Kolorektal_kanser_cerrahisi')}</li>
                  <li>{t('Kolosistektomi')}</li>
                  <li>{t('Tiroidektomi')}</li>
                  <li>{t('Hemoroid_Cerrahisi')}</li>
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
    </ObeziteMetabolikCerrahiStyled>
  );
}

export default ObeziteMetabolikCerrahi;
