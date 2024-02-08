import React, { useState } from 'react';
import { Container, HStack, Text, Box, GridItem, Grid, Link as ChakraLink, Image, Button, Input, } from '@chakra-ui/react'
import { Form, Link as ReactRouterLink } from 'react-router-dom';
import { IoArrowForwardCircleOutline } from "react-icons/io5";


const Home = () => {
    const [start, setStart] = useState(false);
    const [input, setInput] = useState('')
    const handleInputChange = (e) => setInput(e.target.value)

    const handleSubmit = event => {
        // event.preventDefault();
        setInput('');
        console.log(input);
        setStart(!start);
    };

    const handleSubmitNext = event => {
        // event.preventDefault();
        setInput('');
        console.log(input);
        // new line call 
    };

    return (
        <Container
            pb={{ base: '2', md: '4', }}
            px={{ base: '3', md: '8', }}
            maxWidth={"1400px"}
            mx={'auto'}
        >
            <Grid
                gap={4}
                templateRows='repeat(3, 1fr)'
                templateColumns='repeat(5, 1fr)'
            >
                {/* left side part */}
                <GridItem
                    rowSpan={3}
                    colSpan={[5, 5, 2, 2, 1]}
                    bg='papayawhip'
                    boxShadow='2xl'
                    p='6'
                    rounded='md'
                >
                    <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color='blue'
                        textAlign={'center'}
                        my={5}
                    >
                        Leaderboard (Balance)</Text>

                    <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color='black'
                        textAlign={'center'}
                        my={5}
                    >
                        Top 5</Text>

                    {
                        <Box
                            fontSize="md"
                            fontWeight="bold"
                            color='black'
                            textAlign={'center'}
                        >
                            <Text>1. dummy (234423 tk)</Text>
                            <Text>2. dummy (234423 tk)</Text>
                            <Text>3. dummy (234423 tk)</Text>
                            <Text>4. dummy (234423 tk)</Text>
                            <Text>5. dummy (234423 tk)</Text>
                        </Box>
                    }

                    <Text
                        fontSize="lg"
                        fontWeight="semibold"
                        color='black'
                        textAlign={'center'}
                        my={5}
                    >
                        Next Top 5</Text>

                    {
                        <Box
                            fontSize="md"
                            fontWeight="bold"
                            color='black'
                            textAlign={'center'}
                        >
                            <Text>6. dummy (234423 tk)</Text>
                            <Text>7. dummy (234423 tk)</Text>
                            <Text>8. dummy (234423 tk)</Text>
                            <Text>9. dummy (234423 tk)</Text>
                            <Text>10. dummy (234423 tk)</Text>
                        </Box>
                    }

                    <Text
                        fontSize="md"
                        fontWeight="bold"
                        color='blue'
                        textAlign={'center'}
                        mt={10}
                        _hover={{ textDecoration: 'underline' }}
                    >
                        <ChakraLink as={ReactRouterLink} to='/leaderboard' >
                            See Full List
                        </ChakraLink>
                    </Text>
                </GridItem>

                {/* middle part */}
                <GridItem
                    rowSpan={3}
                    colSpan={[5, 5, 3, 3, 3]}
                    boxShadow='dark-lg'
                    p='6'
                    rounded='md'
                >

                    {
                        !start &&
                        <>
                            <Text
                                fontSize="lg"
                                fontWeight="bold"
                                color='black'
                                textAlign={'center'}
                                mb={2}
                            >
                                Welcome,</Text>
                            <Text
                                fontSize="lg"
                                fontWeight="bold"
                                color='black'
                                textAlign={'center'}
                                my={2}
                            >
                                Click "Start" to start translate.</Text>

                            <Text textAlign={'center'} my={2}>
                                <Button
                                    rightIcon={<IoArrowForwardCircleOutline />}
                                    size="lg"
                                    bg={"blue"}
                                    color={"white"}
                                    _hover={{ bg: "blue.500" }}
                                    px={4}
                                    py={1}
                                    borderRadius={'lg'}
                                    onClick={() => setStart(!start)}
                                >
                                    Start
                                </Button>
                            </Text>
                        </>
                    }

                    {
                        start &&
                        <Box>
                            <Text
                                fontSize="lg"
                                fontWeight="bold"
                                color='black'
                                textAlign={'center'}
                                my={4}
                            >
                                Line 1</Text>

                            <Text
                                border='2px'
                                borderColor='gray'
                                borderRadius="md"
                                fontSize="lg"
                                fontWeight="semibold"
                                bg={'gray'}
                                color='white'
                                textAlign={'center'}
                                my={2}
                                p={3}
                                h={[null, '150px', '150px', '100px']}
                            >
                                .........................................
                                ..........................................................
                                ....................................................</Text>

                            {/* <Form onSubmit={handleSubmit}> */}
                            <Form>
                                <Input
                                    name="input"
                                    id="input"
                                    variant='filled'
                                    width='100%'
                                    p={3}
                                    my={3}
                                    placeholder='Type your input here..'
                                    onChange={handleInputChange}
                                    required
                                    value={input}
                                    h={[null, '150px', '150px', '100px']}
                                />

                                <HStack justify={'space-evenly'}>
                                    <Text textAlign={'center'} my={2}>
                                        <Button
                                            size="lg"
                                            bg={"blue"}
                                            color={"white"}
                                            _hover={{ bg: "blue.500" }}
                                            px={4}
                                            py={1}
                                            borderRadius={'lg'}
                                            type='submit'
                                            onClick={(event) => {
                                                if (input) {
                                                    handleSubmit(event);
                                                }
                                            }}
                                        >
                                            Submit
                                        </Button>
                                    </Text>

                                    <Text textAlign={'end'} my={2}>
                                        <Button
                                            size="lg"
                                            bg={"blue"}
                                            color={"white"}
                                            _hover={{ bg: "blue.500" }}
                                            px={4}
                                            py={1}
                                            borderRadius={'lg'}
                                            type='submit'
                                            onClick={(event) => {
                                                if (input) {
                                                    handleSubmitNext(event);
                                                }
                                            }}
                                        >
                                            Submit & Next
                                        </Button>
                                    </Text>
                                </HStack>
                            </Form>
                        </Box>
                    }
                </GridItem>

                {/* right side part */}
                <GridItem
                    rowSpan={3}
                    colSpan={[5, 5, 2, 2, 1]}
                    bg='papayawhip'
                    boxShadow='2xl'
                    p='6'
                    rounded='md'
                >
                    <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color='blue'
                        textAlign={'center'}
                        my={5}
                    >
                        Profile</Text>

                    <Image
                        borderRadius='full'
                        boxSize='50px'
                        mx={'auto'}
                        src='https://bit.ly/dan-abramov'
                        alt='Dan Abram'
                    />

                    <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color='black'
                        textAlign={'center'}
                        my={1}
                    >
                        dummy </Text>

                    <Box
                        fontSize="sm"
                        fontWeight="bold"
                        color='black'
                        textAlign={'center'}
                    >
                        <Text>Date of Join: 22 March, 2022</Text>
                        <Text >Total Working Days: 356 Days</Text>
                    </Box>

                    <Box
                        fontSize="lg"
                        fontWeight="semibold"
                        color='black'
                        textAlign={'center'}
                    >
                        <Text mt={6}>Balance</Text>
                        <Text my={1}>::: Tk. 345.56 :::</Text>

                        <Text mt={6}>For Approve</Text>
                        <Text my={1}>::: Tk. 35.56 :::</Text>

                        <Text mt={6}>Today's Contribution</Text>
                        <Text my={1}>::: Tk. 5.56 :::</Text>
                    </Box>
                </GridItem>
            </Grid>
        </Container>
    );
};

export default Home;