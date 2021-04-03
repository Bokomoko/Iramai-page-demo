// simple page to test new components

// as of april 03 -> Cover component

import React from 'react';
import Cover from '../component/job/cover';

export default function Test() {
  return (
    <Cover
      cover_title="Remote React/Node Developer Jobs"
      description="At Turing, we are looking for a Full Stack Developer specializing in React and Node.js who will be responsible for the entire web development process to deliver highly scalable, customer-centric, and performant applications"
      cover_cta="Apply as React/Node Developer"
      cta_url="/home"
    />
  );
}
