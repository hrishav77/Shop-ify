import { Card, CardBody, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';
import React, { useContext } from 'react';
import ItemOverlay from './ItemOverlay';
import { CartContext } from './context/Cartcontext';
import { Link } from 'react-router-dom';
export default function Item(props) {
  const a=useContext(CartContext);
  // const cartObject={props.title,props}
  

  return (
    <Card m="2" borderRadius="5%" w="280px" h="500px" border="gold 3px solid">
      <CardBody> 
       
       
        <Image src={props.url} borderRadius='lg' w="100%" h="250px" />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{props.title.slice(0,20)}</Heading>
          <Text>
          {/* {props.description.slice(0, 50)}... */}
          {/* <ItemOverlay desc={props.description} url={props.url} title={props.title}/> */}
          
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            ${props.price}
          </Text>
        </Stack>
        <Divider />
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            Buy now
          </Button>
         
          <Link to="/singleproduct" >
          <Button colorScheme='teal' onClick={() => a.clickHandler({url:props.url, title:props.title, price:props.price,desc:props.description,id:props.id})}>Click to see</Button>
        </Link>
        </ButtonGroup>
      </CardBody>
      

    </Card>
  );
}
