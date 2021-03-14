import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: process.env.STAGING_URL
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = process.env.JWT_SECRET_KEY;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: "Bearer " + token,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export async function getAllJobs() {
  const { data } = await client.query({
    query: gql`
      {
        jobs {
          url
        }
      }
    `
  });
  return(data.jobs);
}

export async function getJobData(url) {
  const { data } = await client.query({
    query: gql`
      {
        jobs (where : { url : "${url}" }) {
          url,
          title,
          description,
          cover_title,
          cover_cta,
          cover_image_url,
          requirements,
          responsibility,
          preferred_skills,
          category,
          is_based_on_role,
          is_based_on_career,
          is_based_on_skills,
          job_image_url,
          related_skills,
          meta_title,
          meta_description,
          meta_keyword,
          cover_image_alt_text,
          job_image_alt_text,
          script_job_title,
          script_job_description,
          script_date_posted,
          script_expiry_date,
          script_salary_minimun,
          script_salary_maximun,
          script_job_responsibility,
          script_job_skills,
          script_job_qualification,
          testimonials {
            dev_name,
            dev_image_url,
            content
          },
          blogs {
            title,
            content,
            image_url
          },
          related_jobs {
            url,
            job_image_url
          }
        }
      }
    `
  });
  return data.jobs[0];
}
