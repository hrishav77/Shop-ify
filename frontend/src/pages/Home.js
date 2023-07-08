import { Flex } from '@chakra-ui/react';
import Product from '../components/Product'
import Starting from './Starting'

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
