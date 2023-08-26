import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
export default function CategoryDrawer(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        size="sm"
        colorScheme="blackAlpha"
        color="black"
        variant="outline"
        onClick={onOpen}
        fontSize="xs"
      >
        Categories
        <ChevronDownIcon />
      </Button>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter="blur(4px)" />
        <DrawerContent bg="antiquewhite">
          <DrawerHeader
            borderBottomWidth="2px"
            fontSize="lg"
            color="blue.200"
            bg="gray.100"
          >
            Categories
          </DrawerHeader>
          <DrawerBody bg="white">
            <Link to="/product">
              <Text
                fontSize="sm"
                m="3"
                data-value="all"
                onClick={props.buttonHandler}
              >
                All products
              </Text>
            </Link>
            <Link to="/product">
              <Text
                fontSize="sm"
                m="3"
                data-value="men's clothing"
                onClick={props.buttonHandler}
              >
                Men's Clothing
              </Text>
            </Link>
            <Link to="/product">
              <Text
                fontSize="sm"
                m="3"
                data-value="women's clothing"
                onClick={props.buttonHandler}
              >
                Women's Clothing
              </Text>
            </Link>
            <Link to="/product">
              <Text
                fontSize="sm"
                m="3"
                data-value="jewelery"
                onClick={props.buttonHandler}
              >
                Jewelery
              </Text>
            </Link>
            <Link to="/product">
              <Text
                fontSize="sm"
                m="3"
                data-value="electronics"
                onClick={props.buttonHandler}
              >
                Electronics
              </Text>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
