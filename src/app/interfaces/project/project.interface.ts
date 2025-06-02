export interface Project {
  id: number;
  name: string;
  description: string;
  start_date: string;
  end_date?: string;
  image_url: string;
  image_alt: string;
  github_url: string;
  live_url?: string;
  status_id: number;
}
