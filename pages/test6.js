// prototype job detail page

import React from 'react';

// Iramai react components
import VideoBox from '../component/job/videobox.js';

export default function Test6() {
  return (
    <VideoBox
      devName={'Rob'}
      devCountry={'Brazil'}
      devJob={'Remote Developer'}
      devQuote={'I want to live by the sea'}
      devVideoLink={'https://www.youtube.com/embed/WEBniGcDVJs'}
    ></VideoBox>
  );
}
