import { Box, Flex, Input, Button,Badge,Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CartContext } from './context/Cartcontext';
import { useContext } from "react";

const Navbar = (props) => {
  const a=useContext(CartContext)
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      backgroundColor="gray.800"
      color="white"
    >
    
      <Flex width="80%">
      <Box fontSize="2xl" >
      <Link to="/">
       Shopify
       </Link>
      </Box>
        <Input
          type="text"
          placeholder="Search"
          marginLeft="1rem"
          size="md"
        />
        
      </Flex>
      <Link to="/product">
        <Text data-value="men's clothing" onClick={props.buttonHandler}>mens Clothing</Text>
      </Link>
      <Link to="/cart">
      <Button colorScheme="teal" size="sm">
      <Badge colorScheme="purple" variant="solid" borderRadius="50%" px={2}>
        {a.cartCount}
      </Badge>
          Cart
        </Button>
      </Link>
    </Flex>
  );
};

export default Navbar;
