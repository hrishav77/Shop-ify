import { Card, CardBody, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Box } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { CartContext } from './context/Cartcontext';
import { Link } from 'react-router-dom';
import Rating from './Rating';
export default function Item(props) {
  const a=useContext(CartContext);
  // const cartObject={props.title,props}
  

  return (
    <Card m="2" borderRadius="5%" w="280px" h="500px" border="gold 2px solid" bg="white.200" boxShadow="lg">
      <CardBody m="5"> 
      <Link to="/singleproduct" >
        <Image src={props.url} borderRadius='lg' w="100%" h="250px"  onClick={() => a.clickHandler({url:props.url, title:props.title, price:props.price,desc:props.description,id:props.id,rating:props.rating})}/>
        </Link>
        <Stack mt='3' spacing='3'>
          <Heading size='md'>{props.title.slice(0,20)}...</Heading>
          <Text>
          {/* {props.description.slice(0, 50)}... */}
          {/* <ItemOverlay desc={props.description} url={props.url} title={props.title}/> */}
          
          <Rating rating={props.rating}/>
        
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            ${props.price}
          </Text>
        </Stack>
        <Divider />
        <ButtonGroup spacing='2'>
          <Link to="/cart">
          <Button variant='solid' colorScheme='blue' onClick={()=>a.Addtocart({title:props.title,url:props.url,quantity:1,price:props.price,id:props.id})} >
            Buy now
          </Button>
          </Link>
          <Link to="/singleproduct" >
          <Button colorScheme='teal' onClick={() => a.clickHandler({url:props.url, title:props.title, price:props.price,desc:props.description,id:props.id,rating:props.rating})}>Click to see</Button>
        </Link>
        </ButtonGroup>
      </CardBody>
    </Card>
  );
}
