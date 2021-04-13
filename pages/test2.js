// simple page to test new components

// as of april 04 -> New props on Cover component

import React from 'react';

// Turing site react components
import TuringTxtCarousel from '../component/job/turingtxtcarousel';

import styled from 'styled-components';

// import { getAllJobs } from './jobs/job_data';

export default function Test2() {
  const jobArticles = [
    {
      quote:
        'As remote work continues to solidify its place as a critical aspect of how business exist these days, a startup ...',
      articleUrl:
        'https:https://www.mckinsey.com/featured-insights/future-of-work/whats-next-for-remote-work-an-analysis-of-2000-tasks-800-jobs-and-nine-countries',
    },
    {
      quote:
        'As each state has its own rules on taxing remote workers, issues of lost of tax income for governments may be ...',
      articleUrl:
        'https://www.nytimes.com/2021/03/12/your-money/taxes/2020-taxes-work-from-home.html',
    },
    {
      quote:
        'The quick and smart brown fox jumps over the lazy dog. And this simple gestures started a war ...',
      articleUrl: 'https://www.rover.com/blog/the-truth-about-dogs-foxes-in/',
    },
  ];

  return (
    <>
      <TuringTxtCarousel listOfArticles={jobArticles} />
    </>
  );
}
