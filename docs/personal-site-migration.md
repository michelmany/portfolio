# Personal site migration record

michelmany.com is now the business website of the **Michel Many** brand
(contracted through Michel Many Limited in the UK or Michel Moraes as a
self-employed professional in Spain). Personal
content about Michel Moraes (career history, CV, individual portfolio) has been
removed from the public site and preserved in this repository for migration to
Michel's future personal website.

Nothing in this list has been reclassified as Michel Many work. Items stay
here until there is evidence they belong to the business.

## Removed URLs

These URLs return 404 on the business site. Once the personal site's domain is
confirmed, add permanent redirects from each one to its new location in
`portfolio-frontend/next.config.ts`.

| Old URL | Content | Archived source | Suggested destination |
| --- | --- | --- | --- |
| `/resume` | CV viewer and download | `archive/personal-site/app/resume/page.tsx` | Personal site CV page |
| `/resume/michel-moraes-cv-resume-2025.pdf` | CV PDF (2025) | `archive/personal-site/public/resume/` | Personal site CV file (review and update first) |
| `/github` | Pinned GitHub repositories (GraphQL API) | `archive/personal-site/app/github/page.tsx`, `archive/personal-site/lib/github.ts` | Personal site |
| `/portfolio/icg-ssm-app` | ICG School Services Management | `archive/personal-site/app/portfolio/[slug]/page.tsx` | Personal site project page |
| `/portfolio/nitcommerce-platform` | NITCommerce Platform | same | Personal site project page |
| `/portfolio/bricks-builder-editor` | Bricks Builder Editor | same | Personal site project page |
| `/portfolio/gutenberg-react-blocks` | Custom Gutenberg Blocks with React | same | Personal site project page |
| `/portfolio/michel-many-portfolio` | The previous version of this website | same | Personal site, or drop |
| `/admin/*` | Unfinished CMS screens (no login page existed; never functional) | `archive/personal-site/app/admin/` | Rebuild only if needed |

`/portfolio` (the listing page) redirects permanently to `/work`, the
business site's equivalent.

## Removed sections and assets

- Homepage hero with avatar, “Senior Frontend & Full Stack Engineer” title,
  “Download CV” call to action and personal social links —
  `archive/personal-site/app/home-page.tsx`.
- “About Me” section (states 12+ years; the business site now uses 15+ years,
  as instructed — confirm which figure is correct for the personal site).
- “Skills & Technologies” grid (20 technologies with icons).
- “Let’s Work Together” section, including availability for a full-time role.
- Previous contact page, including the phone number and personal social links —
  `archive/personal-site/app/contact-page.tsx`.
- Previous header and footer, including the GitHub, LinkedIn and Twitter
  profile links — `archive/personal-site/components/`.
- Project images for ICG, NITCommerce, Bricks Builder, Gutenberg blocks and the
  previous portfolio site — `archive/personal-site/public/images/`.

The michelmany.com logo (`michelmanycom-logo-*.png`) remains the business
site's logo. The profile photo (`profile-michelmany.jpeg`) remains in use on the business
site's About page and should also be copied to the personal site.

## Projects pending a decision

| Project | Status | What is needed |
| --- | --- | --- |
| MadTicket (https://madticket.es) | Not included anywhere. Created by Michel Moraes; SaaS ticketing, 1,000+ users; Next.js, TypeScript, PostgreSQL, Prisma, Stripe. | Confirm whether MadTicket is a Michel Many product. If yes, it could be added to the business site; if not, add it to the personal site. |
| ICG School Services Management | Archived. | Confirm whether it was Michel Many work, through which entity, and for which client. |
| NITCommerce Platform | Archived. | Confirm origin (client project or personal/open-source project at github.com/michelmany/nitcommerce). |
| Bricks Builder Editor | Archived. Describes joining the Bricks core team. | Confirm dates and whether it relates to Michel Many (likely personal career history). |
| Custom Gutenberg Blocks with React | Archived. | Confirm origin. |

### Claims to verify before republishing archived content

The archived project write-ups contain statements that were not verified
during this restructure. Check them before they appear on any site:

- NITCommerce: “35% increase in conversion rate”, “25% decrease in page load
  times”, references to a “client's legacy solution”.
- ICG: “Client reported improved workflow efficiency and better parent
  satisfaction”.
- Gutenberg blocks: “deployed in production on several enterprise WordPress
  projects”.
- Bricks Builder: “enabling thousands of users”.
- Previous portfolio site: “increased recruiter engagement”.

## Backend

`portfolio-backend/` (Express + Prisma API with projects, resume and social
link routes) was never connected to the public site, which used hard-coded
data. It has been left untouched. It mainly models personal-portfolio data and
can move with the personal site or be removed.
