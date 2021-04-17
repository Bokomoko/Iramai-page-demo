import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

export default function IramaiTxtCarousel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const { listOfArticles } = props;

  const next = () => {
    const nextIndex =
      activeIndex === listOfArticles.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex =
      activeIndex === 0 ? listOfArticles.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const slides = listOfArticles.map((article, index) => {
    return (
      <CarouselItem
        className="itemslide"
        tag="div"
        key={index}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <q>{article.quote} </q>
        <br />
        <a href={article.articleUrl} target="_blank">
          Read article
        </a>
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`
          .itemslide {
            padding-top : 60px;
            padding-left : 40px;
            padding-right : 40px;
            margin-left: 20px;
            margin-right: 20px;
            width: auto;
            color : black;
            height: 200px;
            background: white;
          }

          .carouselbox {
            text-align : center;
            margin : auto;
            width : 90%;
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
        className="carouselbox"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
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
