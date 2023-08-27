import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import {
  Flex,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast 
} from '@chakra-ui/react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContextProvider';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
  const toast=useToast()
  const { login, logout, isAuth, setIsAuth } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    const logindata = {
      username: username,
      password: password
    };

    axios.get('https://hulking-income-7436.onrender.com/login', logindata)
      .then(res => {
        if (res.status) {
          // console.log("success");
          if (checkuser(res?.data, logindata)) {
            login(logindata.username)
            // console.log(username);
            // setIsAuth(true)
            toast({
              title: `${logindata.username}`,
              description: "You are success fully login",
              status: 'success',
              duration: 3000,
              isClosable: true,
            })
            navigate(`/`)
          }
          // console.log(res?.data)
          // return <Navigate to="/" />;
        }
      })
      .catch(error => {
        console.error('Login failed:', error);
      });
  };


  function checkuser(user, inputData) {
    for (let i = 0; i < user.length; i++) {
      // console.log(user[i]===inputData.username);
      if (user[i].username === inputData.username && user[i].password === inputData.password) {
        if (inputData.username === "admin" && inputData.password === "admin") {
          // console.log("admin");
          // return <Navigate to="/"/>
          login("Admin")
          navigate(`/dashboard`)
          return
        }
        // console.log(true);
        // navigate(`/`)
        // login()
        return true;
      }
    }
    // console.log(false);
    return false
  }


  if(isAuth){
    return <Navigate to="/"/>
  }

  return (
    <Flex align="center" justify="center" minH="100vh">
      <Box bg="gray.100" p={8} rounded="md" boxShadow="md" w={{ base: '90%', sm: '400px' }}>
        <form onSubmit={handleLogin}>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              mb={4}
            />
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              mb={4}
            />
            <Button type="submit" colorScheme="teal" w="100%">
              Log In
            </Button>
          </FormControl>
        </form>
      </Box>
    </Flex>
  );
};
