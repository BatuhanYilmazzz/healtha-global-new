import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';

import { TestimonialsStyled } from '../../styles/pages';
function Testimonials() {
  const { t } = useTranslation();
  // Slider Settings
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    lazyLoad: true,
    cssEase: 'linear',
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <TestimonialsStyled>
      <div className='container'>
        <h1 className='text-center'>{t('WHY_AKSAN_HEALTH')}</h1>
        <Slider {...settings}>
          <div className='slider-item'>
            <div className='aligment'>
              <img src='/images/homepage/testimonial.jpg' alt='testimonials' />
              <h6>Olivia Smith Client</h6>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className='slider-item'>
            <div className='aligment'>
              <img src='/images/homepage/testimonial.jpg' alt='testimonials' />
              <h6>Olivia Smith Client</h6>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className='slider-item'>
            <div className='aligment'>
              <img src='/images/homepage/testimonial.jpg' alt='testimonials' />
              <h6>Olivia Smith Client</h6>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className='slider-item'>
            <div className='aligment'>
              <img src='/images/homepage/testimonial.jpg' alt='testimonials' />
              <h6>Olivia Smith Client</h6>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </Slider>
      </div>
    </TestimonialsStyled>
  );
}

export default Testimonials;
