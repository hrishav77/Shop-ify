import { Box ,Button} from '@chakra-ui/react'
import React from 'react'

export default function Starting(props) {

  return (
   
    <Box>
        <Button colorScheme='teal' value="jewelery" onClick={props.clicked}>
        jewelery
        </Button>
        <Button colorScheme='teal' value="men's clothing" onClick={props.clicked}>
        mens clothing
        </Button>
    </Box>

  )
}
