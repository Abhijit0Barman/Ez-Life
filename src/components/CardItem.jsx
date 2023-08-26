import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Heading,
  Center
} from '@chakra-ui/react'
import { useState } from 'react';

export const CardItem = ({ image, title, description, price, duration, destination, tour }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card" onClick={toggleModal} style={{
      // border: "1px solid black",
      borderRadius: "10px",
      padding: "5px",
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
      margin: "10px", width: "20rem",
      textAlign: "center"
    }}>
      <img src={image[0]} alt={title} width='100%' style={{ borderRadius: "10px", marginBottom: "20px" }} />
      <Heading as='h3' size='sm' style={{ marginBottom: "10px" }}>Title: {title}</Heading>
      <p><Heading as='span' size='xs'>Description : </Heading> {description}</p>
      <p><Heading as='span' size='xs'>Destination : </Heading> {destination}</p>
      <Button colorScheme="blue" mr={3} mt={5}>
        Price: ₹ {price}
      </Button>
      <Modal isOpen={isOpen} onClose={toggleModal} >
        <ModalOverlay />
        <ModalContent>
          <br />
          <ModalHeader>Title: {title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody lineHeight={8} >
            <img src={image[0]} alt={title} style={{ maxWidth: '100%' }} />
            <p><Heading as='span' size='xs'>Description : </Heading> {description}</p>

            <p><Heading as='span' size='xs'>Duration : </Heading> {duration}</p>

            <p><Heading as='span' size='xs'>Destination : </Heading> {destination}</p>

            <p><Heading as='span' size='xs'>Tour : </Heading> {tour[0].title}</p>

            <p><Heading as='span' size='xs'>Info : </Heading> {tour[0].description}</p>



          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={toggleModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
