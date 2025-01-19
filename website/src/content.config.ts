import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { parseCaseStudiesFromTomlUnsafe } from "./domain/caseStudy/lib";
import { caseStudySchema } from "./domain/caseStudy/schema";
import { parseCompaniesFromTomlUnsafe } from "./domain/company/lib";
import { companySchema } from "./domain/company/schema";

const companies = defineCollection({
  loader: file("src/domain/company/data.toml", {
    parser: parseCompaniesFromTomlUnsafe,
  }),
  schema: companySchema,
});

const caseStudies = defineCollection({
  loader: file("src/domain/caseStudy/data.toml", {
    parser: parseCaseStudiesFromTomlUnsafe,
  }),
  schema: caseStudySchema,
});

export const collections = {
  companies,
  caseStudies,
};
