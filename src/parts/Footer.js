import React from 'react';
import Button from '../elements/Button';
import IconText from './IconText';

export default function Footer() {
  return (
    <footer className=''>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <IconText />
            <p className='brand-tagline'>We kaboom your beauty holiday instantly and memorable.</p>
          </div>
          <div className='col-2 me-5'>
            <h6 className='mt-2'>For Beginners</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <Button type='link' href='/register'>
                  New Account
                </Button>{' '}
                <br />
                <Button type='link' href='/properties'>
                  Start Booking a Room
                </Button>{' '}
                <br />
                <Button type='link' href='/use-payments'>
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className='col-2 me-5'>
            <h6 className='mt-2'>Explore Us</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <Button type='link' href='/careers'>
                  Our Careers
                </Button>{' '}
                <br />
                <Button type='link' href='/privacy'>
                  Privacy
                </Button>{' '}
                <br />
                <Button type='link' href='/term'>
                  Term & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className='col'>
            <h6 className='mt-2'>Connect Us</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <Button isExternal type='link' href='mailto:support@staycation.id'>
                  Support@staycation.id
                </Button>{' '}
                <br />
                <Button isExternal type='link' href='tel:+6281226473735'>
                  +6281336473735
                </Button>{' '}
                <br />
                <Button type='link' href='/use-payments'>
                  <span>Staycation, Jatibening, Bekasi</span>
                </Button>
              </li>
            </ul>
          </div>
          <div className='row'>
            <div className='col text-center copyright'>Copyright 2019 • All rights reserved • Staycation</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
