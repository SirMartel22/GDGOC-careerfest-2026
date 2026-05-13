# CareerFest 2026 — Innovation Challenge Platform Documentation

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Programme Context](#2-programme-context)
3. [Tech Stack](#3-tech-stack)
4. [System Architecture](#4-system-architecture)
5. [Data Flow](#5-data-flow)
6. [Folder Structure](#6-folder-structure)
7. [Database Schema](#7-database-schema)
8. [Environment Variables](#8-environment-variables)
9. [Third-Party Services Setup](#9-third-party-services-setup)
   - [Supabase](#91-supabase)
   - [Cloudinary](#92-cloudinary)
   - [Google Form](#93-google-form-registration)
10. [Pages & Routes](#10-pages--routes)
11. [Component Breakdown](#11-component-breakdown)
12. [Key Logic & Functions](#12-key-logic--functions)
13. [Getting Started](#13-getting-started)
14. [Deployment](#14-deployment)
15. [Constraints & Limits](#15-constraints--limits)
16. [Future Improvements](#16-future-improvements)

---

## 1. Project Overview

This is the web platform for **CareerFest 2026 — Career Ready. What's Next?**, a student-focused employability and innovation event. The platform currently serves the **University Talent / Innovation Challenge**, which runs May 20–25, 2026.

A separate **Main CareerFest Day** page (for the June 15, 2026 event) is built but kept hidden from the public until approximately one week before the event.

### What Is Live Now

The Innovation Challenge page — a single, self-contained page that covers:

- Programme description and about section
- Hackathon registration (via embedded Google Form)
- Project submission form
- Links through to the public projects gallery

### What Is Not Yet Public

The **Main CareerFest Day** page (`/careerfest`) — covering CV review booths, live interview simulations, portfolio building sessions, and practical employability workshops. This page is built but gated (not linked publicly) until ~June 8, 2026.

### What the App Does Not Do (v1)

- No user authentication or accounts
- No admin approval before submissions go live
- No voting or leaderboard (planned for v2)
- No email confirmations on submission

---

## 2. Programme Context

Understanding the full CareerFest 2026 programme helps inform content, copy, and what each page needs to communicate.

### CareerFest 2026 — Career Ready. What's Next?

A practical, student-focused experience designed to help students build skills, improve visibility, test capabilities, and become opportunity-ready. Open to developers, designers, creators, writers, storytellers — and anyone trying to figure out their next step.

---

### Pre-CareerFest Workshop — May 20, 2026

A hands-on intro workshop exploring how to use **Google AI & Cloud tools** to build projects, create solutions, and participate in the Innovation Challenge.

---

### University Talent / Innovation Challenge — May 20–25, 2026

> **This is the active event the platform currently supports.**

Participants build practical **SDG-focused solutions** using Google tools and cloud technologies. Open to everyone — regardless of field of study or technical background.

**Top participants are assessed by technical recruiters and matched with:**
- Internship opportunities
- Professional headshots
- CV optimisation
- LinkedIn Premium
- Mentorship and other growth opportunities

---

### Main CareerFest Day — June 15, 2026

> **Page is built. Not yet public.**

A full-day practical employability and career-growth experience featuring:
- CV review booths
- Live interview simulations
- Portfolio building sessions
- Practical employability workshops
- Visibility and opportunity-focused sessions

---

## 3. Tech Stack

| Layer | Technology | Reason |
|---|---|---|
| Framework | Next.js 14 (App Router) | Server Components for fast gallery rendering, file-based routing |
| Language | TypeScript | Type safety across the codebase, especially for Supabase data |
| Styling | Tailwind CSS | Fast utility-first styling, no custom CSS overhead |
| Database | Supabase (PostgreSQL) | Managed Postgres, simple JS client, real-time capable |
| Image Storage | Cloudinary | CDN delivery, on-the-fly image transformation, generous free tier |
| Registration | Google Form (embedded) | Zero backend work, automatic response spreadsheet for organizers |
| Deployment | Vercel | Native Next.js support, instant deployments from GitHub |

---

## 4. System Architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│                              Browser                                 │
│                                                                      │
│  / (Innovation Challenge)  │  /projects  │  /careerfest (hidden)    │
└───────────┬────────────────┴──────┬───────┴──────────────────────────┘
            │                       │
            │                ┌──────▼──────┐
            │                │  Cloudinary │
            │                │  (upload)   │
            │                └──────┬──────┘
            │                       │ returns URL
            │                ┌──────▼──────────┐
            └───────────────►│    Supabase     │◄── /projects (read)
                             │  (PostgreSQL)   │
                             │  stores row +   │
                             │  thumbnail_url  │
                             └─────────────────┘
```

**Key principle:** Cloudinary and Supabase never talk to each other directly. The browser is the bridge on submission. On the gallery page, Next.js fetches rows from Supabase (which contain Cloudinary URLs), and the browser loads images directly from Cloudinary's CDN — in parallel, independently of the data fetch.

---

## 5. Data Flow

### Submission Flow

```
1. Participant fills out the submission form (on the Innovation Challenge page, /)
2. Participant selects a thumbnail image
3. On submit, the browser uploads the image directly to Cloudinary
4. Cloudinary returns a public image URL
5. The browser collects the Cloudinary URL + all other form fields
6. A single INSERT is made to the Supabase `projects` table
7. The row is saved with thumbnail_url pointing to Cloudinary
8. User is redirected to /projects
```

### Gallery Rendering Flow

```
1. User visits /projects
2. Next.js Server Component runs on the server
3. Supabase client fetches all rows from `projects` table
4. Page renders with all project data (text + thumbnail URLs)
5. HTML is sent to the browser — page is readable immediately
6. Browser independently requests each thumbnail from Cloudinary CDN
7. Images load in parallel — page is never blocked waiting for images
```

---

## 6. Folder Structure

```
careerfest-2026/
│
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # Root layout — fonts, Navbar, Footer
│   ├── page.tsx                      # Innovation Challenge page (/) — main live page
│   ├── projects/
│   │   └── page.tsx                  # Public project gallery (/projects) — Server Component
│   └── careerfest/
│       └── page.tsx                  # Main CareerFest Day page — NOT yet publicly linked
│
├── components/
│   ├── ui/                           # Shared, reusable UI primitives
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Button.tsx
│   │
│   ├── challenge/                    # Innovation Challenge page sections (/)
│   │   ├── Hero.tsx                  # Event title, tagline, CTA
│   │   ├── About.tsx                 # What the challenge is, who it's for
│   │   ├── HowItWorks.tsx            # Steps: register → build → submit → get assessed
│   │   ├── Prizes.tsx                # Internships, headshots, LinkedIn Premium, etc.
│   │   ├── Timeline.tsx              # May 20 workshop → May 20-25 challenge
│   │   ├── RegisterSection.tsx       # Embedded Google Form iframe
│   │   ├── SubmitSection.tsx         # Wraps the submission form on the same page
│   │   └── FAQ.tsx                   # Common questions about the challenge
│   │
│   ├── projects/                     # Standalone gallery page components
│   │   ├── ProjectCard.tsx           # Individual project card
│   │   ├── ProjectGrid.tsx           # Grid layout + search/filter logic
│   │   └── SearchBar.tsx             # Search input — filters by builder name, project name, or time submitted
│   │
│   ├── careerfest/                   # Main CareerFest Day page sections (hidden until ~June 8)
│   │   ├── Hero.tsx
│   │   ├── Sessions.tsx              # CV booths, interview sims, portfolio sessions
│   │   ├── Speakers.tsx
│   │   └── RegisterSection.tsx
│   │
│   └── submit/
│       └── SubmitForm.tsx            # Full submission form (client-side)
│
├── lib/
│   ├── supabase/
│   │   ├── client.ts                 # Browser-side Supabase client (anon key)
│   │   ├── server.ts                 # Server-side Supabase client (for Server Components)
│   │   └── queries.ts                # All database read functions
│   │
│   ├── cloudinary/
│   │   └── upload.ts                 # uploadToCloudinary(file) → returns URL
│   │
│   └── utils.ts                      # General helpers (truncate, formatDate, etc.)
│
├── types/
│   └── index.ts                      # Shared TypeScript types
│
├── public/
│   └── (logos, og-image, favicons)
│
├── .env.local                        # Local environment variables (never commit)
├── .env.example                      # Template showing required variable names
├── next.config.ts                    # Next.js config (Cloudinary domain whitelisted here)
├── tailwind.config.ts
└── README.md
```

---

## 7. Database Schema

### Supabase — `projects` table

```sql
create table projects (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamp with time zone default now(),
  name           text not null,
  twitter        text,
  project_name   text not null,
  description    text not null,
  category       text not null,
  live_url       text not null,
  github_url     text,
  team_members   text,
  thumbnail_url  text,
  published      boolean default true
);
```

### Column Reference

| Column | Type | Required | Notes |
|---|---|---|---|
| `id` | uuid | auto | Primary key, generated automatically |
| `created_at` | timestamptz | auto | Set automatically on insert — used for "time submitted" sort/filter |
| `name` | text | yes | Builder's full name — searchable in gallery |
| `twitter` | text | no | Twitter/X handle, stored without @ |
| `project_name` | text | yes | Name of the submitted project — searchable in gallery |
| `description` | text | yes | Short description, max 500 characters enforced on form |
| `category` | text | yes | Free text or predefined tag (SDG area, tool used, etc.) |
| `live_url` | text | yes | Must start with https:// |
| `github_url` | text | no | Optional source code link |
| `team_members` | text | no | Free text, e.g. "Kemi, John, Sarah" |
| `thumbnail_url` | text | no | Cloudinary public URL, null if no image uploaded |
| `published` | boolean | auto | Defaults to true — all submissions are immediately public in v1 |

### Row Level Security (RLS)

Run these policies in the Supabase SQL editor after creating the table:

```sql
-- Enable RLS
alter table projects enable row level security;

-- Anyone can read published projects
create policy "Public read access"
  on projects for select
  using (published = true);

-- Anyone can insert a new project (open submission, no auth)
create policy "Open insert access"
  on projects for insert
  with check (true);
```

> **Note:** Insert is intentionally open in v1 — no authentication required. If spam becomes an issue, add a CAPTCHA at the form level before the challenge goes live.

---

## 8. Environment Variables

### `.env.local` (never commit this file)

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your-unsigned-upload-preset
```

### `.env.example` (commit this file)

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=
```

### Why everything is `NEXT_PUBLIC_`

Both Cloudinary and Supabase operations happen in the browser (client-side). The Supabase anon key is safe to expose publicly — Row Level Security policies (not the key) control what data can be read or written. The Cloudinary upload preset is also public by design when using unsigned uploads. No secret server-only key is needed for v1.

---

## 9. Third-Party Services Setup

### 9.1 Supabase

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Click **New Project**, give it a name (e.g. `careerfest-challenge`), set a database password, choose a region close to your audience
3. Wait for the project to finish provisioning (~2 minutes)
4. Go to **SQL Editor** in the left sidebar
5. Paste and run the table creation SQL from [Section 7](#7-database-schema)
6. Paste and run the RLS policies from [Section 7](#7-database-schema)
7. Go to **Project Settings → API**
8. Copy **Project URL** → paste as `NEXT_PUBLIC_SUPABASE_URL` in `.env.local`
9. Copy **anon public** key → paste as `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`

> **Inactivity Warning:** Free tier projects pause after 7 days of inactivity. During the May 20–25 challenge window, the project will stay active from natural traffic. Check the Supabase dashboard at least once between now and then to prevent a cold pause. Alternatively, upgrade to Pro ($25/month) for the event period to eliminate any risk.

### 9.2 Cloudinary

1. Go to [cloudinary.com](https://cloudinary.com) and create a free account
2. From the dashboard, copy your **Cloud Name** → paste as `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
3. In the left sidebar go to **Settings → Upload**
4. Scroll to **Upload Presets** and click **Add upload preset**
5. Set **Signing Mode** to **Unsigned**
6. Set **Folder** to `careerfest-thumbnails`
7. Save the preset. Copy the **Preset Name** → paste as `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`

**Recommended — transformation defaults:**

Under **Incoming Transformations** in the upload preset, add:
```
w_1200, q_auto, f_auto
```
This auto-resizes every uploaded thumbnail to max 1200px wide, compresses it, and converts it to WebP for modern browsers. No code required.

### 9.3 Google Form (Registration)

1. Go to [forms.google.com](https://forms.google.com) and create a new form
2. Suggested fields:
   - Full Name (Short answer, required)
   - Email Address (Short answer, required)
   - Course / Field of Study (Short answer)
   - University (Short answer)
   - Twitter / X Handle (Short answer, optional)
   - Are you participating solo or in a team? (Multiple choice)
   - How did you hear about CareerFest? (Short answer, optional)
3. Go to **Send → Embed** (the `</>` icon)
4. Copy the embed `<iframe>` code
5. Paste it inside `components/challenge/RegisterSection.tsx`

**Tip:** In Form Settings → Responses, link to a Google Sheet. Share that sheet with the organising team — they'll have a live view of all registrations without needing access to any codebase or dashboard.

---

## 10. Pages & Routes

### `/` — Innovation Challenge Page *(Live now)*

**Component:** `app/page.tsx`
**Type:** Server Component (no dynamic data)
**Sections rendered top to bottom:**
- `Hero` — CareerFest 2026 branding, challenge headline, CTA buttons
- `About` — what the challenge is, who it's for (everyone, any field)
- `HowItWorks` — register → attend workshop → build → submit → get assessed
- `Prizes` — internships, headshots, CV optimisation, LinkedIn Premium, mentorship
- `Timeline` — May 20 workshop, May 20–25 build window, submission deadline
- `RegisterSection` — embedded Google Form
- `SubmitSection` — project submission form (inline on same page, client component)
- `FAQ` — common questions about eligibility, tools, submission rules

All content on this page is either static or client-side only. No server-side data fetching required.

---

### `/projects` — Project Gallery *(Live now, separate page)*

**Component:** `app/projects/page.tsx`
**Type:** Server Component (data fetch on server) + Client Component for search

```tsx
// app/projects/page.tsx
import { getAllProjects } from '@/lib/supabase/queries'
import ProjectGrid from '@/components/projects/ProjectGrid'

export default async function ProjectsPage() {
  const projects = await getAllProjects()
  return <ProjectGrid projects={projects} />
}
```

`ProjectGrid` is a Client Component that receives the full project list as a prop and handles all search and filter logic client-side — no additional network requests needed.

**Search features on this page:**
- Search by **builder name** (`name` field)
- Search by **project name** (`project_name` field)
- Filter/sort by **time submitted** (`created_at` field — newest first by default)

All three are handled with a single controlled search input that matches across name and project name simultaneously, with a sort toggle for time submitted.

---

### `/careerfest` — Main CareerFest Day Page *(Built, not yet public)*

**Component:** `app/careerfest/page.tsx`
**Type:** Server Component
**Status:** Page exists in the codebase but is not linked from the navbar or any public-facing page. Goes live approximately **June 8, 2026** (one week before the event).

To make it public: add it to the `Navbar.tsx` links and optionally add it as a CTA on the homepage hero.

---

## 11. Component Breakdown

### `SubmitForm.tsx`

The most logic-heavy component in the app. Lives inline within the Innovation Challenge page via `SubmitSection.tsx`.

**State it manages:**
- All form field values (name, projectName, description, liveUrl, etc.)
- Selected thumbnail file + local preview URL
- Upload/submit loading state
- Error messages per field

**On submit, it does these steps in sequence:**
1. Validates all required fields client-side
2. If a thumbnail was selected, calls `uploadToCloudinary(file)` — waits for the URL
3. Calls `supabase.from('projects').insert({...fields, thumbnail_url})` — waits for confirmation
4. Redirects to `/projects`

---

### `ProjectCard.tsx`

Receives a single `Project` object as a prop. Renders:
- Thumbnail image (from `thumbnail_url`) or a styled placeholder if null
- Project name
- Truncated description
- Builder name with initials avatar
- Submission time (formatted relative, e.g. "2 hours ago")
- The entire card is wrapped in an `<a>` tag linking to `live_url`

---

### `ProjectGrid.tsx`

Receives the full `projects` array as a prop. Manages:
- Search input state — matches against `project_name`, `name` (builder), in real time
- Sort state — newest first (default) or oldest first, based on `created_at`
- Derives the filtered/sorted list from props + state — no extra fetches
- Renders the filtered list as a responsive grid of `ProjectCard` components
- Shows a clear empty state when no results match the search query

---

### `SearchBar.tsx`

A single controlled text input that sits above the project grid. Accepts `value`, `onChange`, and `sortOrder` / `onSortChange` as props. Purely presentational — all state lives in `ProjectGrid`.

Placeholder copy suggestion: *"Search by builder name or project name…"*

---

## 12. Key Logic & Functions

### `lib/cloudinary/upload.ts`

```ts
export async function uploadToCloudinary(file: File): Promise<string> {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!)
  formData.append('cloud_name', process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!)

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
    { method: 'POST', body: formData }
  )

  if (!res.ok) throw new Error('Image upload failed')

  const data = await res.json()
  return data.secure_url  // Saved to Supabase as thumbnail_url
}
```

---

### `lib/supabase/queries.ts`

```ts
import { createServerClient } from './server'
import { Project } from '@/types'

export async function getAllProjects(): Promise<Project[]> {
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })  // Newest first

  if (error) throw new Error(error.message)
  return data as Project[]
}
```

---

### `types/index.ts`

```ts
export type Project = {
  id: string
  created_at: string
  name: string                     // Builder name — used in search
  twitter: string | null
  project_name: string             // Project name — used in search
  description: string
  category: string
  live_url: string
  github_url: string | null
  team_members: string | null
  thumbnail_url: string | null
  published: boolean
}
```

---

### `next.config.ts` — Whitelist Cloudinary Domain

```ts
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
}

export default nextConfig
```

---

## 13. Getting Started

### Prerequisites

- Node.js 18 or higher
- A Supabase account and project (see [Section 9.1](#91-supabase))
- A Cloudinary account and upload preset (see [Section 9.2](#92-cloudinary))

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-org/careerfest-2026.git
cd careerfest-2026

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Open .env.local and fill in your Supabase and Cloudinary credentials

# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### First-Time Setup Checklist

- [ ] Supabase project created
- [ ] `projects` table created (SQL from Section 7)
- [ ] RLS policies applied (SQL from Section 7)
- [ ] Supabase URL and anon key added to `.env.local`
- [ ] Cloudinary account created
- [ ] Unsigned upload preset created with folder set to `careerfest-thumbnails`
- [ ] Cloudinary cloud name and preset name added to `.env.local`
- [ ] Google Form created and embed code added to `RegisterSection.tsx`
- [ ] `res.cloudinary.com` added to `next.config.ts` image domains
- [ ] `/careerfest` page confirmed as **not linked** in Navbar until ~June 8

---

## 14. Deployment

### Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repository directly from the Vercel dashboard for automatic deployments on every push to `main`.

### Environment Variables on Vercel

In the Vercel dashboard:
1. Go to your project → **Settings → Environment Variables**
2. Add each variable from `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
   - `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`
3. Redeploy after adding variables

### Going Live Checklist — June 8, 2026 (CareerFest Day page)

- [ ] Add `/careerfest` to `Navbar.tsx` links
- [ ] Optionally add a CTA card on the Innovation Challenge hero pointing to June 15
- [ ] Confirm all CareerFest Day content (sessions, speakers, location) is up to date
- [ ] Push to `main` → Vercel auto-deploys

---

## 15. Constraints & Limits

| Service | Free Tier Limit | Expected Usage | Status |
|---|---|---|---|
| Supabase DB | 500MB | ~2MB for 1,000 rows | ✅ Well within |
| Supabase inactivity | Pauses after 7 days | Active during challenge | ⚠️ Keep dashboard visited |
| Cloudinary storage | 25GB | ~1GB for 1,000 images | ✅ Well within |
| Cloudinary bandwidth | 25GB/month | ~5GB estimated | ✅ Well within |
| Cloudinary file size | 10MB per upload | 2MB enforced on form | ✅ Fine |
| Vercel (Hobby) | 100GB bandwidth | Minimal for this scale | ✅ Fine |

### Thumbnail Upload Rules (enforced in the form)

- Maximum file size: **2MB**
- Accepted formats: JPG, PNG, WEBP
- Recommended dimensions: **1200×630px** (16:9)
- Cloudinary auto-compresses and converts to WebP on delivery

---

## 16. Future Improvements (v2 Ideas)

Out of scope for v1 but worth noting:

- **Community voting / leaderboard** — add a `votes` column and a simple IP-rate-limited voting API route
- **Admin moderation** — Supabase Auth for organiser login, default `published` to `false`, simple approval view
- **Real-time gallery** — Supabase Realtime to push new submissions without a page refresh during the live challenge window
- **Email confirmation on submission** — Resend or Nodemailer in a Next.js API route
- **Project detail page** — `/projects/[id]` with full description, team info, and larger thumbnail
- **OG image generation** — `@vercel/og` for dynamic social share cards per project
- **CAPTCHA on submit** — Cloudflare Turnstile or hCaptcha to prevent spam
- **Unlock `/careerfest` automatically** — environment variable flag (`NEXT_PUBLIC_CAREERFEST_LIVE=true`) so the page becomes visible without a code change

---

*Documentation for CareerFest 2026 — Innovation Challenge Platform, v1.*
*Challenge dates: May 20–25, 2026 | Main event: June 15, 2026*
*Last updated: May 2026*