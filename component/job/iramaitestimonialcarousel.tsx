interface Testimonial {
  image: string;
  name: string;
  jobTitle: String;
  country: string;
  text: String;
}
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './iramaitestimonialcarousel.module.css';

export default function IramaiTestimonialCarousel(props) {
  const [index, setIndex] = useState(0);
  const { listOfTestimonials } = props;

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const iramaiNextArrow = (
    <span aria-hidden={true} className={styles.carouselarrow}>
      ❯
    </span>
  );

  const iramaiPreviousArrow = (
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
        nextIcon={iramaiNextArrow}
        prevIcon={iramaiPreviousArrow}
        fade={true}
        slide={false}
      >
        {slides}
      </Carousel>
    </div >
  );
}
