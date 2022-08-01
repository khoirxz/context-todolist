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
  Badge,
} from "@chakra-ui/react";
import { BiDotsHorizontalRounded, BiTime } from "react-icons/bi";
import moment from "moment";

import DataListContext from "../../../ContextContainer";

const ListItem = ({ id, title, description, onCreate, onOpen, onComplete }) => {
  const { handleOnDone, handleDelete, todos, setTodo, setIsEditing } =
    useContext(DataListContext);

  return (
    <Box my="10">
      <Flex flexDir="row" justifyContent="space-between" cursor="pointer">
        <Box width="full">
          <Heading fontSize="20px" fontWeight="semibold" mb="1">
            {title}
          </Heading>

          <Text fontFamily="12px" fontWeight="thin" color="gray.500">
            {description}
          </Text>
          <Flex mt="2">
            <Badge
              display="flex"
              alignItems="center"
              variant="outline"
              p={1}
              mr={1}
            >
              <BiTime size={18} style={{ marginRight: "0.5rem" }} />
              {moment(onCreate).format("L")}
            </Badge>
            <Badge
              display="flex"
              alignItems="center"
              variant="outline"
              p={1}
              colorScheme={onComplete ? "green" : "yellow"}
            >
              {onComplete ? "Selesai" : "Dikerjakan"}
            </Badge>
          </Flex>
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
                color="green.600"
                onClick={() => {
                  handleOnDone(id);
                }}
              >
                {onComplete ? "Batalkan" : "Selesai"}
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => {
                  const newData = todos.find((i) => {
                    return i.id === id;
                  });
                  setTodo({ ...newData, onUpdate: new Date().toISOString() });

                  onOpen();
                  setIsEditing(true);
                }}
              >
                Edit
              </MenuItem>
              <MenuItem color="red.600" onClick={() => handleDelete(id)}>
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
      <Divider mt="2" />
    </Box>
  );
};

export default ListItem;
