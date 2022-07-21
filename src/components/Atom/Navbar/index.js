import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box as="nav" py="3" px="4" shadow="sm">
      <Flex alignItems="center">
        <Heading fontSize="2xl" fontWeight="semibold" mr="2">
          Todolist
        </Heading>
        <Text fontSize="sm" fontWeight="light" color="gray.600">
          Todolist with react context
        </Text>
      </Flex>
    </Box>
  );
};

export default Navbar;
