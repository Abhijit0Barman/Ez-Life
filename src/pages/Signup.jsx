import {
    Flex,
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    useToast
} from '@chakra-ui/react';
import React, { useState, useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContextProvider';

export const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate()
    const toast = useToast()
    const { login, logout, isAuth, setIsAuth } = useContext(AuthContext)

    const handleSignup = (e) => {
        e.preventDefault();

        const signUpData = {
            email: email,
            username: username,
            password: password
        };

        axios.post('https://hulking-income-7436.onrender.com/login', signUpData)
            .then(res => {
                if (res.status) {
                    toast({
                        title: `${signUpData.username}`,
                        description: "You are Success fully Register",
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    })
                    navigate(`/login`)
                }
            })
            .catch(error => {
                console.error('Login failed:', error);
            });
    };

    return (
        <Flex align="center" justify="center" minH="100vh">
            <Box bg="gray.100" p={8} rounded="md" boxShadow="md" w={{ base: '90%', sm: '400px' }}>
                <form onSubmit={handleSignup}>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="text"
                            placeholder="Enter your username"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            mb={4}
                        />
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
                            Sign Up
                        </Button>
                    </FormControl>
                </form>
            </Box>
        </Flex>
    );
};
