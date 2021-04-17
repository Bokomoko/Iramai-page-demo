import Layout from '../../component/layout';
import { getJobData, getAllJobs } from '../../service/jobs/job_data';
import ReactMarkdown from 'react-markdown';

function Jobs({ jobData }) {
  return (
    <Layout>
      <br></br>
      Title: <br></br>
      {jobData.title} <br></br>
      <br></br>
      Content: <br></br>
      {jobData.description} <br></br>
      <br></br>
      Requirement: <br></br>
      <ReactMarkdown source={jobData.requirements} /> <br></br>
      <br></br>
      <img src={''} alt="" width="100" />
    </Layout>
  );
}

// Return a list of possible value for id
export async function getStaticPaths() {
  let allJobs = await getAllJobs();

  // Get the paths we want to pre-render based on posts
  const paths = allJobs.map((job) => ({
    params: { id: job.url },
  }));

  return {
    paths,
    // If an ID is requested that isn't defined here, fallback will incrementally generate the page
    fallback: false,
  };
}

// Fetch necessary data for the blog post using params.id
export async function getStaticProps({ params }) {
  const jobData = await getJobData(params.id);
  return {
    props: {
      jobData,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1,
  };
}

export default Jobs;
