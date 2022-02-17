export type User = {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
};

export type Repository = {
  id: number;
  name: string;
  full_name: string;
  stargazers_count: number;
  html_url: string;
  language: string;
};

export type LoaderData = {
  user: User;
  repos: Repository[];
};
