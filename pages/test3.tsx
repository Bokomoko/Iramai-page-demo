import React from 'react';
import SeeAlso from '../component/job/seealso';
interface SeeAlso {
  jobTitle: string
  jobPage: string
}

interface listOfSeeAlso {
  listOfSA: Array<SeeAlso>
}



export default function Test3() {
  const basedOnCareer = [
    { jobTitle: 'Engineer', jobPage: "#" },
    { jobTitle: 'Architect', jobPage: "#" },
    { jobTitle: 'Tech Lead', jobPage: "#" },
    { jobTitle: 'Tech Lead Manager', jobPage: "#" },
    { jobTitle: 'Engineer Director', jobPage: "#" },
    { jobTitle: 'Senior Engineer', jobPage: "#" },
    { jobTitle: 'Senior Architect', jobPage: "#" },
    { jobTitle: 'Senior Tech Lead', jobPage: "#" },
    { jobTitle: 'Senior Tech Lead Manager', jobPage: "#" },
    { jobTitle: 'VP of Engineering', jobPage: "#" },
  ];

  return (
    <SeeAlso title="Based on your career trajectory"
      listOfJobs={basedOnCareer}
      color="green" />
  );
}
