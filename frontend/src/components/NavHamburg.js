import React, { Children } from 'react'
import { Link } from 'react-router-dom'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,useDisclosure,Button,Input,Badge
  } from '@chakra-ui/react'

 export default function NavHamburg({children}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        <img src="hamburger.png" alt="-"  style={{height:"30px"}} />
    
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='top'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent  size='full' backgroundImage="https://st2.depositphotos.com/1760420/5432/i/450/depositphotos_54324565-stock-photo-online-shopping-and-e-commerce.jpg">
        
            <DrawerCloseButton />
        
  
            <DrawerBody>
           {children}
            </DrawerBody>
  
  
          </DrawerContent>
        </Drawer>
      </>
    )
  }