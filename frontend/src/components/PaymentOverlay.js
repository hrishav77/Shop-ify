import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, Image } from '@chakra-ui/react';
import PaymentForm from './PaymentForm';

export default function PaymentOverlay(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button  m="3" size="lg" colorScheme="yellow" onClick={onOpen}>Proceed</Button>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay backdropFilter='blur(5px)'/>
          <ModalContent>
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

