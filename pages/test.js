// simple page to test new components

// as of april 04 -> New props on Cover component

import React from 'react';

// Turing site react components
import Cover from '../component/job/cover';
import FancyList from '../component/job/fancylist';
import TuringTxtCarousel from '../component/job/turingtxtcarousel.js';
import TuringTestimonialCarousel from '../component/job/turingtestimonialcarousel.tsx';

// standar libraries imports
import { Button } from 'react-bootstrap';
import styles from './test.module.css';

import { getAllJobs } from './jobs/job_data';

export default function Test() {
  const listOfResponsibilities = [
    'Design and build scalable APIs',
    'Write clean, efficient, and reusable code',
    'Develop highly efficient user interface components',
    'Analyze website performance and drive improvements',
    'Collaborate with cross-functional team members to design, develop, review and test applications',
    'Stay updated with emerging technologies and apply them to the operational activities in the organization',
    'Experience in cross-browser compatibility, and the responsive design of applications',
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

  const listOfSkills = [
    'Experience in cross-browser compatibility, and the responsive design of applications',
    'Proficiency in code versioning tools, such as Git',
    'Expert understanding of server-side logic and front-end performance optimization',
    'Experience in Unix/Linux environments, including basic commands and scripting',
  ];

  const testimonialImage = 'https://randomuser.me/api/portraits/men/35.jpg';
  const testimonialName = 'Hadji';
  const testimonialCountry = 'Algeria';
  const testimonialJobTitle = 'Fullstack Developer';
  const testimonialText = `
  I have previously worked at oDeks and Elance (now popularly known as Upwork)
   for more than 5 years, but the pivotal moment in my career came when i 
   joined the global team of Turing remote engineers in 2020. 
   I did not imagine that the jobs I was offered would come with 
   such stability and prominence. 
   Apply to be one of among many Turing developers. 
   It wil change your life, like it did mine!`;

  const testmList = [
    {
      image: 'https://randomuser.me/api/portraits/women/75.jpg',
      name: 'Chandra',
      country: 'Kafiristan',
      jobTitle: 'Full Stack Dev',
      text:
        'In Turing I´ve found purpose for my life. I didn´t walk quietly into that night',
    },
    {
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      name: 'Percival',
      country: 'Camelot',
      jobTitle: 'Knight in armor',
      text: 'Don´t ask who the Graal serves. It serves you, Mylord',
    },
    {
      image: 'https://randomuser.me/api/portraits/men/85.jpg',
      name: 'Thor',
      country: 'Asgard',
      jobTitle: 'Son of the boss',
      text:
        'If neither money nor violence solved the issue probably not enough was applied',
    },
  ];

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
    <div className={styles.gridcontainer}>
      <div className={styles.cover}>
        <Cover
          cover_title="Remote React/Node Developer Jobs"
          description="At Turing, we are looking for a Full Stack Developer specializing in React and Node.js who will be responsible for the entire web development process to deliver highly scalable, customer-centric, and performant web applications."
          cover_cta="Apply as React/Node Developer"
          cta_url="page for applying to job"
          image_cover="../../public/img/cover1.png"
          image_alt_text="a guy looking to a LED monitor"
        />
      </div>
      <div className={styles.firstcolumn}>
        <FancyList
          listTitle="Job responsibilities"
          listItems={listOfResponsibilities}
        />
        <FancyList
          listTitle="Minimum requirements"
          listItems={listOfRequirements}
        />
        <FancyList listTitle="Preferred Skills" listItems={listOfSkills} />
        <Button>"Apply as React/Node Developer"</Button>

        <TuringTxtCarousel listOfArticles={jobArticles} />
        <TuringTestimonialCarousel listOfTestimonials={testmList} />
      </div>
    </div>
  );
}
