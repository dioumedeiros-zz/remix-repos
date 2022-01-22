import { Types } from '..';

export const GithubContainer = ({ user }: Types.LoaderData) => {
  return <img src={user.avatar_url} alt={user.login} />;
};
