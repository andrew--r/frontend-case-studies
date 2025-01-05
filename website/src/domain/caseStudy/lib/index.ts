import { getCollection, getEntry, type CollectionEntry } from "astro:content";

export function getAllCaseStudies(): Promise<CollectionEntry<"caseStudies">[]> {
  return getCollection("caseStudies");
}

export async function getAllCaseStudiesByCompany(): Promise<
  Partial<Record<string, CollectionEntry<"caseStudies">[]>>
> {
  const all = await getCollection("caseStudies");

  return Object.groupBy(all, (entry) => entry.data.company);
}
