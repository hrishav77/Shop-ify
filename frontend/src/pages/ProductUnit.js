import { Image,Box,Flex,Text,Button} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CartContext } from '../components/context/Cartcontext'
import Rating from '../components/Rating'
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
      <Text fontSize="5xl" m="5" mb="1">{a.product.title}</Text>
      <Flex direction="row">
      <Text fontSize="xl" ml="5">{a.product.rating.rate}</Text>
      <Rating rating={a.product.rating}/>
      </Flex>
      <Box h="1px" bg="gray.400" my={4} />
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
