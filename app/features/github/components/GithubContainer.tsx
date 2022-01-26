import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Header } from '~/components/Header';
import { LoaderData } from '../types';

export const GithubContainer = ({ user }: LoaderData) => {
  return (
    <Box w="100%">
      <Header user={user} />
      <Flex alignItems="center" justifyContent="center">
        <Image src={user.avatar_url} alt={user.login} rounded="full" />
        <Text fontSize="2xl">{user.login}</Text>
      </Flex>
    </Box>
  );
};
