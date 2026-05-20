-- Add category column to projects table
alter table public.projects add column if not exists category text;

-- Backfill existing projects with 'Other' or a default if needed
update public.projects set category = 'Other' where category is null;

-- Make it not null to enforce it for future submissions
alter table public.projects alter column category set not null;
