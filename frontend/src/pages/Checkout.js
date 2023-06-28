import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../components/context/Cartcontext';
import CheckoutItem from '../components/CheckoutItem';
import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react';
export default function Checkout() {
  const a = useContext(CartContext);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    a.fetchcart();
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
        console.log(a.cartItem[i])
      }
      const subtotal=total.toFixed(2)//to tound off to two decimal places
      setTotalCost(subtotal);
    }
  };

  return (
    <Flex justify="center">
      <Box border="white 3px solid" bg="white" m="3" borderRadius="10" w="60%">
      {a.cartItem &&
        a.cartItem.map((item) => (
          <CheckoutItem title={item.title} url={item.image} price={item.cost} quantity={item.quantity} />
        ))}
       
      <Text ml="10" fontSize="3xl" fontWeight="bold">Total Cost: ${totalCost}</Text>

        <Flex>
        <Spacer/>
        <Button m="3" size="lg" colorScheme="yellow">Proceed</Button>
        </Flex>
        </Box>
        
    </Flex>
  );
}

