import { Card, CardBody, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';
import React, { useContext } from 'react';
import ItemOverlay from './ItemOverlay';
import { CartContext } from './context/Cartcontext';
export default function Item(props) {
  
  const a=useContext(CartContext);
  // const cartObject={props.title,props}

const Addtocart=async()=>{
  const data = { title: props.title,quantity:1, image:props.url, cost:props.price,user_id:props.id };
  const response=await fetch("http://localhost:3000/cart",{
    method:"post",
    body:JSON.stringify(data),
    headers:{
        "Content-Type":"application/json"
    }
})
        const json=await response.json()
        console.log(a.Cartcount)
        a.setCartcount(a.Cartcount+1)
        
        if(!response.ok){console.log(json.error)}
}
  return (
    <Card m="2" borderRadius="5%" w="280px" h="500px" border="gold 3px solid">
      <CardBody> 
        <Image src={props.url} borderRadius='lg' w="100%" h="250px" />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{props.title.slice(0,20)}</Heading>
          <Text>
          {/* {props.description.slice(0, 50)}... */}
          <ItemOverlay desc={props.description} url={props.url} title={props.title}/>
         
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
          <Button variant='solid' colorScheme='blue' onClick={Addtocart} >
            Add to cart
          </Button>
        </ButtonGroup>
      </CardBody>
      

    </Card>
  );
}
