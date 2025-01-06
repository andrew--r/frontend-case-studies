import { getCollection, getEntry, type CollectionEntry } from "astro:content";
import type { CaseStudy } from "../schema";
import { parse } from "smol-toml";

export function getAllCaseStudies(): Promise<CollectionEntry<"caseStudies">[]> {
  return getCollection("caseStudies");
}

export async function getAllCaseStudiesByCompany(): Promise<
  Partial<Record<string, CollectionEntry<"caseStudies">[]>>
> {
  const all = await getCollection("caseStudies");

  return Object.groupBy(all, (entry) => entry.data.company);
}

export function parseCaseStudiesFromTomlUnsafe(
  sourceToml: string
): CaseStudy[] {
  return Object.entries(parse(sourceToml)).flatMap(([company, entries]) =>
    // @ts-expect-error
    entries.map((entry) => ({
      ...entry,
      company,
    }))
  );
}
