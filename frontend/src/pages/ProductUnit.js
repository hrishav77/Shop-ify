import { Image,Box,Flex,Text,Button} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CartContext } from '../components/context/Cartcontext'

export default function ProductUnit() {
    const a=useContext(CartContext)
  return (
    <Flex>
    <Box flex="0 0 40%">
        <Box m="10">
        <Image src={a.product.url}  borderRadius="5%" m="5"/>
        </Box>
    </Box>
    <Box flex="0 0 60%">
      <Text fontSize="5xl" m="5">{a.product.title}</Text>
      <Text fontSize="2xl" m="5">{a.product.description}</Text>
      <Text fontSize="4xl" color="green.400" m="5">${a.product.price}</Text>
      <Button variant='solid' colorScheme='teal' onClick={()=>a.Addtocart({title:a.product.title,url:a.product.url,quantity:1,price:a.product.price,id:a.product.id})} >
            Add to cart
      </Button>
    </Box>
      <Box>
      </Box>
  </Flex>
  )
}
