import rss, { rssSchema } from "@astrojs/rss";
import { getCollection, z } from "astro:content";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/config";

type RssItem = z.infer<typeof rssSchema>;

export async function GET() {
  const companies = await getCollection("companies");
  const companiesById = Object.fromEntries(
    companies.map((company) => [company.data.id, company.data])
  );
  const caseStudies = await getCollection("caseStudies");

  return rss({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: SITE_URL,
    customData: getCustomData(),
    items: caseStudies.map(
      (item): RssItem => ({
        title: item.data.title,
        pubDate: item.data.publishedAt,
        description: `Case study by ${companiesById[item.data.company].name}`,
        link: item.data.id,
      })
    ),
  });
}

function getCustomData() {
  return `
  <language>en-us</language>
  <image><url>${SITE_URL}/s/images/favicon-96x96.png</url><title>${SITE_NAME}</title><link>${SITE_URL}</link></image>
  `.trim();
}
