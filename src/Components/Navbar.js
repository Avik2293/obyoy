import React, { useState } from 'react';
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";


const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path fill="white" d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = () => (
    <svg
        width="24px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
    >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" mb={5} p={5} bg='gray' >

            <Text w="100px" fontSize="lg" fontWeight="bold" color='white'>
                Logo
            </Text>

            <Box display={{ base: "block", md: "none" }} onClick={toggle}>
                {isOpen ? <CloseIcon /> : <MenuIcon />}
            </Box>

            <Box
                display={{ base: isOpen ? "block" : "none", md: "block" }}
                flexBasis={{ base: "100%", md: "auto" }}
            >
                <Stack
                    spacing={8} align="center" pt={[4, 4, 0, 0]}
                    justify={["center", "space-between", "flex-end", "flex-end"]}
                    direction={["column", "row", "row", "row"]}
                >
                    <Link href='/'>
                        <Text display="block" color='white'>Home</Text>
                    </Link>
                    
                    <Link href='/dashboard'>
                        <Text display="block" color='white'>Dashboard</Text>
                    </Link>

                    <Link href="/login" isLast>
                        <Button size="sm" fontWeight='bold' rounded="md" color='green' p='1' bg="white" _hover={{ bg: "green", color: "white" }}>
                            Login
                        </Button>
                    </Link>
                </Stack>
            </Box>
        </Flex>
    );
};

export default Navbar;