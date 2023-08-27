
import React, { useState } from 'react';
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Heading,
  Textarea,
} from '@chakra-ui/react';
import axios from 'axios';

const Dashboard = () => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    duration: '',
    destination: '',
    location: '',
    description: '',
    image: '',
    price: '',
  });

  const handleSubmit = async () => {
    // Send a POST request
    axios({
      method: 'post',
      url: 'https://hulking-income-7436.onrender.com/packages',
      data: formData
    }).then(res => {
      if (res.status) {
        console.log("success");
      }
    })

    // try {
    //   const response = await axios.post('https://hulking-income-7436.onrender.com/packages', formData, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });

    //   if (response.status) {
    //     // Handle success
    //     console.log('Package submitted successfully!');
    //   } else {
    //     // Handle error
    //     console.error('Error submitting package');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // console.log(typeof formData, formData);
  return (
    <ChakraProvider>
      <Container maxW="lg" py={8}>
        <Heading as="h1" size="xl" mb={4}>
          Add New Package
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Package ID</FormLabel>
            <Input name="id" value={formData.id} onChange={handleInputChange} mb={4} />
            <FormLabel>Title</FormLabel>
            <Input name="title" value={formData.title} onChange={handleInputChange} mb={4} />
            <FormLabel>Duration</FormLabel>
            <Input name="duration" value={formData.duration} onChange={handleInputChange} mb={4} />
            <FormLabel>Destination</FormLabel>
            <Input name="destination" value={formData.destination} onChange={handleInputChange} mb={4} />
            <FormLabel>Location</FormLabel>
            <Input name="location" value={formData.location} onChange={handleInputChange} mb={4} />
            <FormLabel>Description</FormLabel>
            <Textarea name="description" value={formData.description} onChange={handleInputChange} mb={4} />
            <FormLabel>Image URL</FormLabel>
            <Input name="image" value={formData.image} onChange={handleInputChange} mb={4} />
            <FormLabel>Price</FormLabel>
            <Input name="price" value={formData.price} onChange={handleInputChange} mb={4} />
            <Button colorScheme="blue" type='submin'>
              Submit
            </Button>
          </FormControl>
        </form>
      </Container>
    </ChakraProvider>
  );
};

export { Dashboard }


// import React from 'react'

// export const Dashboard = () => {
//   return (
//     <div>Dashboard</div>
//   )
// }
