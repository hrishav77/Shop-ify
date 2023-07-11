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
    
      style={user?{ }:{color:"goldenrod"}}
    >
    

      <Box fontSize={isSmallScreen?"xl":user?"4xl":"6xl"}>
      <Link to="/">
       Shopify
       </Link>
      </Box>
      
        
      {user &&<SearchForm/> }
      {user && !isSmallScreen && <>
      <CategoryDrawer buttonHandler={props.buttonHandler}/>
      <Link to="/cart">
      <Button colorScheme="blackAlpha"  variant="outline" color="black"  size="sm" m="2">
      <Badge colorScheme="blackAlpha" variant="outline"   borderRadius="50%" px={2}>
        {a.cartCount}
      </Badge>
          Cart
      </Button>
      </Link></>}
        
        {user && !isSmallScreen && <Text backgroundColor="whiteAlpha.400" p="1" borderRadius="10" color="black">{user.email}</Text>}
        <Flex><Spacer/>
        {!user && <> <Link to="/signup">
          <Button colorScheme="yellow"   size="sm" m="2" color="maroon">Signup</Button>
        </Link>
        <Link to="login">
        <Button colorScheme="yellow"   size="sm" m="2" color="maroon" >Login</Button>
        </Link>
        </>}
        {
          !isSmallScreen && user && <Button colorScheme="blackAlpha" color="black" variant="outline"  size="sm" m="2"   onClick={logoutHandler}>Logout</Button>
        }
        {isSmallScreen&& user && <><NavHamburg>
          
        <CategoryDrawer buttonHandler={props.buttonHandler}/>
        <Link to="/cart">
        <Button colorScheme="blackAlpha" color="black" variant="outline"  size="sm" m="2">
        <Badge colorScheme="yellow" variant="solid" borderRadius="50%" px={2}>
          {a.cartCount}
        </Badge>
            Cart
        </Button>
        </Link>
        <Button colorScheme="blackAlpha" color="black" variant="outline"  size="sm" m="2"  onClick={logoutHandler}>Logout</Button>
        <Text >{user.email}</Text>
          </NavHamburg></>}
        </Flex>
    </Flex>
  );
};

export default Navbar;
