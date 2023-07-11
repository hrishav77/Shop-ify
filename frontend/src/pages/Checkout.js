import React, { useContext, useEffect} from 'react';
import { CartContext } from '../components/context/Cartcontext';
import CheckoutItem from '../components/CheckoutItem';
import { Box, Button, Flex, Spacer, Text ,useMediaQuery} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import PaymentOverlay from '../components/PaymentOverlay';
export default function Checkout() {
  const a = useContext(CartContext);
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ])
  useEffect(() => {
    a.fetchcart();
    console.log("fetched")
  }, []);

  useEffect(() => {
    calculateTotalCost();
  }, [a.cartItem]);

  const calculateTotalCost = () => {
    if (a.cartItem) {
      // const total = a.cartItem.reduce((acc, item) => acc + item.cost, 0);
      let total=0;
      for(let i=0;i<a.cartItem.length;i++){
        total+=a.cartItem[i].cost*a.cartItem[i].quantity
      }
      const subtotal=total.toFixed(2)//to tound off to two decimal places
      a.setTotalCost(subtotal);
    }
  };
 
  return (
    <Flex justify="center" style={{ background:"white", color: 'black' }}>
      <Box border="white 3px solid" bg="white" m="3" borderRadius="10" w={isSmallScreen?"80%":"60%"}>
      {a.cartItem &&
        a.cartItem.map((item) => (
          <CheckoutItem title={item.title} url={item.image} price={item.cost} quantity={item.quantity} />
        ))}
       
      <Text ml="10" fontSize={isSmallScreen?"lg":"3xl"} fontWeight="bold">Total Cost: ${a.totalCost}</Text>

        <Flex>
        <Spacer/>
        <Link to="/cart">
        <Button m="3" size={isSmallScreen?"sm":"lg"} colorScheme="blackAlpha">Go back</Button>
        </Link>
        <PaymentOverlay/>
        </Flex>
        </Box>
        
    </Flex>
  );
}

