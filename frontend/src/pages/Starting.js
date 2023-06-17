import { Box ,Button, Flex, Image} from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"


export default function Starting(props) {

  return (     
      
        <Flex>
      <Box flex="1">
        <Link to="/product">
        <Image data-value="men's clothing" onClick={props.clicked} src='men.jpg' alt='Dan Abramov' w="80%" h="100%" m="3"/>
        </Link>
      </Box>
      <Box flex="1">
        <Link to="/product">
        <Image data-value="jewelery" onClick={props.clicked} src='jewelery.png' alt='Dan Abramov'  w="80%" h="100%" m="3"/>
        </Link>
      </Box>
      <Box flex="1">
        <Link to="/product">
        <Image data-value="women's clothing" onClick={props.clicked} src='woman.jpg' alt='Dan Abramov'  w="80%" h="100%" m="3"/>
        </Link>
      </Box>
    </Flex>
        
        
        
        
    

  )
}
