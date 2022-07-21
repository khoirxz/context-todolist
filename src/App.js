import { useContext } from "react";
import {
  Box,
  Heading,
  Flex,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

import { Navbar } from "./components/Atom";
import { CustomContainer, FormInput, ListItem } from "./components/Molecules/";
import DataListContext from "./ContextContainer";

function App() {
  const { todos } = useContext(DataListContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box className="App" fontFamily="Segoe UI">
      <Navbar />
      <CustomContainer>
        <Box>
          <Heading fontSize="20px" fontWeight="semibold">
            Daftar kegiatanmu 📝
          </Heading>
        </Box>

        <Flex justifyContent="flex-end">
          <Button onClick={onOpen} colorScheme="whatsapp">
            Tambah
          </Button>
          <FormInput isOpen={isOpen} onClose={onClose} />
        </Flex>

        <Box>
          {todos.length === 0 ? (
            <Text textAlign="center">No data</Text>
          ) : (
            todos.map((items) => (
              <ListItem
                onOpen={onOpen}
                key={items.id}
                id={items.id}
                title={items.title}
                description={items.description}
              />
            ))
          )}
        </Box>
      </CustomContainer>
    </Box>
  );
}

export default App;
