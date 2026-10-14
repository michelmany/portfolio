# Content audit

michelmany.com is the single professional and commercial site of **Michel
Many**, the engineering services brand led by Michel Moraes. There is no
separate personal site: career history and the CV live on `/about`
(About & Experience).

## Work organisation

`/work` groups projects by how the work happened (`src/content/work.ts`):

| Category | Projects | Source |
| --- | --- | --- |
| Client engagements | Skyscanner, AGBI, News UK (through Human Made); Goosehead Insurance (through Fueled); Medico Digital | Brief and 2026 CV |
| Independent products | MadTicket | Brief and 2026 CV |
| Previous professional experience | None as standalone project pages. Employers are listed in the About & Experience timeline. | 2026 CV |
| Demonstration projects | None identified | |

The contracting entity (Michel Many Limited or Michel Moraes, autónomo) is not
named on any project because it has not been confirmed per engagement. The CV
groups the client engagements under Michel Many Ltd; the About timeline follows
the CV.

## Images

Only real images are used. Projects without them get a typographic cover in
lists (a brand graphic, not a screenshot) and no hero image on their page.

| Project | Images | Source |
| --- | --- | --- |
| MadTicket | `public/images/work/madticket/`: 3 desktop screenshots, 8 app screenshots | Desktop: captured from madticket.es on 14 Oct 2026 in a logged-out browser, cropped above the cookie notice. Apps: the App Store listings of MadTicket, MadTicket Backoffice and MadTicket Scan. The Backoffice and Scan screens use a demo event with fictional attendees. |
| AGBI, Skyscanner | None yet | Possible later, once it's confirmed that the agency contracts allow it and which public pages show the contribution. |
| News UK (Sun Video) | `public/images/work/news-uk/`: 3 mobile screenshots and a cover combining them | Public page thesun.co.uk/videos (linked from a public LinkedIn post about the launch, 29 May 2026), captured on 14 Oct 2026 with a temporary mobile browser after accepting The Sun's consent notice, as authorised by Michel. The browser's Google sign-in prompt was cropped out. Desktop capture was blocked by The Sun's bot verification, so there are no desktop images. |
| Goosehead, Medico Digital | None | Behind a login, or the end clients aren't named. |

## URLs from the previous site

| Old URL | Status |
| --- | --- |
| `/portfolio` | 308 to `/work` |
| `/resume` | 308 to `/about#cv` |
| `/resume/michel-moraes-cv-resume-2025.pdf` | 308 to the 2026 CV |
| `/github` | 308 to `/about#links` |
| `/portfolio/icg-ssm-app`, `/portfolio/nitcommerce-platform`, `/portfolio/bricks-builder-editor`, `/portfolio/gutenberg-react-blocks`, `/portfolio/michel-many-portfolio` | 404 (see below) |
| `/admin/*` | 404. Unfinished CMS screens that never worked. |

## Projects held back

The old site's project pages were audited against the existing content and
the 2026 CV. None could be tied to an employer, a client contract or a product
with enough confidence, so they are not shown. Their content and images are
kept in `archive/personal-site/`.

| Project | What the existing content says | Open question |
| --- | --- | --- |
| ICG School Services Management | Custom school logistics app; mentions a client and client feedback. | Real client project? Through which employer or entity? |
| NITCommerce Platform | Full-stack e-commerce build; GitHub repo `michelmany/nitcommerce`; claims a 35% conversion increase for a client. | Client project or demonstration? The metrics are unverified. |
| Bricks Builder Editor | Describes joining the Bricks core team to build the visual editor. | Not in the CV timeline. Dates and employer or contract? |
| Custom Gutenberg Blocks with React | Gutenberg blocks "deployed on several enterprise WordPress projects". | Possibly Syde work. Confirm before showing as previous professional experience. |
| Previous portfolio website | The old version of this site. | Not worth showing. |

If any of these is confirmed, add it to `src/content/work.ts` with the right
category, and only with confirmed context, technologies and links. Leave out
unverified results.

## Backend

`portfolio-backend/` (Express + Prisma API) was never connected to the site.
It is untouched and can be removed separately.
