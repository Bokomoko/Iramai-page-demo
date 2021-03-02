const builder = require("xmlbuilder");
const { PrismaClient } = require('@prisma/client')
const globby = require("globby");

const prisma = new PrismaClient()

export default async (req, res) => {
  try {
    //Get all the data to generate dynamic sitemap
    const allJobs = await prisma.job.findMany({
      select: {
        title: true,
      },
    });
    const pages = await globby([
      'pages/**/*.{js,tsx,mdx}', // All routes inside /pages,
      '!pages/api', // Ignore API routes
      '!pages/**/[*.{js,tsx}' // Ignore my dynamic route index Example /pages/jobs/[id].js
    ]);

    //Generate Sitemap
    var newbuilder = builder
      .begin()
      .i("xml-stylesheet", 'type="text/xsl" href="/sitemap.xsl"')
      .dec("1.0", "UTF-8", true);
    var root = newbuilder.node("urlset");
    root.att("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");

    // Build for all static pages
    pages.forEach((page) => {
      var url = root.ele("url");
      const path = page
        .replace('pages/', '')
        .replace('.js', '');
      const route = path === 'index' ? '' : path;
      url.ele("loc", `http://www.turing.com/${route}`)
      //url.ele("lastmod", `${new Date(element.updated_at).toISOString()}`)
      url.ele("changefreq", `monthly`);
      url.ele("priority", `0.9`);
    })

    // Build dynamic job pages
    allJobs.forEach((element) => {
      var url = root.ele("url");
      url.ele("loc", `http://www.turing.com/${element.title}/`)
      //url.ele("lastmod", `${new Date(element.updated_at).toISOString()}`)
      url.ele("changefreq", `monthly`);
      url.ele("priority", `0.8`);
    });
    var xml = root.end({ pretty: true });
    res.statusCode = 200
    //Set appropriate header
    res.setHeader("Content-Type", "text/xml");
    res.send(xml);
  } catch (error) {
    //(TODO: Add loggin)logger.error(error);
    res.status(500).send({ message: "Server Error" });
  }
}
