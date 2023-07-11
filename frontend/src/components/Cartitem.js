import React, { useContext, useState } from 'react'
import { Flex,Text,Box,Image, Button, useMediaQuery} from '@chakra-ui/react'
import { CartContext } from './context/Cartcontext'
import { useAuthContext } from './hooks/useAuthContext'
export default function Cartitem({title,url,price,quantity,id}) {
  const a=useContext(CartContext)
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ])
  const {user}=useAuthContext()
  // const [deleted,setdelete]=useState(true)
  const [quant,setquat]=useState(quantity)
  const removeCart=async()=>{
    const data=await fetch("http://localhost:4000/cart/"+id,{
      method:'DELETE',
      headers:{
        'Authorization':`Bearer ${user.token}`
      }
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
     <Flex p={4} boxShadow="md"  bg="blackAlpha.200" borderRadius="lg" m={isSmallScreen?"5":"8"} w={isSmallScreen?"85%":""} direction={isSmallScreen?"column":""}>
      <Box m="3" h="150px">
        <Image src={url} alt="Product Image" w="150px" h={isSmallScreen?"140px":"150px"} boxShadow="dark-lg" objectFit="cover" borderRadius="10%" ml={isSmallScreen?"5":""}/>
      </Box>
        <Box>
      <Flex flex="1" justify="space-between" align="baseline">
          <Text fontSize={isSmallScreen?"14px":"20px"} fontWeight="bold" ml={isSmallScreen?"7":""}>{title}</Text>
        
      </Flex>
      <Flex flex="1" justify="flex-start" align="inherit">
           <Text  p="3" borderRadius="md" m="3" fontSize={isSmallScreen?"15px":"xl"}>${price}</Text>
           <Flex justifyContent="center" alignItems="center">
  <Button size={isSmallScreen?"2xs":"xs"} onClick={() => { quantityHandler(quant) }}>-</Button>
  <Text backgroundColor="blackAlpha.300" p="3" borderRadius="md" m="3" fontSize={isSmallScreen?"xs":""}> Qty:{quant}</Text> 
  <Button size={isSmallScreen?"2xs":"xs"} onClick={() => { a.ChangeQuantity({id: id, adder: 1}); setquat(quant + 1); }}>+</Button>

</Flex>
      </Flex>
        </Box>
        <Button ml="5" mr="3" size={isSmallScreen?"sm":"lg"} colorScheme="blackAlpha" _hover={{ backgroundColor: 'red.400' }} onClick={removeCart} fontSize={isSmallScreen?"xs":""}>Remove</Button>
    </Flex>
    </>
  )
}
