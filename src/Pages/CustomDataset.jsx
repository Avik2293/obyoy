import React, { useEffect, useState } from 'react';
import { Container, Text, Box, GridItem, Grid, Input, Button, HStack, VStack } from '@chakra-ui/react';
import { Form } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchDatasets, createNewDataset, datasetFileInput, datasetLineInput } from '../Redux/Thunk/Custom';
import { selectToken, selectID, selectCustomDatasets } from '../Redux/Reducer';

const CustomDataset = () => {
    const dispatch = useDispatch();

    const token = useSelector(state => selectToken(state));
    const user_id = useSelector(state => selectID(state));

    useEffect(() => {
        dispatch(fetchDatasets(user_id));
    }, [dispatch, user_id]);

    const customDatasets = useSelector(state => selectCustomDatasets(state));

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

    const handleSubmitNewDatasetName = event => {
        // event.preventDefault();
        dispatch(createNewDataset(user_id, newDatasetName, token));
        setNewDatasetName('');
        // console.log(newDatasetName);
    };

    // for dataset selection
    const [start, setStart] = useState(false);
    const [datasetId, setDatasetId] = useState();
    const [datasetName, setDatasetName] = useState('');

    const handleFetchDataset = (dataset_id, dataset_name) => {
        setDatasetId(dataset_id);
        setDatasetName(dataset_name);
        setStart(true);
    };

    // for dataset line input 
    const [lineInput, setLineInput] = useState('');
    const handleLineInputChange = (e) => setLineInput(e.target.value);
    const [translatedLineInput, setTranslatedLineInput] = useState('');
    const handleTranslatedLineInputChange = (e) => setTranslatedLineInput(e.target.value);

    const handleSubmit = event => {
        // event.preventDefault();
        dispatch(datasetLineInput(user_id, datasetId, datasetName, lineInput, translatedLineInput, token));
        setDatasetId();
        setDatasetName('');
        setLineInput('');
        setTranslatedLineInput('');
        setStart(!start);
        // console.log(lineInput);
        // console.log(translatedLineInput);
    };

    const handleSubmitNext = event => {
        // event.preventDefault();
        dispatch(datasetLineInput(user_id, datasetId, datasetName, lineInput, translatedLineInput, token));
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
                            {
                                // console.log(customDatasets)
                                customDatasets &&
                                customDatasets.map((value, key) =>
                                    <Button key={key}
                                        _hover={{ textDecoration: 'underline' }}
                                        onClick={() => handleFetchDataset(value.dataset_id, value.dataset_name)}
                                    >
                                        {key + 1}. {value.dataset_name}
                                    </Button>
                                )
                            }
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
                                New Line Input for {datasetName}</Text>

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