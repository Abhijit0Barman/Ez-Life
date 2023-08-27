import React, { useState, useEffect } from 'react';
import { Input, InputGroup, InputRightElement, IconButton, Select, Card, SimpleGrid, Box, HStack, Flex,InputRightAddon } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { CardItem } from '../components/CardItem';

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchTerm]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hulking-income-7436.onrender.com/packages', {
          params: {
            q: debouncedSearchTerm,
            _sort: sortType,
            _order: sortOrder
          }
        });
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [debouncedSearchTerm, sortType, sortOrder]);



  return (<>
    <Box style={{ display: "flex" }}>
      <Box style={{
        //  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px', marginTop: "3rem", width: "300px" 
      }}
        boxShadow='2xl' p='6' rounded='md' bg='white'
        mt="3rem"
      >
        <InputGroup>
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <InputRightAddon style={{ color: "black" }} children={<SearchIcon />} />
          {/* <InputRightElement>
            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              onClick={() => {
                // Perform immediate search here if needed
                console.log('Performing immediate search for:', searchTerm);
              }}
            />
          </InputRightElement> */}
        </InputGroup>
        <Select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="">Select Sort Type</option>
          <option value="destination">Destination</option>
          <option value="price">Price</option>
          {/* Add more sorting options if needed */}
        </Select>
        <Select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Select Order</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>
      </Box>
      {/* Display the fetched data */}


      <Box style={{ width: "80%" }}>
        <SimpleGrid
          // templateRows={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} 
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(3,1fr)' }}
          gap={2}
          style={{
            padding: "2rem",
          }}
        >
          {data.map(item => (
            <CardItem key={item.id} {...item} />
          ))}
        </SimpleGrid>
        {/* <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX='20px' spacingY='20px'
          style={{
            border: "1px solid white", padding: "2rem",
          }}>
          {data.map(item => (
            <CardItem key={item.id} {...item} />
          ))}
        </SimpleGrid> */}
      </Box>
    </Box>
  </>
  );
};



// for SearchIcon inside right corner
  // <InputGroup size="sm">
  //   <Input placeholder="Search" w="40rem" size="sm" />
  //   <InputRightAddon style={{ color: "black" }} children={<SearchIcon />} />
  // </InputGroup>