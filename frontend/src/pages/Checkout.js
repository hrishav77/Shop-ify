import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../components/context/Cartcontext';
import CheckoutItem from '../components/CheckoutItem';
import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import PaymentOverlay from '../components/PaymentOverlay';
export default function Checkout() {
  const a = useContext(CartContext);

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
      a.setTotalCost(subtotal);
    }
  };

  return (
    <Flex justify="center">
      <Box border="white 3px solid" bg="white" m="3" borderRadius="10" w="60%">
      {a.cartItem &&
        a.cartItem.map((item) => (
          <CheckoutItem title={item.title} url={item.image} price={item.cost} quantity={item.quantity} />
        ))}
       
      <Text ml="10" fontSize="3xl" fontWeight="bold">Total Cost: ${a.totalCost}</Text>

        <Flex>
        <Spacer/>
        <Link to="/cart">
        <Button m="3" size="lg" colorScheme="blackAlpha">Go back</Button>
        </Link>
        <PaymentOverlay/>
        </Flex>
        </Box>
        
    </Flex>
  );
}

