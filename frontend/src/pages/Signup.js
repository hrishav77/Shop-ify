import React from 'react'
import FormSignup from '../components/FormSignup'
import { Box, Flex, Spacer,Text,useMediaQuery,Image} from '@chakra-ui/react'


export default function SignupForm() {
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ])
  return (
    <div>
     
        <FormSignup/>

    </div>
  )
}
