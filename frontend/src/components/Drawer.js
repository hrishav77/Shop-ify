import { Link } from 'react-router-dom'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
  useDisclosure,Button,Text
  } from '@chakra-ui/react'
export default function CategoryDrawer(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
  
    return (
      <>
        
        <Button size="sm" colorScheme='teal' onClick={onOpen}>
          Categories v
        </Button>
        <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay backdropFilter='blur(4px)'/>
          <DrawerContent bg="antiquewhite">
            <DrawerHeader borderBottomWidth='2px' fontSize="2xl" color="blue.400" bg="antiquewhite">Categories</DrawerHeader>
            <DrawerBody bg="white">
                <Link to="/product">
                <Text fontSize="xl" m="3" data-value="men's clothing" onClick={props.buttonHandler}>Men's Clothing</Text>
                </Link>
                <Link to="/product">
                <Text fontSize="xl" m="3" data-value="women's clothing" onClick={props.buttonHandler}>Women's Clothing</Text>
                </Link>
                <Link to="/product">
                <Text fontSize="xl" m="3" data-value="jewelery" onClick={props.buttonHandler}>Jewelery</Text>
                </Link>
                <Link to="/product">
                <Text fontSize="xl" m="3" data-value="electronics" onClick={props.buttonHandler}>Electronics</Text>
                </Link>
            
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }