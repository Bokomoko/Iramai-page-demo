import React from 'react';

import LatestPosts from '../component/job/latestposts';

export default function Test5() {
  const listOfPosts = [
    {
      title:
        'Iramai nabs $32M more for an AI-based platform to source and manage engineers remotely',
      text:
        'As remote work continues to solidify its place as a critical aspect of how businesses exist these days, a',
      image: './icons/globe.svg',
      link: '#',
    },
    {
      title:
        'Iramai places 8 out of the 10 of nominees for the Nobel Prize of Sofware development',
      text:
        'In a unmistakable show of powerful management skill, Iramai is the favoriter for this years Nobel prize winners',
      image: './icons/globe.svg',
      link: '#',
    },
    {
      title:
        'COVID-19 fight now will count with the best software engineers by Iramai',
      text:
        'The humanity effort to eradicate the COVID-19 just received a major push when Iramai ...',
      image: './icons/globe.svg',
      link: '#',
    },
  ];
  return (
    <>
      <LatestPosts posts={listOfPosts} />
    </>
  );
}
