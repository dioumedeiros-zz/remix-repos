import { Link } from 'remix';
import { Divider, Flex, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import { RiGithubFill, RiArrowDropRightLine } from 'react-icons/ri';
import { Repository as RepositoryType } from '../types';

type RepositoryProps = {
  repo: RepositoryType;
};

export const Repository = ({ repo }: RepositoryProps) => (
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
);
