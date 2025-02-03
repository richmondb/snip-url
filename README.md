# SnipURL - URL Shortener

SnipURL is a URL shortener application built with [Next.js](https://nextjs.org). It allows users to shorten long URLs for easier sharing and management.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying [`src/app/page.tsx`](src/app/page.tsx). The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

### Configuration Files

- `.gitignore`: Specifies files and directories to be ignored by Git.
- `biome.json`: Configuration for Biome, including formatting and linting rules.
- `eslint.config.mjs`: ESLint configuration for the project.
- `next.config.ts`: Next.js configuration file.
- `postcss.config.mjs`: Configuration for PostCSS.
- `tailwind.config.ts`: Configuration for Tailwind CSS.
- `tsconfig.json`: TypeScript configuration file.

### Database

- `db.sqlite`, `db.sqlite-shm`, `db.sqlite-wal`: SQLite database files.
- [`src/db/db.ts`](src/db/db.ts): Database operations using `better-sqlite3`.

### Application

- [`src/app/page.tsx`](src/app/page.tsx): Main page of the application.
- [`src/app/layout.tsx`](src/app/layout.tsx): Layout component for the application.
- [`src/app/globals.css`](src/app/globals.css): Global CSS styles.
- [`src/app/actions/action.ts`](src/app/actions/action.ts): Server actions for handling URL operations.

### Components

- [`src/app/components/Form.tsx`](src/app/components/Form.tsx): Form component for submitting URLs.
- [`src/app/components/url-list/UrlList.tsx`](src/app/components/url-list/UrlList.tsx): Component for displaying the list of URLs.
- [`src/app/components/common/ui/card/glasscard.tsx`](src/app/components/common/ui/card/glasscard.tsx): Glass card UI component.
- [`src/app/components/common/ui/navbar.tsx`](src/app/components/common/ui/navbar.tsx): Navbar component.
- [`src/app/components/common/ui/modal/Modal.tsx`](src/app/components/common/ui/modal/Modal.tsx): Modal component.
- [`src/app/components/common/ui/popover/popover-dropdown.tsx`](src/app/components/common/ui/popover/popover-dropdown.tsx): Popover dropdown component.

### Libraries

- [`src/lib/validate-url-string.ts`](src/lib/validate-url-string.ts): Function to validate URL strings.
- [`src/lib/generate-short-url.ts`](src/lib/generate-short-url.ts): Function to generate short URLs.
- [`src/lib/schema/url-schema.ts`](src/lib/schema/url-schema.ts): URL schema validation using `zod`.

### Services

- [`src/services/db-actions.ts`](src/services/db-actions.ts): Database actions for deleting and toggling URL states.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## To-Do List

### General
- [ ] Implement authentication in the future

### Configuration
- [ ] Review and update `.gitignore`
- [ ] Configure `next.config.ts`
- [ ] Review `tsconfig.json`
- [ ] Customize `tailwind.config.ts`
- [ ] Set up `eslint.config.mjs`
- [ ] Set up `postcss.config.mjs`
- [ ] Review `biome.json`

### Database
- [ ] Manage SQLite database files (`db.sqlite`, `db.sqlite-shm`, `db.sqlite-wal`)
- [ ] Implement database operations in `src/db/db.ts`

### Application
- [ ] Implement URL validation in `src/lib/validate-url-string.ts`
- [ ] Implement short URL generation in `src/lib/generate-short-url.ts`
- [ ] Define URL types in `src/lib/definitions/url-type.ts`
- [ ] Define URL schema in `src/lib/schema/url-schema.ts`
- [ ] Implement URL actions in `src/app/actions/action.ts`
- [ ] Implement home page in `src/app/page.tsx`
- [ ] Implement form component in `src/app/components/Form.tsx`
- [ ] Implement URL list component in `src/app/components/url-list/UrlList.tsx`
- [ ] Implement layout in `src/app/layout.tsx`
- [ ] Implement global styles in `src/app/globals.css`

### UI Components
- [ ] Implement glass card component in `src/app/components/common/ui/card/glasscard.tsx`
- [ ] Implement navbar component in `src/app/components/common/ui/navbar.tsx`
- [ ] Implement modal component in `src/app/components/common/ui/modal/Modal.tsx`
- [ ] Implement popover dropdown component in `src/app/components/common/ui/popover/popover-dropdown.tsx`

### Services
- [ ] Implement database actions in `src/services/db-actions.ts`

### Miscellaneous
- [ ] Review and update `README.md`