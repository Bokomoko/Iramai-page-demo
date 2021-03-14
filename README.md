README

The code is for Turing website redesign, including following parts:
1. pages/index.js (home page), pages/faq.js (FAQ page), pages/policy (Public Policy page) and tos.js(Terms of Service Page)
2. pages/jobs/[id.js, which is for all jobs that will be dynamically generated from DB.
3. pages/job, (to be build), which is a general job page that introduce all jobs based on skills, levels, etc.
4. pages/api/sitemap.js, which is used to generate sitemap.xml for SEO purpose.

The code is based on NextJS as SSR (using static rendering) and use graphql to fetch data from Turing CMS

To run nextJS, you need to have node installed (10.13 or later)

For local running, checkout the code and run:
npm run dev
and then visit: http://localhost:3000

The data will come from Turing CMS site, the staging area is at https://cms-staging.turing.com/
Content team can edit information in CMS and we use graphql to fetch data.
For example, if content Timestamp set job data with
job title: remote-backend-job
job content: some remote backend job content,
it will generate a dynamic url with http://localhost:3000/remote-backend-job

For nextJS, take a look at tutorial at: https://nextjs.org/learn/basics/create-nextjs-app

The sitemap can be accessed from http://localhost:3000/sitemap.xml
