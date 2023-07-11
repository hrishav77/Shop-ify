import { Box ,Button, Flex, Image,useMediaQuery} from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"


export default function Starting(props) {
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ])
  return (     
      
        <Flex>
      <Box flex="1">
        <Link to="/product">
        <Image data-value="men's clothing" onClick={props.clicked} src='men.jpg' alt='Dan Abramov' w="80%" h="100%" m="3"/>
        </Link>
      </Box>
      <Box flex="1">
        <Link to="/product">
        <Image data-value="jewelery" onClick={props.clicked} src='jewelery.png' alt='Dan Abramov'  w="80%" h="50%" m="3"/>
        </Link>
        <Link to="/product">
        <Image data-value="electronics" onClick={props.clicked} src='https://www.insider-trends.com/wp-content/uploads/2018/06/alphacolor-13-172877-unsplash-960x640.jpg' alt='Dan Abramov'  w="80%" h="40%" ml="3" mr="3" mt={isSmallScreen?"4":"10"}/>
        </Link>
      </Box>
      <Box flex="1">
        <Link to="/product">
        <Image data-value="women's clothing" onClick={props.clicked} src='https://img.freepik.com/premium-photo/rich-woman-with-shopping-bags-side-view_23-2149684331.jpg?w=2000' alt='Dan Abramov'  w="80%" h="100%" m="3"/>
        </Link>
      </Box>
    </Flex>
        
        
        
        
    

  )
}
