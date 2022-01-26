import { Avatar, Box, Flex, HStack, Input, Link, Text } from '@chakra-ui/react';
import { User } from '~/features/github/types';

type HeaderProps = {
  user: User;
};

export const Header = ({ user }: HeaderProps) => (
  <Box w="100%">
    <HStack
      p={3}
      px={5}
      background="purple.600"
      color="whiteAlpha.900"
      justifyContent="space-between"
    >
      <Text fontSize={'2xl'}>Git Finder.</Text>
      <Box w={'5xl'}>
        <Input
          placeholder="Search projects"
          background="purple.700"
          border={0}
          _placeholder={{ color: 'whiteAlpha.900' }}
        />
      </Box>
      <Flex alignItems="center" gap={8}>
        <Link>Dashboard</Link>
        <Link>Domains</Link>
        <Avatar src={user.avatar_url} name={user.login} />
      </Flex>
    </HStack>
  </Box>
);
