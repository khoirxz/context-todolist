import React, { useContext } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Divider,
  chakra,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import DataListContext from "../../../ContextContainer";

const ListItem = ({ id, title, description, onOpen }) => {
  const { handleDelete, setTodo, setIsEditing } = useContext(DataListContext);

  return (
    <Box my="10">
      <Flex flexDir="row" justifyContent="space-between">
        <Box>
          <Heading fontSize="20px" fontWeight="semibold" mb="1">
            {title}
          </Heading>
          <Text fontFamily="12px" fontWeight="thin" color="gray.500">
            {description}
          </Text>
        </Box>

        <Box>
          <Menu>
            <MenuButton>
              <chakra.a cursor="pointer">
                <BiDotsHorizontalRounded size={24} />
              </chakra.a>
            </MenuButton>

            <MenuList>
              <MenuItem
                onClick={() => {
                  setTodo({
                    id: id,
                    title: title,
                    description: description,
                    onUpdate: new Date().toISOString(),
                  });
                  onOpen();
                  setIsEditing(true);
                }}
              >
                Edit
              </MenuItem>
              <MenuItem onClick={() => handleDelete(id)}>Delete</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
      <Divider mt="2" />
    </Box>
  );
};

export default ListItem;
