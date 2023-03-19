import React from 'react';
import { Box, Flex, Select, Text, VStack } from '@chakra-ui/react';
import { Repository as RepositoryType } from '../types';
import { Repository } from './Repository';

type RespositoriesProps = {
  repos: RepositoryType[];
};

export const Respositories = ({ repos }: RespositoriesProps) => (
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
    {React.Children.toArray(repos.map((repo) => <Repository repo={repo} />))}
  </VStack>
);
