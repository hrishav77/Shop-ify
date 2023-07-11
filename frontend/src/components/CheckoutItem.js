
import { Flex,Text,Box,Image,useMediaQuery} from '@chakra-ui/react'

export default function CheckoutItem({title,url,price,quantity}) {
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ])
 
  return (
    <>
    <Flex p={4} boxShadow="md"  borderRadius="lg" m={isSmallScreen?"5":"8"} bg="blackAlpha.200" w={isSmallScreen?"90%":""} >
      <Box m={isSmallScreen?"1":"3"}>
        <Image src={url} alt="Product Image" w="150px" h={isSmallScreen?"100px":"150px"} boxShadow="dark-lg" objectFit="cover" borderRadius="10%"/>
      </Box>
        <Box>
      <Flex flex="1" justify="space-between" align="baseline">
          <Text fontSize={isSmallScreen?"10px":"20px"} fontWeight="bold" ml={isSmallScreen?"2":""}>{title}</Text>
        
      </Flex>
      <Flex flex="1" justify="flex-start" align="inherit" >
           <Text  backgroundColor="blackAlpha.300" p={isSmallScreen?"2":"3"} borderRadius="md" m="3" fontSize={isSmallScreen?"xs":""}>${price}</Text>
           <Flex justifyContent="center" alignItems="center">
           <Flex justifyContent="center" alignItems="center">

  <Text backgroundColor="blackAlpha.300" p={isSmallScreen?"2":"3"} borderRadius="md" m="3" fontSize={isSmallScreen?"sm":""}>Qty: {quantity}</Text> 
  
</Flex>
</Flex>
      </Flex>
        </Box>
 
    </Flex>
    </>
  )
}
