import { Button, Flex, Text, VStack } from '@chakra-ui/react';

export const Commits = () => (
  <VStack minW={320} p={5}>
    <Flex justifyContent="space-around">
      <Text fontSize="2xl" fontWeight="semibold">
        Projects
      </Text>
      <Button>Sort</Button>
    </Flex>
  </VStack>
);
