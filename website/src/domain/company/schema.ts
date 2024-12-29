import { z } from "astro:content";

export const companySchema = z.object({
  id: z.string(),
  name: z.string(),
  websiteUrl: z.string().url(),
  blogUrl: z.optional(z.string().url()),
  rssUrl: z.optional(z.string().url()),
});

export type Company = z.infer<typeof companySchema>;
