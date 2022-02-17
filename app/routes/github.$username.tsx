import { LoaderFunction, useLoaderData } from 'remix';
import {
  Types,
  getGithubUser,
  GithubContainer,
  getUserRepos,
} from '~/features/github';

export const loader: LoaderFunction = async ({ params }) => {
  return {
    user: await getGithubUser(params.username),
    repos: await getUserRepos(params.username),
  };
};

export function ErrorBoundary() {
  return <h2>Fatal Error 💣 </h2>;
}

export default function () {
  const { user, repos } = useLoaderData<Types.LoaderData>();

  return <GithubContainer user={user} repos={repos} />;
}
