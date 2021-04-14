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
  const basedOnYourRole = [
    { jobTitle: 'Fullstack', jobPage: "#" },
    { jobTitle: 'Frontend', jobPage: "#" },
    { jobTitle: 'Backend', jobPage: "#" },
    { jobTitle: 'Mobile', jobPage: "#" },
    { jobTitle: 'AI/ML', jobPage: "#" },
    { jobTitle: 'DevOps', jobPage: "#" },
  ];
  const basedOnYourSkills = [
    { jobTitle: 'React Native', jobPage: "#" },
    { jobTitle: 'Ruby on Rails', jobPage: "#" },
    { jobTitle: 'Python', jobPage: "#" },
    { jobTitle: 'PHP', jobPage: "#" },
    { jobTitle: 'Java', jobPage: "#" },
    { jobTitle: 'Vue.js', jobPage: "#" },
    { jobTitle: 'Golang', jobPage: "#" },
  ];

  return (
    <>
      <SeeAlso title="Based on your career trajectory"
        listOfJobs={basedOnCareer}
        color="green" />
      <SeeAlso title="Based on your role"
        listOfJobs={basedOnYourRole}
        color="blue" />
      <SeeAlso title="Based on your skills"
        listOfJobs={basedOnCareer}
        color="darkblue" />
    </>
  );
}
