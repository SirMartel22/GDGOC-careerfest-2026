# Contributing to CareerFest 2026

Thank you for contributing to the CareerFest 2026 platform! This document covers everything you need to know before making changes — from branching conventions to submitting a pull request.

---

## Table of Contents

1. [Getting Started](#1-getting-started)
2. [Branching Strategy](#2-branching-strategy)
3. [Commit Message Convention](#3-commit-message-convention)
4. [Pull Request Process](#4-pull-request-process)
5. [Code Style Guidelines](#5-code-style-guidelines)
6. [Folder & File Conventions](#6-folder--file-conventions)
7. [What Not to Touch](#7-what-not-to-touch)
8. [Reporting Issues](#8-reporting-issues)

---

## 1. Getting Started

Make sure you have the project running locally before making any changes.

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/careerfest-2026.git
cd careerfest-2026

# Install dependencies
npm install

# Set up your environment variables
cp .env.example .env.local
# Fill in your Supabase and Cloudinary credentials in .env.local

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to confirm everything is working.

> See the README for full setup instructions including Supabase and Cloudinary configuration.

---

## 2. Branching Strategy

Always branch off `main`. Never commit directly to `main`.

### Branch Naming Convention

```
type/short-description
```

| Type | When to use |
|---|---|
| `feat/` | Adding a new feature or section |
| `fix/` | Fixing a bug |
| `chore/` | Config changes, dependency updates, tooling |
| `content/` | Updating copy, images, or static content |
| `style/` | UI tweaks, spacing, color changes — no logic changes |

### Examples

```bash
feat/submit-form
feat/project-gallery-search
fix/cloudinary-upload-error
content/update-prizes-section
style/navbar-mobile-responsiveness
chore/add-supabase-types
```

### Creating a Branch

```bash
git checkout main
git pull origin main
git checkout -b feat/your-feature-name
```

---

## 3. Commit Message Convention

We follow a simple version of [Conventional Commits](https://www.conventionalcommits.org/).

```
type: short description in lowercase
```

| Type | When to use |
|---|---|
| `feat` | New feature or component |
| `fix` | Bug fix |
| `chore` | Tooling, config, dependencies |
| `content` | Copy or static content changes |
| `style` | Styling only, no logic |
| `refactor` | Code restructure, no behaviour change |
| `docs` | Documentation updates |

### Examples

```
feat: add project submission form
fix: handle missing thumbnail_url in ProjectCard
chore: install supabase-js dependency
content: update timeline dates for challenge week
style: improve mobile layout of ProjectGrid
docs: update README with Cloudinary setup steps
```

### Rules

- Use lowercase
- Keep it under 72 characters
- Use the imperative mood — "add", not "added" or "adds"
- No full stop at the end

---

## 4. Pull Request Process

1. Push your branch to GitHub:
   ```bash
   git push origin feat/your-feature-name
   ```

2. Open a Pull Request against `main` on GitHub

3. Fill in the PR description:
   - **What does this PR do?** — brief summary
   - **Screenshots** — include one if there are any UI changes
   - **Anything to flag?** — known issues, decisions made, things to review carefully

4. Request a review from at least one other team member

5. Do not merge your own PR without a review unless it is a trivial content or chore change

6. Once approved, the reviewer merges — not the author

### PR Title Convention

Same as commit messages:
```
feat: project gallery with search and sort
fix: form validation not triggering on empty live_url
```

---

## 5. Code Style Guidelines

### General

- Use **TypeScript** everywhere — no `any` types unless absolutely unavoidable
- Use **Tailwind CSS** for all styling — no inline styles, no separate CSS files
- Keep components small and focused — one responsibility per file
- Use named exports for components, not default exports (exception: Next.js page files which require default exports)

### Components

```tsx
// ✅ Good — named export, typed props
type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (...)
}

// ❌ Avoid — untyped props, default export in non-page file
export default function ProjectCard({ project }) {
  return (...)
}
```

### File Naming

- Components: `PascalCase.tsx` — e.g. `ProjectCard.tsx`
- Utility files: `camelCase.ts` — e.g. `utils.ts`, `upload.ts`
- Next.js pages: `page.tsx` (required by App Router)

### Imports

Order imports as follows:
1. React / Next.js imports
2. Third-party libraries
3. Internal components
4. Internal lib / utils
5. Types

```tsx
import { useState } from 'react'
import Image from 'next/image'
import { createClient } from '@supabase/supabase-js'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { truncate } from '@/lib/utils'
import type { Project } from '@/types'
```

---

## 6. Folder & File Conventions

| What | Where |
|---|---|
| Innovation Challenge page sections | `components/challenge/` |
| Project gallery components | `components/projects/` |
| Main CareerFest Day sections | `components/careerfest/` |
| Shared UI primitives (Button, Navbar) | `components/ui/` |
| Submission form | `components/submit/` |
| Supabase client and queries | `lib/supabase/` |
| Cloudinary upload logic | `lib/cloudinary/` |
| General helpers | `lib/utils.ts` |
| Shared TypeScript types | `types/index.ts` |

When adding a new component, place it in the correct subfolder. Do not dump everything into a top-level `components/` folder.

---

## 7. What Not to Touch

To keep things stable during the active challenge period (May 20–25), avoid making changes to these unless absolutely necessary and discussed with the team first:

- **`lib/supabase/queries.ts`** — any change here affects live data fetching
- **`lib/cloudinary/upload.ts`** — breaking this breaks all project submissions
- **`app/projects/page.tsx`** — the live public gallery
- **`.env.local`** — never commit this file, never share its contents
- **`app/careerfest/page.tsx`** — this page is intentionally not yet public; do not add it to the Navbar until ~June 8, 2026

---

## 8. Reporting Issues

If you find a bug or something that looks wrong:

1. Check if there's already an open issue on GitHub for it
2. If not, open a new issue with:
   - A clear title describing the problem
   - Steps to reproduce it
   - What you expected vs what actually happened
   - A screenshot if relevant

For urgent issues during the live challenge window (May 20–25), flag it directly in the team group chat rather than waiting for a GitHub issue review.

---

*CareerFest 2026 — Innovation Challenge Platform*
*Contributing guide last updated: May 2026*