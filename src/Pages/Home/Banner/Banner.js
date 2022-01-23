import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
              <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="http://medicare.bold-themes.com/pshychiatrist/wp-content/uploads/sites/7/2016/03/bryan-hero-01.jpg"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h2>The right help at the right time</h2>
                      <p className='w-75 mx-auto'>With her professional experience lasting for more than 25 years, Dr Joanna Bryan is the right call for patients suffering from depression, anqiety or longing for psychiatrist assistance.</p>
                    </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="http://medicare.bold-themes.com/pshychiatrist/wp-content/uploads/sites/7/2016/03/bryan-hero-02.jpg"
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h2>Happy & fulfilling marriage yet again</h2>
                      <p className='w-5 mx-auto'>Dr Joanna Bryan’s professional counselling also includes marriage counselling, advising and solving marriage problems, so you can enjoy it with your partner for a long time.</p>
                    </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;