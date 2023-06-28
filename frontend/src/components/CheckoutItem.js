
import { Flex,Text,Box,Image} from '@chakra-ui/react'

export default function CheckoutItem({title,url,price,quantity}) {
  
 
  return (
    <>
    <Flex p={4} boxShadow="md"  borderRadius="lg" m="8" bg="blackAlpha.200">
      <Box m="3">
        <Image src={url} alt="Product Image" w="150px" h="150px" boxShadow="dark-lg" objectFit="cover" borderRadius="10%"/>
      </Box>
        <Box>
      <Flex flex="1" justify="space-between" align="baseline">
          <Text fontSize="20px" fontWeight="bold">{title}</Text>
        
      </Flex>
      <Flex flex="1" justify="flex-start" align="inherit">
           <Text backgroundColor="blackAlpha.300" p="3" borderRadius="md" m="3">Price: ${price}</Text>
           <Flex justifyContent="center" alignItems="center">
           <Flex justifyContent="center" alignItems="center">

  <Text backgroundColor="blackAlpha.300" p="3" borderRadius="md" m="3">Qty: {quantity}</Text> 
  
</Flex>
</Flex>
      </Flex>
        </Box>
 
    </Flex>
    </>
  )
}
