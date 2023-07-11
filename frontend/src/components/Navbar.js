import { Box, Flex, Button,Badge, Spacer,useMediaQuery,Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CartContext } from './context/Cartcontext';
import { useContext, useEffect } from "react";
import CategoryDrawer from "./Drawer";
import SearchForm from "./Searchbar";
import { useLogout } from './hooks/useLogout';
import { useAuthContext } from "./hooks/useAuthContext";
import NavHamburg from "./NavHamburg";
const Navbar = (props) => {

  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ])
  const a=useContext(CartContext)
  const {user}=useAuthContext()
  const {logout}=useLogout()
const logoutHandler=()=>{
logout()
}

  useEffect(()=>{
    a.setCartCount(a.cartItem.length)
  },[a.cartItem.length])
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      color="white"
    >
    

      <Box fontSize={isSmallScreen?"xl":"3xl"}>
      <Link to="/">
       Shopify
       </Link>
      </Box>
      
        
      {user &&<SearchForm/> }
      {user && !isSmallScreen && <>
      <CategoryDrawer buttonHandler={props.buttonHandler}/>
      <Link to="/cart">
      <Button colorScheme="yellow" size="sm" m="2">
      <Badge colorScheme="blackAlpha" variant="solid" borderRadius="50%" px={2}>
        {a.cartCount}
      </Badge>
          Cart
      </Button>
      </Link></>}
        
        {user && !isSmallScreen && <Text backgroundColor="whiteAlpha.400" p="1" borderRadius="10" color="#ffdb00">{user.email}</Text>}
        <Flex><Spacer/>
        {!user && <> <Link to="/signup">
          <Button colorScheme="yellow" size="sm" m="2" color="maroon">Signup</Button>
        </Link>
        <Link to="login">
        <Button colorScheme="yellow" size="sm" m="2" color="maroon" >Login</Button>
        </Link>
        </>}
        {
          !isSmallScreen && <Button colorScheme="yellow" size="sm" m="2"  color="maroon" onClick={logoutHandler}>Logout</Button>
        }
        {isSmallScreen&& user && <><NavHamburg>
          
        <CategoryDrawer buttonHandler={props.buttonHandler}/>
        <Link to="/cart">
        <Button colorScheme="yellow" size="sm" m="2">
        <Badge colorScheme="blackAlpha" variant="solid" borderRadius="50%" px={2}>
          {a.cartCount}
        </Badge>
            Cart
        </Button>
        </Link>
        <Button colorScheme="yellow" size="sm" m="2"  color="maroon" onClick={logoutHandler}>Logout</Button>
        <Text color="white">{user.email}</Text>
          </NavHamburg></>}
        </Flex>
    </Flex>
  );
};

export default Navbar;
