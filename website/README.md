# Website

Website is built with [pnpm](https://pnpm.io) and [astro](https://astro.build).

## Getting started

```sh
nvm use # Ensure using the expected Node.js version
pnpm install # Install dependencies
pnpm run dev # Run local dev server
```

## Source data

Companies are defined in
[src/domain/company/data.toml](src/domain/company/data.toml). See
[schema](src/domain/company/schema.ts) for reference.

Case studies are defined in
[src/domain/caseStudy/data.toml](src/domain/caseStudy/data.toml). See
[schema](src/domain/caseStudy/schema.ts) for reference.
