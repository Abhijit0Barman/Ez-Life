import React, { useState } from 'react';
import {
  Flex,
  Box,
  Heading,
  ButtonGroup,
  Button,
  IconButton,
  HStack,
  Link,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Flex minWidth='max-content' bg="teal.400" align='center' p={4} justify="space-between">
          <Image
            borderRadius='full'
            boxSize='50px'
            src='favicon.ico'
            alt='logo'
          />
        <Box p='2' style={{marginLeft:"-1400px"}}>
          <Heading size='lg'>EZ</Heading>
        </Box>
        <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
          <Link as={ReactRouterLink} to={`/`}>HOME</Link>
          <Link as={ReactRouterLink} to={`/login`}>LOGIN</Link>
          <Link as={ReactRouterLink} to={`/dashboard`}>DASHBOARD</Link>
          <ButtonGroup gap='2'>
            <Button colorScheme='teal'>Sign Up</Button>
            <Button colorScheme='teal'>Log in</Button>
          </ButtonGroup>
        </HStack>
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          onClick={toggleDrawer}
          display={{ base: 'block', md: 'none' }}
        />
      </Flex>

      {/* Drawer for the burger menu */}
      <Drawer isOpen={isDrawerOpen} placement="left" onClose={toggleDrawer}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Link as={ReactRouterLink} to={`/`}>HOME</Link>
              <Link as={ReactRouterLink} to={`/login`}>LOGIN</Link>
              <Link as={ReactRouterLink} to={`/dashboard`}>DASHBOARD</Link>
              <ButtonGroup gap='2'>
                <Button colorScheme='teal'>Sign Up</Button>
                <Button colorScheme='teal'>Log in</Button>
              </ButtonGroup>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
