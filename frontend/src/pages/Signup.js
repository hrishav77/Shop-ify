import React from 'react'
import FormSignup from '../components/FormSignup'
import { Box, Flex, Spacer,Text,useMediaQuery} from '@chakra-ui/react'


export default function SignupForm() {
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ])
  return (
    <>
        <Flex flexDirection={isSmallScreen?"column":""}>
        <Text color="white" w={isSmallScreen?"90%":"61.5%"} bg="blackAlpha.400" ml={isSmallScreen?"5":"10"} mr={isSmallScreen?"":"12"} fontFamily="cursive" fontSize={isSmallScreen?"sm":"lg"} borderRadius="10">Welcome to my e-commerce website, designed to showcase the functionality of an online shopping experience! In my platform, you can search for products and explore different categories to find what you're looking for.Once you find a product you like, click on the "Add to Cart" button to include it in your virtual shopping cart. This allows you to keep track of your selected items as you continue browsing.
In the cart, you can review the items, adjust quantities, and remove products if needed. While this feature does not facilitate actual purchases in this project, it showcases the process of adding items to a cart before proceeding to checkout.</Text>
        <FormSignup/>
        </Flex>
    </>
  )
}
