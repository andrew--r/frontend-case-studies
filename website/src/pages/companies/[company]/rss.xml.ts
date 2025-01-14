import rss, { rssSchema } from "@astrojs/rss";
import { z } from "astro:content";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../../../config";
import { getAllCompanies, getCompany } from "../../../domain/company/lib";
import type {
  APIRoute,
  InferGetStaticParamsType,
  InferGetStaticPropsType,
} from "astro";
import { getAllCaseStudiesByCompany } from "../../../domain/caseStudy/lib";

type RssItem = z.infer<typeof rssSchema>;

export async function getStaticPaths() {
  const pages = await getAllCompanies();

  return pages.map((page) => ({
    params: {
      company: page.id,
    },
  }));
}

type Params = InferGetStaticParamsType<typeof getStaticPaths>;
type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export const GET: APIRoute<Props, Params> = async ({ params }) => {
  const company = await getCompany(params.company);
  const caseStudiesByCompany = await getAllCaseStudiesByCompany();

  return rss({
    title: `${company.data.name} — SITE_NAME`,
    description: SITE_DESCRIPTION,
    site: SITE_URL,
    customData: getCustomData(),
    items:
      caseStudiesByCompany[company.id]?.map(
        (item): RssItem => ({
          title: item.data.title,
          pubDate: item.data.publishedAt,
          description: `Case study by ${company.data.name}`,
          link: item.data.id,
        })
      ) ?? [],
  });
};

function getCustomData() {
  return `
  <language>en-us</language>
  <image><url>${SITE_URL}/s/images/favicon-96x96.png</url><title>${SITE_NAME}</title><link>${SITE_URL}</link></image>
  `.trim();
}
