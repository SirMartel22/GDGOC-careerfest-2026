create extension if not exists pg_trgm;

create table if not exists public.projects (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  builder_name text not null,
  twitter_handle text,
  project_name text not null,
  description text not null check (char_length(description) <= 500),
  live_url text not null,
  github_url text,
  team_members text,
  thumbnail_url text
);

alter table public.projects enable row level security;

create policy "Allow public read access"
  on public.projects for select
  using (true);

create policy "Allow public insert access"
  on public.projects for insert
  with check (true);

create index if not exists projects_builder_name_idx on public.projects using gin (builder_name gin_trgm_ops);
create index if not exists projects_project_name_idx on public.projects using gin (project_name gin_trgm_ops);
