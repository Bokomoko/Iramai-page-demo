README

The code is for Turing website redesign, including following parts:
1. pages/index.js (home page), pages/faq.js (FAQ page), pages/policy (Public Policy page) and tos.js(Terms of Service Page)
2. pages/jobs/[id.js, which is for all jobs that will be dynamically generated from DB.
3. pages/job, (to be build), which is a general job page that introduce all jobs based on skills, levels, etc.
4. pages/api/sitemap.js, which is used to generate sitemap.xml for SEO purpose.

The code is based on NextJS as SSR (using static rendering) and Prisma as ORM

To run nextJS, you need to have node installed (10.13 or later)

For local running, checkout the code and run:
npm run dev
and then visit: http://localhost:3000

For database, config file is at .env, using the schema in prisma/schema.prisma
You may need to run 'npx prisma migrate dev --name init --preview-feature' first time to generate DB to your local with the schema in schema.prisma file,
take a look at https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-node-mysql
You can manually put some jobs data into db and the site will generate url based on jobs title, for example, if you set job data with
job title: remote-backend-job
job content: some remote backend job content,
it will generate a dynamic url with http://localhost:3000/remote-backend-job

For nextJS, take a look at tutorial at: https://nextjs.org/learn/basics/create-nextjs-app

The sitemap can be accessed from http://localhost:3000/sitemap.xml
