# michelmany.com

Website of **Michel Many**, the software engineering services brand led by
Michel Moraes, for agencies and product teams. It also holds Michel's
experience and CV (About & Experience). Engagements are contracted through
Michel Many Limited (UK) or Michel Moraes as a self-employed professional in
Spain.

## Structure

- `portfolio-frontend/`: the website (Next.js App Router, TypeScript, Tailwind CSS v4).
- `portfolio-backend/`: legacy Express API from the previous personal portfolio. Not used by the website.
- `archive/personal-site/`: content from the previous site that is not published (unconfirmed projects, old pages). Not built or served.
- `docs/content-audit.md`: how work is organised, old URLs, and projects held back.

## Website

```bash
cd portfolio-frontend
npm ci
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

### Content

Editable content lives in `portfolio-frontend/src/content/`:

- `site.ts`: brand details, contracting entities and navigation.
- `profile.ts`: Michel's experience, skills, education and CV (source: the 2026 CV).
- `services.ts`: services and engagement models.
- `work.ts`: selected work. Read the rules at the top of the file before adding an engagement.

### Contact form

`POST /api/contact` sends enquiries with SendGrid to `hello@michelmany.com`.
It requires the `SENDGRID_API_KEY` environment variable. Without it, the form
reports that it is unavailable and points visitors to the email address.
