import React, { useState, useEffect } from 'react';
import { Input, InputGroup, InputRightElement, IconButton, Select, Card, SimpleGrid } from '@chakra-ui/react';
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


  return (
    <div>
      <InputGroup>
        <Input
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <InputRightElement>
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            onClick={() => {
              // Perform immediate search here if needed
              console.log('Performing immediate search for:', searchTerm);
            }}
          />
        </InputRightElement>
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
      {/* Display the fetched data */}

      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX='20px' spacingY='20px' 
      style={{ border: "1px solid white", padding: "2rem" ,
      }}>
        {data.map(item => (
          <CardItem key={item.id} {...item} />
        ))}
      </SimpleGrid>

    </div>
  );
};
