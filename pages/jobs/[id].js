import Layout from '../../component/layout'

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

function Jobs({ jobData }) {
  return (
    <Layout>
      {jobData.title} : {jobData.content}
    </Layout>
  )
}

// Return a list of possible value for id
export async function getStaticPaths() {
  const jobs = await prisma.job.findMany({
    select: {
      id: true,
      title: true,
    },
  })
  console.log(jobs);
  // Get the paths we want to pre-render based on posts
  const paths = jobs.map(job => ({
    params: { id: job.title },
  }))

  return {
    paths,
    // If an ID is requested that isn't defined here, fallback will incrementally generate the page
    fallback: false,
  }
}

// Fetch necessary data for the blog post using params.id
export async function getStaticProps({ params }) {
  const jobData = await prisma.job.findFirst({
    where: {
      title: params.id,
    },
    select: {
      title: true,
      content: true,
    },
  })

  return {
    props: {
      jobData
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1,
  }
}

export default Jobs
