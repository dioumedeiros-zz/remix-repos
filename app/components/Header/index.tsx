import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  Input,
  Link,
  Text,
} from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';
import { User } from '~/features/github/types';

type HeaderProps = {
  user: User;
};

export const Header = ({ user }: HeaderProps) => (
  <Box as="header" w="100%">
    <HStack
      p={3}
      px={5}
      background="purple.600"
      color="whiteAlpha.900"
      justifyContent="space-between"
    >
      <Text fontSize={'2xl'}>Git Finder.</Text>
      <Flex
        as="label"
        flex="1"
        py="3"
        px="6"
        ml="6"
        maxWidth={700}
        alignSelf="center"
        color="whiteAlpha.900"
        position="relative"
        bg="purple.700"
        borderRadius="2xl"
      >
        <Icon as={RiSearchLine} fontSize="20" />
        <Input
          color="whiteAlpha.900"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'whiteAlpha.900' }}
        />
      </Flex>
      <Flex alignItems="center" gap={8}>
        <Link>Dashboard</Link>
        <Link>Domains</Link>
        <Avatar src={user.avatar_url} name={user.login} />
      </Flex>
    </HStack>
  </Box>
);
