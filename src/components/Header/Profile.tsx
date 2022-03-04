import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Renan Montenegro de Oliveira</Text>
          <Text
            color="gray.300"
            fontSize="smal"
          >
            renan.montenegro.oliveira@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Renan Montenegro de Oliveira" src="https://github.com/RenanMDO.png" />
    </Flex>
  );
}