import { Image,Box,Flex,Text,Button, Spacer,useMediaQuery} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CartContext } from '../components/context/Cartcontext'
import Rating from '../components/Rating'
export default function ProductUnit() {
    const a=useContext(CartContext)
    const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
      "(max-width: 900px)",
      "(display-mode: browser)",
    ])
  return (
    <Flex>
    <Box flex="0 0 40%">
        <Box m={isSmallScreen?"2":"10"}>
        <Image src={a.product.url}  borderRadius="5%" m={isSmallScreen?"1":"5"} />
        </Box>
    </Box>
    <Box flex="0 0 60%">
      <Text w="-webkit-fit-content" borderRadius="10" fontSize={isSmallScreen?"lg":"5xl"} m={isSmallScreen?"1":"5"} mb="1" color="white" >{a.product.title}</Text>
      <Flex direction="row">
      <Text fontSize="xl" ml="5" color="white">{a.product.rating.rate}</Text>
      <Rating rating={a.product.rating}/>
      </Flex>
      <Box h="1px" bg="gray.400" my={4} />
      <Text fontSize={isSmallScreen?"sm":"2xl"} m={isSmallScreen?"1":"5"} color="white">{a.product.description}</Text>
      <Flex alignItems="center">
      <Button variant='solid' size={isSmallScreen?"sm":"md"} colorScheme="green" m={isSmallScreen?"1":"5"} onClick={()=>a.Addtocart({title:a.product.title,url:a.product.url,quantity:1,price:a.product.price,id:a.product.id})} >
            Add to cart
      </Button>
      <Text fontSize={isSmallScreen?"sm":"4xl"} w="-webkit-fit-content" color="green.400" mr="10">${a.product.price}</Text>
      </Flex>
      
    </Box>
      <Box>
      </Box>
  </Flex>
  )
}
