interface Testimonial {
  image: string;
  name: string;
  jobTitle: String;
  country: string;
  text: String;
}
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './turingtestimonialcarousel.module.css';

export default function TuringTestimonialCarousel(props) {
  const [index, setIndex] = useState(0);
  const { listOfTestimonials } = props;

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const turingNextArrow = (
    <span aria-hidden={true} className={styles.carouselarrow}>
      ❯
    </span>
  );

  const turingPreviousArrow = (
    <span aria-hidden={true} className={styles.carouselarrow}>
      ❮
    </span>
  );



  const slides = listOfTestimonials.map((aTestimonial: Testimonial, index) => {
    return (
      <Carousel.Item
        key={'tstm-' + index}
      >
        <div className={styles.testimonialitem}>
          <img src={aTestimonial.image} className={styles.testimonialpicture} ></img>
          <h3>{aTestimonial.name},{aTestimonial.country}</h3>
          <h4>{aTestimonial.jobTitle}</h4>
          <q>{aTestimonial.text} </q>
        </div>
      </Carousel.Item>
    );
  });

  return (
    <div>
      <Carousel
        controls={true}
        indicators={false}
        className={styles.carouselbox}
        activeIndex={index}
        interval={3000}
        onSelect={handleSelect}
        nextIcon={turingNextArrow}
        prevIcon={turingPreviousArrow}
        fade={true}
        slide={false}
      >
        {slides}
      </Carousel>
    </div >
  );
}
