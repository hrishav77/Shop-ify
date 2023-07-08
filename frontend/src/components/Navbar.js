import { Box, Flex, Button,Badge} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CartContext } from './context/Cartcontext';
import { useContext, useEffect } from "react";
import CategoryDrawer from "./Drawer";
import SearchForm from "./Searchbar";
const Navbar = (props) => {
  const a=useContext(CartContext)
  useEffect(()=>{
    a.setCartCount(a.cartItem.length)
  },[a.cartItem.length])
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
        <SearchForm/>
        
      </Flex>
      <CategoryDrawer buttonHandler={props.buttonHandler}/>
      <Link to="/cart">
      <Button colorScheme="teal" size="sm" m="2">
      <Badge colorScheme="purple" variant="solid" borderRadius="50%" px={2}>
        {a.cartCount}
      </Badge>
          Cart
        </Button>
      </Link>

        <Link to="/signup">
          <Button colorScheme="teal" size="sm" m="2">Signup</Button>
        </Link>
        <Link to="login">
        <Button colorScheme="teal" size="sm" m="2">Login</Button>
        </Link>
    </Flex>
  );
};

export default Navbar;
