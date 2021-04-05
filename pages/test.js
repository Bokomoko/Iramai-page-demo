// simple page to test new components

// as of april 04 -> New props on Cover component

import React from 'react';
import Cover from '../component/job/cover';
import FancyList from '../component/job/fancylist';
import styled from 'styled-components';

export default function Test() {
  const listOfResponsibilities = [
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

  const listOfRequirements = [
    'Bachelor´s/Master´s degree in Computer Science (or equivalent experience)',
    '3+ years of experience in web development(we make rare exceptions if you are highly skilled)',
    'Proficiency in React.js, Node.js, JavaScriipt, HTML and CSS',
    'Experience with REST APIs and third-party libraries',
    'Fluency in English and the communications skills of effortlessly collaborate with engineering managers at US software companies',
    'The ability to work full-time (40 hours/week0 concurrently with US time zones for a minimum of 4 hous/day',
  ];

  const ThreeColumns = styled.div`
    display: flex;
    width: 100%;
  `;

  const CenterColumn = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 100px;
    width: 30%;
  `;

  return (
    <>
      <Cover
        cover_title="Remote React/Node Developer Jobs"
        description="At Turing, we are looking for a Full Stack Developer specializing in React and Node.js who will be responsible for the entire web development process to deliver highly scalable, customer-centric, and performant web applications."
        cover_cta="Apply as React/Node Developer"
        cta_url="page for applying to job"
        image_cover="../../public/img/Hero image.png"
        image_alt_text="a guy looking to a LED monitor"
      />
      <ThreeColumns>
        <CenterColumn>
          <FancyList
            listTitle="Job responsibilities"
            listItems={listOfResponsibilities}
          />
          <FancyList
            listTitle="Minimum requirements"
            listItems={listOfRequirements}
          />
        </CenterColumn>
      </ThreeColumns>
    </>
  );
}
