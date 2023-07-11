import React, { useContext, useEffect} from 'react'
import Cartitem from '../components/Cartitem'
import { Flex, Box, Button, Spacer,useMediaQuery } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { CartContext } from '../components/context/Cartcontext';
import { useAuthContext } from '../components/hooks/useAuthContext';
export default function Cart() {
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ])
  const a=useContext(CartContext)
  const {user}=useAuthContext()
  useEffect(() => {
    if(user){
      a.fetchcart();
    }
  }, [a.cartItem,user]);

  return (
    <Flex justifyContent="center" style={{ background:"white", color: 'black' }}>
      <Box border="white 3px solid" bg="white" m={isSmallScreen?"":"3"} borderRadius="10" w={isSmallScreen?"80%":"50%"} >
        
      {a.cartItem &&
          a.cartItem.map((item) => (
            <Cartitem title={item.title} url={item.image} price={item.cost} quantity={item.quantity} id={item._id} Key={item._id}/>
          ))}
          
            <Flex>
              <Spacer/>
            <Link to="/checkout">
        <Button m={isSmallScreen?"":"5"}  colorScheme='green'>Check out</Button></Link>

            </Flex>
        </Box>
    </Flex>
  )
}
