import React from 'react';
import Fade from 'react-reveal/Fade';
import ImageHero from '../assets/images/hero.png';
import IconCities from '../assets/images/icons/ic_cities.svg';
import IconTraveler from '../assets/images/icons/ic_traveler.svg';
import IconTreasure from '../assets/images/icons/ic_treasure.svg';
import numberFormat from '../utilitas/defaultFormatNumber';

// components
import Button from '../elements/Button';

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostpicked.current.offsetTop - 30,
      behavior: 'smooth',
    });
  }

  return (
    <Fade bottom>
      <section className='container pt-4'>
        <div className='row align-items-center'>
          <div className='col pr-5' style={{ width: 530 }}>
            <h1 className='line-height-1 mb-3' style={{ fontWeight: 750, color: '#152C5B' }}>
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p className='mb-4 font-weight-light text-gray-500' style={{ width: '55%', color: 'grey', lineHeight: '170%' }}>
              We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
            </p>
            <Button className='btn btn-primary btn-shadow px-5' hasShadow isPrimary onClick={showMostPicked}>
              Show Me Now
            </Button>

            <div className='row' style={{ marginTop: '80px' }}>
              <div className='col-auto' style={{ marginRight: '35px' }}>
                <img width='36' heigth='36' src={IconTraveler} alt={`${props.data.travelers} Travelers`} />
                <h6 className='mt-3'>
                  {numberFormat(props.data.travelers)}{' '}
                  <span className='font-weight-light' style={{ color: 'grey' }}>
                    travelers
                  </span>
                </h6>
              </div>

              <div className='col-auto' style={{ marginRight: '35px' }}>
                <img width='36' heigth='36' src={IconTreasure} alt={`${props.data.treasures} Travelers`} />
                <h6 className='mt-3'>
                  {numberFormat(props.data.treasures)}{' '}
                  <span className='font-weight-light' style={{ color: 'grey' }}>
                    treasures
                  </span>
                </h6>
              </div>

              <div className='col-auto'>
                <img width='36' heigth='36' src={IconCities} alt={`${props.data.cities} Cities`} />
                <h6 className='mt-3'>
                  {numberFormat(props.data.cities)}{' '}
                  <span className='font-weight-light' style={{ color: 'grey' }}>
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>

          <div className='col-6 ps-5'>
            <div style={{ width: '520px', height: '410px' }}>
              <img
                src={ImageHero}
                alt='Room with couches'
                className='image-fluid position-absolute'
                style={{
                  margin: '-15px 0 0 -30px',
                  zIndex: 1,
                  width: '550px',
                  heigth: '458px !important',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
