import invariant from 'tiny-invariant';
import pick from 'lodash/pick';
import { Repository } from '../types';

const config = {
  headers: {
    accept: 'application/vnd.github.v3+json',
    Authorization: `token ${process.env.GITHUB_API_KEY}`,
  },
};

export const getGithubUser = async (username?: string) => {
  invariant(username, 'Please provide an username as a string');

  const res = await fetch(`https://api.github.com/users/${username}`, config);

  const { login, avatar_url, html_url, bio } = await res.json();

  return { login, avatar_url, html_url, bio };
};

export const getUserRepos = async (username?: string) => {
  invariant(username, 'Please provide an username as a string');

  const res = await fetch(
    `https://api.github.com/users/${username}/repos`,
    config
  );

  return (await res.json()).map((repo: Repository) =>
    pick(repo, [
      'id',
      'full_name',
      'stargazers_count',
      'html_url',
      'language',
      'name',
    ])
  );
};
