import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';
import styles from './iramaiarticlecarousel.module.css';

export default function IramaiArticleCarousel(props) {
  const { listOfArticles } = props;

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const sitesLogos = listOfArticles.map((oneArticle, index) => {
    return (
      <Figure key={'img-' + index}>
        <Figure.Image src={oneArticle.sitelogo} />
      </Figure>
    );
  });

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
  return (
    <div className={styles.iramaicarousel}>
      <Carousel
        controls={true}
        indicators={true}
        className={styles.carouselbox}
        activeIndex={index}
        interval={15000}
        onSelect={handleSelect}
        nextIcon={iramaiNextArrow}
        prevIcon={iramaiPreviousArrow}
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
