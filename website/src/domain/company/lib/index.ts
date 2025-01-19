import { getCollection, getEntry, type CollectionEntry } from "astro:content";
import { parse } from "smol-toml";
import type { Company } from "../schema";

export function getAllCompanies(): Promise<CollectionEntry<"companies">[]> {
  return getCollection("companies");
}

export async function getCompany(
  id: string
): Promise<CollectionEntry<"companies">> {
  const entry = await getEntry("companies", id);

  if (!entry) {
    throw new Error(`Company ${id} not found`);
  }

  return entry;
}

export function parseCompaniesFromTomlUnsafe(sourceToml: string): Company[] {
  return Object.entries(parse(sourceToml)).map(([id, company]) => ({
    // @ts-expect-error
    ...company,
    id,
  }));
}
