import React from 'react';
import { ButtonGroup, Container, IconButton, Stack, Text, Box } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


const Footer = () => {

    return (
        <Box bg='gray'>
            <Container
                as="footer"
                role="contentinfo"
                py={{ base: '2', md: '6', }}
                px={{ base: '5', md: '8', }}
                maxWidth={"1350px"}
                mx={'auto'}
            >
                <Stack spacing={{ base: '4', md: '5', }}>
                    <Stack justify="space-between" direction="row" align="center">
                        <Text w="100px" fontSize="lg" fontWeight="bold" color='white'>
                            Logo
                        </Text>

                        <ButtonGroup variant="tertiary">
                            <IconButton as="a" href="#" aria-label="LinkedIn"
                                icon={<FaLinkedin color='white' size='20' />}
                            />
                            <IconButton as="a" href="#" aria-label="GitHub"
                                icon={<FaGithub color='white' size='20' />}
                            />
                            <IconButton as="a" href="#" aria-label="Twitter"
                                icon={<FaTwitter color='white' size='20' />}
                            />
                        </ButtonGroup>
                    </Stack>

                    <Text
                        fontSize="sm"
                        color="fg.subtle"
                        fontWeight='semibold'
                        justify="start"
                    >
                        &copy; {new Date().getFullYear()} Aubichol, All rights reserved.
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;