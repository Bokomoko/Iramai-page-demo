// simple page to test new components

// as of april 03 -> Responsabilities

import React from 'react';
import JobRespons from '../component/job/jobrespons';

export default function Test() {
  const listOfResponsabilities = [
    'Design and build scalable APIs',
    'Write clean, efficient, and reusable code',
    'Develop highly efficient user interface components',
    'Analyze website performance and drive improvements',
    'Collaborate with cross-functional team members to design, develop, review and test appcations',
    'Stay updated with emerging technologies and apply tm to the operational activities i the organization',
    'Experience in cross-browser compatibility, and the ponsive design of applications',
    'Proficiency in code versioning tools, such as Git',
    'Expert understanding of server-side logic and fron-end performance optimization',
    'Experience in Unix/Linux environments, including basic commands and scripting',
  ];

  return <JobRespons responsList={listOfResponsabilities} />;
}
