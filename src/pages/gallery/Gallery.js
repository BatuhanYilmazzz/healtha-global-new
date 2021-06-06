import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

///
const Gallery = () => {
  const { t } = useTranslation();
  const swiperimages = [
    '/images/galeri/HealthaGlobal1.jpg',
    '/images/galeri/HealthaGlobal2.jpg',
    '/images/galeri/HealthaGlobal3.jpg',
    '/images/galeri/HealthaGlobal4.jpg',
    '/images/galeri/HealthaGlobal5.jpg',
    '/images/galeri/HealthaGlobal6.jpg',
    '/images/galeri/HealthaGlobal7.jpg',
    '/images/galeri/HealthaGlobal8.jpg',
    '/images/galeri/HealthaGlobal9.jpg',
    '/images/galeri/HealthaGlobal10.jpg',
    '/images/galeri/HealthaGlobal11.jpg',
    '/images/galeri/HealthaGlobal12.jpg',
    '/images/galeri/HealthaGlobal13.jpg',
    '/images/galeri/HealthaGlobal14.jpg',
    '/images/galeri/HealthaGlobal15.jpg',
    '/images/galeri/HealthaGlobal16.jpg',
    '/images/galeri/HealthaGlobal17.jpg',
    '/images/galeri/HealthaGlobal18.jpg',
    '/images/galeri/HealthaGlobal19.jpg',
    '/images/galeri/HealthaGlobal20.jpg',
    '/images/galeri/HealthaGlobal21.jpg',
    '/images/galeri/HealthaGlobal22.jpg',
    '/images/galeri/HealthaGlobal23.jpg',
    '/images/galeri/HealthaGlobal24.jpg',
  ];
  // images && images.map((e) => process.env.REACT_APP_API_URL + e.url);
  const [state, setState] = useState({
    photoIndex: 0,
    isOpen: false,
  });
  const { photoIndex, isOpen } = state;
  return (
    <Fragment>
      <div
        className='masthead'
        style={{ backgroundImage: `url(/images/galeri/gallery.jpg)` }}
      >
        <h1>{t('GALERİ_H1')}</h1>
      </div>
      <div className='gallery'>
        <div className='content'>
          <div className='container'>
            <div className='row'>
              {/*  <img
              className='swiper__image'
              src={images && process.env.REACT_APP_API_URL + images[2].url}
              alt=''
              onClick={() => setState({ ...state, isOpen: true })}
            />*/}
              {swiperimages.map((item, index) => (
                <div className='col-sm-12 col-md-6 col-lg-3 mb-4' key={index}>
                  <img
                    src={item}
                    alt={item}
                    onClick={() => setState({ ...state, isOpen: true })}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        {isOpen && (
          <Lightbox
            mainSrc={swiperimages[photoIndex]}
            nextSrc={swiperimages[(photoIndex + 1) % swiperimages.length]}
            prevSrc={
              swiperimages[
                (photoIndex + swiperimages.length - 1) % swiperimages.length
              ]
            }
            onCloseRequest={() => setState({ ...state, isOpen: false })}
            onMovePrevRequest={() =>
              setState({
                ...state,
                photoIndex:
                  (photoIndex + swiperimages.length - 1) % swiperimages.length,
              })
            }
            onMoveNextRequest={() =>
              setState({
                ...state,
                photoIndex: (photoIndex + 1) % swiperimages.length,
              })
            }
          />
        )}
      </div>
    </Fragment>
  );
};

export default Gallery;
