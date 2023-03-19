import { Box, Flex, Divider } from '@chakra-ui/react';
import { Header } from '~/components/Header';
import { UserControls } from './UserControls';
import { Respositories } from './Repositories';
import { Commits } from './Commits';
import { LoaderData } from '../types';

export const Container = ({ user, repos }: LoaderData) => {
  return (
    <Box w="100%" h="100vh">
      <Header user={user} />

      <Flex h="100%" justifyContent="space-between">
        <UserControls user={user} />
        <Divider orientation="vertical" border={1} />

        <Respositories repos={repos} />
        <Divider orientation="vertical" border={1} />

        <Commits />
      </Flex>
    </Box>
  );
};
