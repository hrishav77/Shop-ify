import React from 'react'
import { Flex,Text,Box,Image, Button, Input, Spacer } from '@chakra-ui/react'
export default function Cartitem({title,url,price,quantity}) {
  return (
    <Flex p={4} boxShadow="md" border="gray 3px solid" borderRadius="lg" m="8">
      <Box mr={4}>
        <Image src={url} alt="Product Image" boxSize={40} objectFit="cover" />
      </Box>
        <Box>
      <Flex flex="1" justify="space-between" align="baseline">
          <Text fontSize="20px" fontWeight="bold">{title}</Text>
        
      </Flex>
      <Flex flex="1" justify="flex-start" align="inherit">
           <Text backgroundColor="blackAlpha.300" p="3" borderRadius="md" m="3">Price: ${price}</Text>
          <Text backgroundColor="blackAlpha.300" p="3" borderRadius="md" m="3">Qty:{quantity}</Text> 
      </Flex>
        </Box>
    </Flex>
  )
}
