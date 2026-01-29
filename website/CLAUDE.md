# Project Instructions

Frontend Case Studies website built with Astro. Content stored in TOML files.

## Adding a New Company

Edit `src/domain/company/data.toml`:

```toml
[companyid]
name = "Company Name"
websiteUrl = "https://company.com"
blogUrl = "https://company.com/blog"        # Optional
rssUrl = "https://company.com/blog/rss.xml" # Optional
```

**Required**: `name`, `websiteUrl`
**Optional**: `blogUrl`, `rssUrl`

## Adding a New Case Study

Edit `src/domain/caseStudy/data.toml`:

```toml
[[companyid]]
id = "https://full-url-to-article"
title = "Article or Talk Title"
publishedAt = "YYYY-MM-DD"
```

**Notes**:
- Use `[[companyid]]` (double brackets) for multiple case studies per company
- The `companyid` must match an existing company
- Order by date (newest first) within each company section

## Example

```toml
# In src/domain/company/data.toml
[stripe]
name = "Stripe"
websiteUrl = "https://stripe.com"
blogUrl = "https://stripe.com/blog/engineering"

# In src/domain/caseStudy/data.toml
[[stripe]]
id = "https://stripe.com/blog/payment-api-design"
title = "Designing APIs for payments"
publishedAt = "2023-05-15"
```
