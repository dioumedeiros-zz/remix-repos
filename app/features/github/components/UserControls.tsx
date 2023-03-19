import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { RiGithubFill } from 'react-icons/ri';
import { User } from '../types';

type UserControlProps = {
  user: User;
};

export const UserControls = ({ user }: UserControlProps) => {
  return (
    <VStack p={5} alignItems="flex-start">
      <Flex alignItems="center" gap={5}>
        <Image w="14" src={user.avatar_url} alt={user.login} rounded="full" />
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
        <Button w="100%" backgroundColor="purple.600" color="whiteAlpha.900">
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
  );
};
