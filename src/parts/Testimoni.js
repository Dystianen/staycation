import React from 'react';
import Fade from 'react-reveal/Fade';
import Star from '../elements/star';
import Button from '../elements/Button';
import TestimonyAccent from '../assets/images/frame-testimonial.png';

export default function Testimoni({ data }) {
  return (
    <Fade bottom>
      <section className='container'>
        <div className='row' style={{ alignItems: 'center' }}>
          <div className='col-auto' style={{ marginRight: 70 }}>
            <div className='testimonial-hero' style={{ margin: `30px 0 0 30px` }}>
              <img src={data.imageUrl} alt='testimonial' className='position-absolute' style={{ zIndex: 1 }} />
              <img src={TestimonyAccent} alt='testimonial frame' className='position-absolute' style={{ margin: '-30px 0 0 -30px' }} />
            </div>
          </div>
          <div className='col-6'>
            <h4 style={{ marginBottom: 60 }}>{data.name}</h4>
            <Star value={data.rate} width={35} height={35} spacing={4}></Star>
            <h5 className='h2 font-weight-light line-height-2 my-3'>{data.content}</h5>
            <h6 style={{ color: '#adb5bd' }}>
              {data.familyName}, {data.familyOccupation}
            </h6>
            <Button className='btn btn-primary px-5' style={{ marginTop: 40 }} hasShadow type='link' href={`/testimonial/${data._id}`}>
              Read Their Story
            </Button>
          </div>
        </div>
      </section>
    </Fade>
  );
}
