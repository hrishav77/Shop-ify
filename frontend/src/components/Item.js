import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import ItemOverlay from './ItemOverlay';

export default function Item(props) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Card m="2" borderRadius="5%" w="300px" h="560px">
      <CardBody> 
        <Image src={props.url} borderRadius='lg' w="80%" h="40%" />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{props.title.slice(0,20)}</Heading>
          <Text>
          {props.description.slice(0, 50)}...
          <ItemOverlay desc={props.description} url={props.url} title={props.title}/>
         
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            {props.price}
          </Text>
        </Stack>
        <Divider />
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            Buy now
          </Button>
          <Button variant='ghost' colorScheme='blue'>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardBody>
      

    </Card>
  );
}
