import React, { useEffect, useState } from 'react'
import Cartitem from '../components/Cartitem'
import { Flex, Box } from "@chakra-ui/react";
export default function Cart() {
  const [cartItem,setItem]=useState("")
  const fetchcart=async()=>{
    const data=await fetch("http://localhost:3000/cart")
    const cartjson=await data.json()
    if(data.ok){
      setItem(cartjson)
    }
  }
  useEffect(() => {
    fetchcart();
  }, []);

  return (
    <Flex>
      <Box flex="0 0 20%">Content for the first column</Box>
      <Box flex="0 0 80%">
        
      {cartItem &&
          cartItem.map((item) => (
            <Cartitem title={item.title} url={item.image} price={item.cost} quantity={item.quantity}/>
          ))}
        
        </Box>
    </Flex>
  )
}
