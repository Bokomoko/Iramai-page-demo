import React, { useState } from 'react';
interface Testimonial {
  image: string;
  name: string;
  jobTitle: String;
  country: string;
  text: String;
}

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

export default function TuringTestimonialCarousel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const { listOfTestimonials } = props;

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === listOfTestimonials.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? listOfTestimonials.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = listOfTestimonials.map((aTestimonial: Testimonial, index) => {
    return (
      <CarouselItem
        className="testimonialitem"
        tag="div"
        key={index}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={aTestimonial.image} className="testimonialpicture"></img>
        <h3>{aTestimonial.name},{aTestimonial.country}</h3>
        <h4>{aTestimonial.jobTitle}</h4>
        <q>{aTestimonial.text} </q>
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`
          .carousel-control-right {
            color : black;
          }

          .testimonialitem {
            width : 80%;
            padding-left : 40px;
            heigth : auto;
            margin : 20px;
          }
          .testimonialpicture {
            width: 100px;
            heigth : 100px;
            border-radius : 50%;
          }

          .testimonialbox {
            text-align : center;
            margin : auto;
            width : 80%;
            max-width: 
          }

          .arrows {
            margin-top : 60px;
            width: 10%;
            height : 60px;
            background-color : grey;
          }

        `}
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        className="testimonialbox"
      >
        {slides}
        <CarouselControl
          className="arrows"
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          className="arrows"
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}
