import { defineCollection, z } from "astro:content";
import { companySchema } from "./domain/company/schema";
import { caseStudySchema } from "./domain/caseStudy/schema";
import { file } from "astro/loaders";
import { parse } from "smol-toml";

const companies = defineCollection({
  loader: file("src/domain/company/data.toml", {
    parser: (source) => {
      return Object.entries(parse(source)).map(([id, company]) => ({
        // @ts-expect-error
        ...company,
        id,
      }));
    },
  }),
  schema: companySchema,
});

const caseStudies = defineCollection({
  loader: file("src/domain/caseStudy/data.toml", {
    parser: (source) => {
      return Object.entries(parse(source)).flatMap(([company, entries]) =>
        // @ts-expect-error
        entries.map((entry) => ({
          ...entry,
          company,
        }))
      );
    },
  }),
  schema: caseStudySchema,
});

export const collections = {
  companies,
  caseStudies,
};
