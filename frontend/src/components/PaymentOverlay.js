import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, useMediaQuery } from '@chakra-ui/react';
import PaymentForm from './PaymentForm';

export default function PaymentOverlay(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
      "(max-width: 900px)",
      "(display-mode: browser)",
    ])
    return (
      <>
        <Button  m="3" size={isSmallScreen?"sm":"lg"} colorScheme="yellow" onClick={onOpen}>Proceed</Button>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay backdropFilter='blur(5px)' h="100%" w="100%"/>
          <ModalContent >
            <ModalHeader bg="blackAlpha.300">Payment</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <PaymentForm/>
            </ModalBody>
            <ModalFooter>
        
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
;

