import React from 'react';
import { Link } from 'remix';
import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  Icon,
  HStack,
  Button,
  Divider,
  Select,
  SimpleGrid,
} from '@chakra-ui/react';
import { RiGithubFill, RiArrowDropRightLine } from 'react-icons/ri';
import { Header } from '~/components/Header';
import { LoaderData } from '../types';

export const GithubContainer = ({ user, repos }: LoaderData) => {
  return (
    <Box w="100%" h="100vh">
      <Header user={user} />

      <Flex h="100%" justifyContent="space-between">
        <VStack p={5} alignItems="flex-start">
          <Flex alignItems="center" gap={5}>
            <Image
              w="14"
              src={user.avatar_url}
              alt={user.login}
              rounded="full"
            />
            <VStack alignItems="flex-start">
              <Text fontSize="2xl" fontWeight="semibold">
                {user.login}
              </Text>
              <HStack>
                <Icon as={RiGithubFill} fontSize="24" color="GrayText" />
                <Text fontSize="1xl" color="GrayText" fontWeight="semibold">
                  {`github/${user.login}`}
                </Text>
              </HStack>
            </VStack>
          </Flex>
          <Box pt={8} w="100%">
            <Button
              w="100%"
              backgroundColor="purple.600"
              color="whiteAlpha.900"
            >
              New Project
            </Button>
            <Button
              mt={3}
              w="100%"
              backgroundColor="whiteAlpha.900"
              border="2px solid"
              borderColor="gray.300"
            >
              Invite Team
            </Button>
          </Box>
        </VStack>
        <Divider orientation="vertical" border={1} />
        <VStack flex={1}>
          <Flex w="100%" p={4} justifyContent="space-between">
            <Text as="h1" fontSize="2xl" fontWeight="semibold">
              Projects
            </Text>
            <Box>
              <Select size="md" placeholder="Sort" cursor="pointer">
                <option value="option1">Option 1</option>
              </Select>
            </Box>
          </Flex>
          {React.Children.toArray(
            repos.map((repo) => (
              <Link prefetch="intent" to={repo.name} style={{ width: '100%' }}>
                <Divider border={1} />
                <SimpleGrid w="100%" py={3} columns={2} spacing={2}>
                  <Text pl={10} fontWeight="semibold">
                    {repo.name}
                  </Text>
                  <Text pr={10} textAlign="right" color="gray">
                    Visit site 🌟{' '}
                  </Text>
                  <Flex pl={10}>
                    <Icon as={RiGithubFill} fontSize="24" color="GrayText" />
                    <Text color="GrayText">{repo.full_name}</Text>
                  </Flex>
                  <Flex
                    pr={10}
                    color="GrayText"
                    alignItems="center"
                    justifyContent="flex-end"
                    gap={2}
                  >
                    <Text>{repo.language || 'JavaScript'}</Text>
                    <Icon as={RiArrowDropRightLine} />
                    <Text>Last delploy 3h ago</Text>
                    <Icon as={RiArrowDropRightLine} />
                    <Text>Brazil</Text>
                  </Flex>
                </SimpleGrid>
              </Link>
            ))
          )}
        </VStack>
        <Divider orientation="vertical" border={1} />
        <VStack minW={320} p={5}>
          <Flex justifyContent="space-around">
            <Text fontSize="2xl" fontWeight="semibold">
              Projects
            </Text>
            <Button>Sort</Button>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};
