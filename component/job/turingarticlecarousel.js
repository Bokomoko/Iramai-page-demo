import { DirectiveLocation } from 'graphql';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';
import styles from './turingarticlecarousel.module.css';

export default function TuringArticleCarousel(props) {
  const { listOfArticles } = props;

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const rightArrow = <span className={styles.rarrow}> ⇨ </span>;
  const sitesLogos = listOfArticles.map((oneArticle, index) => {
    return (
      <Figure key={'img-' + index}>
        <Figure.Image src={oneArticle.sitelogo} />
      </Figure>
    );
  });

  const turingNextArrow = (
    <span aria-hidden="true" className={styles.carouselarrow}>
      ❯
    </span>
  );

  const turingPreviousArrow = (
    <span aria-hidden="true" className={styles.carouselarrow}>
      ❮
    </span>
  );
  return (
    <div className={styles.turingcarousel}>
      <Carousel
        controls={true}
        indicators={true}
        className={styles.carouselbox}
        activeIndex={index}
        interval={15000}
        onSelect={handleSelect}
        nextIcon={turingNextArrow}
        prevIcon={turingPreviousArrow}
        fade={true}
        slide={false}
      >
        {listOfArticles.map((oneArticle, index) => {
          return (
            <Carousel.Item key={'article-' + index}>
              <div className={styles.itembox}>
                <q>{oneArticle.quote}</q>
                <br />
                <a href={oneArticle.articleUrl}>Read Article</a>
                <Carousel.Caption>indicator</Carousel.Caption>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className={styles.logoboxes}>{sitesLogos}</div>
    </div>
  );
}
