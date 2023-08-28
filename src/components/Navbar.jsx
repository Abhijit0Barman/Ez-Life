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
  DrawerBody,
  Spacer
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as ReactRouterLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const nav = useNavigate()
  const { isAuth, name, logout } = useContext(AuthContext)

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
        <Box p='2' style={{ marginLeft: "" }}>
          <Heading size='lg'>{isAuth ? name : "USER"}</Heading>
        </Box>
        <Spacer />
        <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
          <Link as={ReactRouterLink} to={`/`}>HOME</Link>
          {/* <Link as={ReactRouterLink} to={`/login`}>LOGIN</Link> */}
          <Link as={ReactRouterLink} to={`/dashboard`}>DASHBOARD</Link>
          <Link as={ReactRouterLink} to={`/cart`}>CART</Link>
          <ButtonGroup gap='2'>
            {!isAuth && <Button colorScheme='teal' onClick={() => nav(`/signup`)}>Sign Up</Button>}
            {!isAuth && <Button colorScheme='teal' onClick={() => nav(`/login`)}>Login</Button>}
            {isAuth && <Button colorScheme='teal' onClick={logout}>Logout</Button>}
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
              <ButtonGroup gap='2'>
                {!isAuth && <Button colorScheme='teal' onClick={() => nav(`/signup`)}>Sign Up</Button>}
                {!isAuth && <Button colorScheme='teal' onClick={() => nav(`/login`)}>Login</Button>}
                {isAuth && <Button colorScheme='teal' onClick={logout}>Logout</Button>}
              </ButtonGroup>
              <br />
              <br />
              <Link as={ReactRouterLink} to={`/`}>HOME</Link>
              <br />
              <br />
              <Link as={ReactRouterLink} to={`/cart`}>CART</Link>
              <br />
              <br />
              {/* <Link as={ReactRouterLink} to={`/login`}>LOGIN</Link> */}
              <Link as={ReactRouterLink} to={`/dashboard`}>DASHBOARD</Link>
              <br />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
