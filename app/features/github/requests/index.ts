import invariant from 'tiny-invariant';

export const getGithubUser = async (username?: string) => {
  invariant(username, 'Please provide an username as a string');

  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      accept: 'application/vnd.github.v3+json',
      Authorization: 'token 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',
    },
  });

  const { login, avatar_url, html_url, bio } = await res.json();

  return { login, avatar_url, html_url, bio };
};
