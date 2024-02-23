import React, { useState } from 'react';
import { Container, Text, Box, GridItem, Grid, Input, Button, HStack, VStack } from '@chakra-ui/react';
import { Form } from 'react-router-dom';


const CustomDataset = () => {

    // file upload 
    const [file, setFile] = useState();
    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };
    const handleUploadClick = () => {
        if (!file) {
            return;
        }

        // 👇 Uploading the file using the fetch API to the server
        // fetch('https://httpbin.org/post', {
        //     method: 'POST',
        //     body: file,
        //     // 👇 Set headers manually for single file upload
        //     headers: {
        //         'content-type': file.type,
        //         'content-length': `${file.size}`, // 👈 Headers need to be a string
        //     },
        // })
        //     .then((res) => res.json())
        //     .then((data) => console.log(data))
        //     .catch((err) => console.error(err));

        //     alert(`Selected file - ${this.fileInput.current.files[0].name}`);
    };

    // new dataset name 
    const [newDatasetName, setNewDatasetName] = useState('');
    const handleNewDatasetNameChange = (e) => setNewDatasetName(e.target.value);

    // for dataset line input 
    const [start, setStart] = useState(false);
    const [lineInput, setLineInput] = useState('');
    const handleLineInputChange = (e) => setLineInput(e.target.value);
    const [translatedLineInput, setTranslatedLineInput] = useState('');
    const handleTranslatedLineInputChange = (e) => setTranslatedLineInput(e.target.value);

    const handleFetchDataset = (e) => {
        setStart(true);
    };

    const handleSubmitNewDatasetName = event => {
        // event.preventDefault();
        setNewDatasetName('');
        console.log(newDatasetName);
    };

    const handleSubmit = event => {
        // event.preventDefault();
        // dispatch(translatedLine(newLine.id, input));
        setLineInput('');
        setTranslatedLineInput('');
        setStart(!start);
        // console.log(lineInput);
        // console.log(translatedLineInput);
    };

    const handleSubmitNext = event => {
        // event.preventDefault();
        // dispatch(translatedLine(newLine.id, input));
        // setCount(count + 1);
        setLineInput('');
        setTranslatedLineInput('');
        // console.log(lineInput);
        // console.log(translatedLineInput);
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
                    colSpan={[5, 5, 2, 2, 2]}
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
                        my={3}
                    >
                        Your Datasets</Text>

                    {
                        <VStack
                            fontSize="md"
                            fontWeight="bold"
                            color='blue'
                            textAlign={'center'}
                            mt={2}

                        >
                            <Button _hover={{ textDecoration: 'underline' }} onClick={handleFetchDataset}>1. dummy Dataset 1</Button>
                            <Button _hover={{ textDecoration: 'underline' }} onClick={handleFetchDataset}>2. dummy Dataset 2</Button>
                            <Button _hover={{ textDecoration: 'underline' }} onClick={handleFetchDataset}>3. dummy Dataset 3</Button>
                            <Button _hover={{ textDecoration: 'underline' }} onClick={handleFetchDataset}>4. dummy Dataset 4</Button>
                            <Button _hover={{ textDecoration: 'underline' }} onClick={handleFetchDataset}>5. dummy Dataset 5</Button>
                        </VStack>
                    }

                    <Text
                        fontSize="md"
                        fontWeight="semibold"
                        color='black'
                        textAlign={'center'}
                        my={2}
                    >
                        Click to go for more line input.</Text>

                    <Text
                        fontSize="lg"
                        fontWeight="semibold"
                        color='black'
                        textAlign={'center'}
                        my={5}
                    >
                        Upload a new custom Dataset</Text>

                    {/* for Upload  */}
                    <Box
                        p={'4'}
                        mb={6}
                        boxShadow={'md'}
                        maxWidth={'500px'}
                        mx={'auto'}
                    >

                        <Box>
                            <Input type="file"
                                onChange={handleFileChange}
                            />

                            <div>
                                {file && `${file.name} - ${file.type}`}
                            </div>

                            <Button
                                bgColor={file ? 'blue' : 'gray'}
                                p={1} mt={2}
                                borderRadius={'lg'}
                                color={'white'}
                                isDisabled={file ? false : true}
                                onClick={handleUploadClick}
                            >
                                Upload</Button>
                        </Box>
                    </Box>
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
                                fontSize="2xl"
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
                                mt={8}
                            >
                                Upload a file for create your custom dataset.</Text>

                            <Text
                                fontSize="lg"
                                fontWeight="bold"
                                color='black'
                                textAlign={'center'}
                                my={2}
                            >
                                Choose & Click a custom dataset from right side to start input more lines.</Text>

                            <Text
                                fontSize="xs"
                                fontWeight="semibold"
                                color='black'
                                textAlign={'end'}
                                mt={7}
                            >
                                * We are not going to pay you for this translation.</Text>

                            <Box>
                                <Text
                                    fontSize="lg"
                                    fontWeight="bold"
                                    color='black'
                                    textAlign={'center'}
                                    my={2}
                                    mt={8}
                                >
                                    You can also create a new dataset & start input lines with translated lines.</Text>

                                <Form >
                                    <HStack>
                                        <Input
                                            name="newDatasetName"
                                            id="newDatasetName"
                                            variant='filled'
                                            width='50%'
                                            p={3}
                                            my={3}
                                            mx={'auto'}
                                            placeholder='Type new dataset name here..'
                                            onChange={handleNewDatasetNameChange}
                                            required
                                            value={newDatasetName}
                                        />

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
                                                    if (newDatasetName) {
                                                        handleSubmitNewDatasetName(event);
                                                    }
                                                }}
                                            >
                                                Create a new dataset
                                            </Button>
                                        </Text>
                                    </HStack>
                                </Form>
                            </Box>
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

                            {/* <Form onSubmit={handleSubmit}> */}
                            <Form>
                                <Input
                                    name="lineInput"
                                    id="lineInput"
                                    variant='filled'
                                    width='100%'
                                    p={3}
                                    my={3}
                                    placeholder='Type your line here..'
                                    onChange={handleLineInputChange}
                                    required
                                    value={lineInput}
                                />

                                <Input
                                    name="translatedLineInput"
                                    id="translatedLineInput"
                                    variant='filled'
                                    width='100%'
                                    p={3}
                                    my={3}
                                    placeholder='Type your translated Line here..'
                                    onChange={handleTranslatedLineInputChange}
                                    required
                                    value={translatedLineInput}
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
                                                if (lineInput && translatedLineInput) {
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
                                                if (lineInput && translatedLineInput) {
                                                    handleSubmitNext(event);
                                                }
                                            }}
                                        >
                                            Submit & Next
                                        </Button>
                                    </Text>
                                </HStack>

                                <Text textAlign={'end'} my={2}>
                                    <Button
                                        size="lg"
                                        bg={"black"}
                                        color={"white"}
                                        _hover={{ bg: "blue.500" }}
                                        px={4}
                                        py={1}
                                        borderRadius={'lg'}
                                        type='submit'
                                        onClick={(event) => setStart(false)}
                                    >
                                        Cancel
                                    </Button>
                                </Text>
                            </Form>
                        </Box>
                    }

                </GridItem>
            </Grid>
        </Container >
    );
};

export default CustomDataset;