// Footer.js
import React from 'react';
import { Box, Text, Link, Flex, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box as="footer" py={8} bg="gray.800" color="white">
            <Flex justifyContent="center" alignItems="center">
                <Text>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</Text>
            </Flex>
            <Flex justifyContent="center" alignItems="center" mt={2}>
                <Link href="#" isExternal mx={2}>
                    <IconButton icon={<FaFacebook />} aria-label="Facebook" />
                </Link>
                <Link href="#" isExternal mx={2}>
                    <IconButton icon={<FaTwitter />} aria-label="Twitter" />
                </Link>
                <Link href="#" isExternal mx={2}>
                    <IconButton icon={<FaLinkedin />} aria-label="LinkedIn" />
                </Link>
                <Link href="#" isExternal mx={2}>
                    <IconButton icon={<FaInstagram />} aria-label="Instagram" />
                </Link>
            </Flex>
        </Box>
    );
};

export default Footer;
