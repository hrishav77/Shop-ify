import React, { useEffect, useState } from 'react'
import Cartitem from '../components/Cartitem'
import { Flex, Box, Button, Spacer } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
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
            <Cartitem title={item.title} url={item.image} price={item.cost} quantity={item.quantity} id={item._id} Key={item._id}/>
          ))}
          
            <Flex>
              <Spacer/>
            <Link to="/checkout">
        <Button m="5" mr="10">Check out</Button></Link>

            </Flex>
        </Box>
    </Flex>
  )
}
