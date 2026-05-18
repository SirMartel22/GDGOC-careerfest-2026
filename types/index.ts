export interface Project {
  id: string;
  created_at: string;
  builder_name: string;
  twitter_handle?: string;
  project_name: string;
  description: string;
  live_url: string;
  github_url?: string;
  team_members?: string;
  thumbnail_url?: string;
}

export type ProjectSubmission = Omit<Project, 'id' | 'created_at'>;
