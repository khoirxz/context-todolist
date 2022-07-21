import React from "react";
import { Box } from "@chakra-ui/react";

const CustomContainer = ({ children }) => {
  return (
    <Box
      mt="4rem"
      maxWidth="container.md"
      sx={{
        marginInlineStart: "auto",
        marginInlineEnd: "auto",
      }}
    >
      {children}
    </Box>
  );
};

export default CustomContainer;
