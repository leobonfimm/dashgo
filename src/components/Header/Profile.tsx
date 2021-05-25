import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Leonardo Bonfim</Text>
          <Text color="gray.300" fontSize="small">
            leo.bonfim.95@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Leonardo Bonfim" src="https://github.com/leobonfimm.png" />
    </Flex>
  );
}