import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      RMO
      <Text
        as="span"
        color="cyan.500"
      >
        .
      </Text>
      <Text
        as="span"
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dash
      </Text>
    </Text>
  );
}