import React, { useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import DataListContext from "../../../ContextContainer";

const FormInput = ({ isOpen, onClose }) => {
  const { todo, setTodo, todos, setTodos, isEditing, setIsEditing } =
    useContext(DataListContext);
  const toast = useToast();

  const handSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      if (todo.title !== "" ?? todo.description !== "") {
        const newData = todo;
        const newTodos = todos.map((item) => {
          return item.id === todo.id ? newData : item;
        });

        setTodos(newTodos);

        toast({
          title: `${todo.title} dibuat`,
          status: "warning",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });

        setTodo([]);
        setIsEditing(false);
      }
    } else {
      if (todo.title !== "" ?? todo.description !== "") {
        setTodos([
          ...todos,
          {
            id: todos.length + 1,
            title: todo.title,
            description: todo.description,
            onComplete: false,
            onCreate: new Date().toISOString(),
            onUpdate: new Date().toISOString(),
          },
        ]);

        toast({
          title: `${todo.title} dibuat`,
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });

        setTodo({
          title: "",
          description: "",
        });
      }
    }
  };

  console.log(todo.title);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={handSubmit}>
        <ModalHeader>Buat kegiatan ⚽</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl my="2">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="title"
              onChange={(e) => setTodo({ ...todo, title: e.target.value })}
              value={todo.title}
            />
          </FormControl>
          <FormControl my="2">
            <FormLabel>Deskripsi</FormLabel>
            <Textarea
              type="text"
              name="description"
              onChange={(e) =>
                setTodo({ ...todo, description: e.target.value })
              }
              value={todo.description}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" type="submit" onClick={onClose}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FormInput;
