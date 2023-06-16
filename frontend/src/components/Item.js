import { Card, CardBody, CardFooter,Image,Stack,Heading,Text,Divider,ButtonGroup,Button } from '@chakra-ui/react'

import React from 'react'

export default function Item(props) {
  return (
  
    <Card w="20%" h="10%" m="1%" borderRadius="5%">
    <CardBody >
    <Image
      
      src={props.url}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{props.title}</Heading>
      <Text>
        {props.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {props.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
 
  )
}
