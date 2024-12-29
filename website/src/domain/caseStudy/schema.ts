import { reference, z } from "astro:content";

export const caseStudySchema = z.object({
  id: z.string().url(),
  title: z.string(),
  publishedAt: z.coerce.date(),
  company: reference("companies"),
});

export type CaseStudy = z.infer<typeof caseStudySchema>;
