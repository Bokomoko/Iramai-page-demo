import React from 'react';

import IramaiArticleCarousel from '../component/job/iramaiarticlecarousel';

export default function Test2() {
  const jobArticles = [
    {
      quote:
        'As remote work continues to solidify its place as a critical aspect of how business exist these days, a startup ...',
      articleUrl:
        'https://www.mckinsey.com/featured-insights/future-of-work/whats-next-for-remote-work-an-analysis-of-2000-tasks-800-jobs-and-nine-countries',
      sitelogo: './logos/TechCrunch logo.svg',
    },
    {
      quote:
        'As each state has its own rules on taxing remote workers, issues of lost of tax income for governments may be ...',
      articleUrl:
        'https://www.nytimes.com/2021/03/12/your-money/taxes/2020-taxes-work-from-home.html',
      sitelogo: './logos/Fast Company logo.svg',
    },
    {
      quote:
        'The quick and smart brown fox jumps over the lazy dog. And this simple gestures started a war ...',
      articleUrl: 'https://www.rover.com/blog/the-truth-about-dogs-foxes-in/',
      sitelogo: './logos/Entrepeneur logo.svg',
    },
    {
      quote:
        '"Never was so much owed by so many to so few" was a wartime speech made by the British prime minister ...',
      articleUrl: 'https://www.rover.com/blog/the-truth-about-dogs-foxes-in/',
      sitelogo: './logos/Forbes logo.svg',
    },
    {
      quote:
        'A small step for a man, a giant leap for mankind. With these words, Neil Armstrong ...',
      articleUrl: 'https://www.rover.com/blog/the-truth-about-dogs-foxes-in/',
      sitelogo: './logos/The Information logo.svg',
    },
  ];
  return (
    <>
      <IramaiArticleCarousel listOfArticles={jobArticles} />
    </>
  );
}
