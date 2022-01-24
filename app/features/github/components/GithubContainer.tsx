import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Types } from '..';

export const GithubContainer = ({ user }: Types.LoaderData) => {
  return (
    <Box w="100%" m={8}>
      <Flex alignItems="center" justifyContent="center">
        <Image src={user.avatar_url} alt={user.login} rounded="full" />
        <Text fontSize="2xl">{user.login}</Text>
      </Flex>
    </Box>
  );
};
