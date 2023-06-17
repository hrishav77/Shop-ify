import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure,Box, Button, Image } from '@chakra-ui/react';

export default function ItemOverlay(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open full desc</Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered >
        <ModalOverlay backdropFilter="blur(8px)">
          <ModalContent >
            <ModalHeader>
              <Image src={props.url} borderRadius='lg' />
            </ModalHeader>
            <ModalHeader>{props.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {props.desc}
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose} m="3">Close</Button>
              <Button onClick={onClose} m="3">Buy now</Button>
              <Button onClick={onClose} m="3">Add to cart</Button>

            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
 </>
  );
}
