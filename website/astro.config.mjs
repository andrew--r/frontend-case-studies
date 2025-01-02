// @ts-check
import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
});
