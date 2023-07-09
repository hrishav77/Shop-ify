import React, { useContext, useState } from 'react'
import { Flex,Text,Box,Image, Button, Input, Spacer } from '@chakra-ui/react'
import { CartContext } from './context/Cartcontext'
export default function Cartitem({title,url,price,quantity,id}) {
  const a=useContext(CartContext)
  // const [deleted,setdelete]=useState(true)
  const [quant,setquat]=useState(quantity)
  const removeCart=async()=>{
    const data=await fetch("http://localhost:4000/cart/"+id,{
      method:'DELETE',
    })
   
    const jsondata=await data.json()
    if(data.ok){
      a.setCartCount(a.cartCount-1)
    }
  }
  const quantityHandler=(quantity)=>{
    a.ChangeQuantity({id: id, adder: -1});
    if(quantity-1<=0){
      removeCart()
    }
    else{
      setquat(quant-1)
    }
  }
  return (
    <>
     <Flex p={4} boxShadow="md"  bg="blackAlpha.200" borderRadius="lg" m="8">
      <Box m="3">
        <Image src={url} alt="Product Image" w="150px" h="150px" boxShadow="dark-lg" objectFit="cover" borderRadius="10%"/>
      </Box>
        <Box>
      <Flex flex="1" justify="space-between" align="baseline">
          <Text fontSize="20px" fontWeight="bold">{title}</Text>
        
      </Flex>
      <Flex flex="1" justify="flex-start" align="inherit">
           <Text  p="3" borderRadius="md" m="3" fontSize="xl">${price}</Text>
           <Flex justifyContent="center" alignItems="center">
  <Button size="xs" onClick={() => { quantityHandler(quant) }}>-</Button>
  <Text backgroundColor="blackAlpha.300" p="3" borderRadius="md" m="3"> Qty:{quant}</Text> 
  <Button size="xs" onClick={() => { a.ChangeQuantity({id: id, adder: 1}); setquat(quant + 1); }}>+</Button>

</Flex>
      </Flex>
        </Box>
        <Button ml="5"colorScheme="blackAlpha" _hover={{ backgroundColor: 'red.400' }} onClick={removeCart}>Remove</Button>
    </Flex>
    </>
  )
}
