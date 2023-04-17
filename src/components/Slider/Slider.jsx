import React from "react";
import {Carousel} from 'react-bootstrap';
import sliderimg1 from "../../logo/blog-1.jpg";
import sliderimg2 from "../../logo/blog-2.jpg";
import sliderimg3 from "../../logo/blog-3.jpg";

const carousalContainer = (() => {
    return (
        <>
            <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sliderimg1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sliderimg2}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sliderimg3}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </>
    );

});

export default carousalContainer;