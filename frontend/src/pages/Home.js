import { Box, Flex } from '@chakra-ui/react';
import Product from '../components/Product'
import Starting from './Starting'
import {BrowserRouter,Routes ,Route,Navigate } from "react-router-dom";
export default function Home({buttonHandler}) {
  
  return (
    <div>
     <Starting clicked={buttonHandler} />
    <Flex mt="10">
    <Product category={"all"}/>
    </Flex>
     
    </div>
  )
}
