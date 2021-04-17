import React from 'react';

import WhyJoinIramai from '../component/job/whyjoiniramai';

export default function Test4() {
  const listOfReasons = [
    {
      title: 'Work from anywhere',
      text:
        'We believe that talent is universal and opportunity should be too. Work from wherever you want.',
      icon: './icons/globe.svg',
    },
    {
      title: 'Better salary',
      text:
        'Turing recommends compensation for developers that far exceed what they would make in their local economies.',
      icon: './icons/dolarsign.svg',
    },
    {
      title: 'Work-life balance',
      text:
        'We allow our engineers flexible working hours as work-life balance is an essential part of our developers wellbeing.',
      icon: './icons/family.svg',
    },
    {
      title: 'Community',
      text:
        'Be a part of an exclusive, global network of top tech leads, engineering managers and software engineers.',
      icon: './icons/globe.svg',
    },
  ];
  return (
    <>
      <WhyJoinIramai reasons={listOfReasons} />
    </>
  );
}
