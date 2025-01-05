import { getCollection, getEntry, type CollectionEntry } from "astro:content";

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
