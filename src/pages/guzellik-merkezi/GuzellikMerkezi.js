import React, { useContext } from 'react';
import { GuzellikMerkeziStyled } from '../../styles/pages';
import { useTranslation } from 'react-i18next';
import DataContext from '../../context/dataContext';

function GuzellikMerkezi() {
  const { t } = useTranslation();
  const dataContext = useContext(DataContext);
  const { openHandleState } = dataContext;
  return (
    <GuzellikMerkeziStyled>
      <div
        className='masthead'
        style={{
          backgroundImage: `url(/images/güzellik-merkezi/güzellikmerkezi.jpg)`,
        }}
      >
        <h1>{t('GUZELLİK_MERKEZİ')}</h1>
      </div>

      <div className='content'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <ul>
                <li>{t('Dip_liner')}</li>
                <li>{t('Kaş_alımı')}</li>
                <li>{t('Kaş_mezoterapi')}</li>
                <li>{t('Kaş_microbleyding')}</li>
              </ul>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <ul>
                <li>{t('İpek_kirpik')}</li>
                <li>{t('Kirpik_lifting')}</li>
                <li>{t('Cilt_bakımı')}</li>
                <li>{t('Cilt_bakım')}</li>
              </ul>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <ul>
                <li>{t('Lazer_epilasyon')}</li>
                <li>{t('Zayıflama_patleri')}</li>
                <li>{t('Masaj')}</li>
                <li>{t('Profesyonel_makyaj')}</li>
              </ul>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <ul>
                <li>{t('Gelin_makyajı')}</li>
                <li>{t('Manikür')}</li>
                <li>{t('Pedikür')}</li>
                <li>{t('Detox_programları')}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='güzellik-images'>
          <div className='container'>
            <div className='row '>
              <div className='col-sm-12 col-md-6 col-lg-3'>
                <img
                  src='/images/güzellik-merkezi/guzellık1.jpg'
                  alt='güzellik merkezi'
                />
              </div>
              <div className='col-sm-12 col-md-6 col-lg-3'>
                <img
                  src='/images/güzellik-merkezi/guzellık2.jpg'
                  alt='güzellik merkezi'
                />
              </div>
              <div className='col-sm-12 col-md-6 col-lg-3'>
                <img
                  src='/images/güzellik-merkezi/guzellık3.jpg'
                  alt='güzellik merkezi'
                />
              </div>
              <div className='col-sm-12 col-md-6 col-lg-3'>
                <img
                  src='/images/güzellik-merkezi/guzellık4.jpg'
                  alt='güzellik merkezi'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <button
            className='appointment-button'
            onClick={() => openHandleState('block')}
          >
            {t('GET_APPOINTMENT')}
          </button>
        </div>
      </div>
    </GuzellikMerkeziStyled>
  );
}

export default GuzellikMerkezi;
