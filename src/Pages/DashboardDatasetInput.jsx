import { Box, Button, FormControl, FormLabel, HStack, Input, TableContainer, Text, Textarea, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-router-dom';
import { selectAllDatasetsData, selectID, selectToken } from '../Redux/Reducer';
import { allDatasetsData, uploadDataset, uploadInputDataset } from '../Redux/Thunk/DatasetManagement';
import toast from 'react-hot-toast';

const DashboardDatasetInput = ({ handleDelete }) => {

    const dispatch = useDispatch();

    const token = useSelector(state => selectToken(state));
    const user_id = useSelector(state => selectID(state));
    const allDatasetManagementData = useSelector(state => selectAllDatasetsData(state));

    // for initial data load
    useEffect(() => {
        dispatch(allDatasetsData(0, 5, token));
    }, [dispatch, token]);

    // Dataset management 
    const [startInput, setStartInput] = useState(false);
    const [datasetName, setDatasetName] = useState('');
    const [datasetLanguage, setDatasetLanguage] = useState('');
    const [datasetInput, setDatasetInput] = useState('');
    const [datasetDescription, setDatasetDescription] = useState('');
    const [datasetRemarks, setDatasetRemarks] = useState('');
    // const linesArray = datasetInput.split(/\r?\n|\r|\. ?/).filter(Boolean);
    const linesArray = datasetInput
        .split(/\r?\n|\r|\. ?/g) // Split by various line breaks or dot followed by a space
        .map(line => line.trim()) // Remove leading and trailing whitespace from each line
        .filter(line => line.length > 0); // Remove empty lines

    const handleDatasetSubmit = () => {
        dispatch(uploadInputDataset(datasetName, datasetLanguage, linesArray, datasetDescription, datasetRemarks, token));
        // console.log(datasetsSuccess);
    };
    useEffect(() => {
        if (allDatasetManagementData.success === 'dataset created') {
            dispatch(allDatasetsData(0, 5, token));
            toast.success(allDatasetManagementData.success);
            setStartInput(false);
            setDatasetName('');
            setDatasetLanguage('');
            setDatasetInput('');
            setDatasetDescription('');
            setDatasetRemarks('');
        }
        if (allDatasetManagementData.success === 'dataset file created') {   // need to update the message for file
            dispatch(allDatasetsData(0, 5, token));
            toast.success(allDatasetManagementData.success);
            setFile('');
        }
        if (allDatasetManagementData.error.message) {
            toast.error(allDatasetManagementData.error.message);
        }
    }, [allDatasetManagementData.error.message, allDatasetManagementData.success, dispatch, token]);

    const [file, setFile] = useState();
    const handleFileChange = (e) => {
        // const file = event.target.files[0];
        if (e.target.files) {
            const selectedFile = e.target.files[0];
            if (!selectedFile.type.match('text.*')) {
                alert('Please select text file.');
                return;
            }
            if (selectedFile.size > 1024 * 1024) {
                alert('File size should not exceed 1MB.');
                return;
            }
            setFile(selectedFile);
        }
    };
    const handleUploadClick = () => {
        if (file) {
            dispatch(uploadDataset(user_id, file, token));
            console.log('File ready to be uploaded:', file);
        }
        else {
            alert('No file selected.');
        }
    };

    return (
        <div>
            <Text
                fontSize="lg"
                fontWeight="bold"
                color='black'
                textAlign={'center'}
                my={1}
                p={1}
            >
                Upload a Dataset for Translate</Text>

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

            <Text
                fontSize="lg"
                fontWeight="bold"
                color='black'
                textAlign={'center'}
                my={1}
                p={1}
            >
                Uplaod a Dataset by Text Input</Text>

            {
                !startInput &&
                <>
                    <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color='black'
                        textAlign={'center'}
                        mb={2}
                    >
                        ...</Text>

                    <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color='black'
                        textAlign={'center'}
                        my={2}
                    >
                        Click "Start" to start text input dataset.</Text>

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
                            onClick={() => setStartInput(!startInput)}
                        >
                            Start
                        </Button>
                    </Text>

                    <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color='black'
                        textAlign={'center'}
                        mb={2}
                    >
                        ...</Text>
                </>
            }

            {
                startInput &&
                <Box>
                    <Form>
                        <FormControl isRequired>
                            <VStack>
                                <HStack>
                                    <FormLabel htmlFor="datasetName" fontWeight={'bold'} >Dataset Name</FormLabel>
                                    <Input
                                        id="datasetName"
                                        type="text"
                                        placeholder='Type Dataset Name'
                                        px={2}
                                        w={'300px'}
                                        onChange={(e) => setDatasetName(e.target.value)}
                                        value={datasetName}
                                        isRequired
                                    />

                                    <FormLabel htmlFor="datasetLanguage" fontWeight={'bold'} >Dataset Language</FormLabel>
                                    <Input
                                        id="datasetLanguage"
                                        type="text"
                                        placeholder='Type Dataset Language'
                                        px={2}
                                        w={'300px'}
                                        onChange={(e) => setDatasetLanguage(e.target.value)}
                                        value={datasetLanguage}
                                        isRequired
                                    />
                                </HStack>

                                <FormLabel htmlFor="datasetInput" fontWeight={'bold'} >Dataset Input</FormLabel>
                                <Textarea
                                    name="datasetInput"
                                    id="datasetInput"
                                    type="text"
                                    placeholder='Type Dataset Input'
                                    px={2}
                                    w='50%'
                                    onChange={(e) => setDatasetInput(e.target.value)}
                                    value={datasetInput}
                                    isRequired
                                    border='2px'
                                    mx={'auto'}
                                    variant='filled'
                                    borderColor='gray'
                                    borderRadius="md"
                                    // fontSize="lg"
                                    // fontWeight="semibold"
                                    // bg={'gray'}
                                    // color='white'
                                    // h={[null, '150px', '150px', '100px']}
                                    h="auto"
                                    autogrow={5}
                                />

                                <Textarea
                                    name="datasetDescription"
                                    id="datasetDescription"
                                    type="text"
                                    placeholder='Type Dataset Description'
                                    px={2}
                                    w='50%'
                                    onChange={(e) => setDatasetDescription(e.target.value)}
                                    value={datasetDescription}
                                    isRequired
                                    border='2px'
                                    mx={'auto'}
                                    variant='filled'
                                    borderColor='gray'
                                    borderRadius="md"
                                    // fontSize="lg"
                                    // fontWeight="semibold"
                                    // bg={'gray'}
                                    // color='white'
                                    // h={[null, '150px', '150px', '100px']}
                                    h="auto"
                                    autogrow={5}
                                />

                                <Textarea
                                    name="datasetRemarks"
                                    id="datasetRemarks"
                                    type="text"
                                    placeholder='Type Dataset Remarks'
                                    px={2}
                                    w='50%'
                                    onChange={(e) => setDatasetRemarks(e.target.value)}
                                    value={datasetRemarks}
                                    isRequired
                                    border='2px'
                                    mx={'auto'}
                                    variant='filled'
                                    borderColor='gray'
                                    borderRadius="md"
                                    // fontSize="lg"
                                    // fontWeight="semibold"
                                    // bg={'gray'}
                                    // color='white'
                                    // h={[null, '150px', '150px', '100px']}
                                    h="auto"
                                    autogrow={5}
                                />

                                <Button
                                    bgColor={(datasetName && datasetLanguage && datasetInput && datasetDescription && datasetRemarks) ? 'blue' : 'gray'}
                                    p={1}
                                    px={2}
                                    borderRadius={'lg'}
                                    color={'white'}
                                    isDisabled={(datasetName && datasetLanguage && datasetInput && datasetDescription && datasetRemarks) ? false : true}
                                    onClick={() => handleDatasetSubmit()}
                                >
                                    Submit</Button>
                            </VStack>
                        </FormControl>
                    </Form>

                    <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color='black'
                        textAlign={'center'}
                        mb={2}
                    >
                        ...*** ...</Text>

                </Box>
            }

            <Text
                fontSize="lg"
                fontWeight="semibold"
                color='black'
                textAlign={'center'}
                my={1}
                p={1}
            >
                All Datasets Info</Text>

            {/* file table  */}
            <TableContainer >
                <VStack mx={'auto'} minWidth={"1200px"}>
                    <HStack
                        justify={'space-evenly'}
                        textAlign={'center'}
                        fontWeight={'bold'}
                        gap={6}
                        whiteSpace="break-spaces"
                    >
                        <Text w={'30px'} >No.</Text>
                        <Text w={'120px'} >Dataset ID</Text>
                        <Text w={'120px'} >Uploader ID</Text>
                        <Text w={'70px'} >Dataset Name</Text>
                        <Text w={'130px'} >Uploading Date</Text>
                        <Text w={'130px'} >Description</Text>
                        <Text w={'80px'} >Source Language</Text>
                        <Text w={'70px'} >Total Line</Text>
                        <Text w={'80px'} >Translated Line</Text>
                        <Text w={'80px'} >Reviewed Lines</Text>
                        <Text w={'120px'} >Remarks</Text>
                        <Text w={'60px'} >Action</Text>
                    </HStack>

                    {
                        allDatasetManagementData?.allDataset &&
                        allDatasetManagementData.allDataset.map((td, i) =>
                            <HStack key={i}
                                justify={'space-evenly'}
                                textAlign={'center'}
                                gap={6}
                                whiteSpace="break-spaces"
                            >
                                <Text w={'30px'} >{i + 1}</Text>
                                <Text w={'120px'} >{td?.dataset_id}</Text>
                                <Text w={'120px'} >{td?.uploader_id}</Text>
                                <Text w={'70px'} >{td?.name}</Text>
                                <Text w={'130px'} >{td?.update_date}</Text>
                                <Text w={'130px'} >{td?.description}</Text>
                                <Text w={'80px'} >{td?.source_language}</Text>
                                <Text w={'70px'} >{td?.total_lines}</Text>
                                <Text w={'80px'} >{td?.translated_lines}</Text>
                                <Text w={'80px'} >{td?.reviewed_lines}</Text>
                                <Text w={'120px'} >{td?.remarks}</Text>
                                <Text w={'60px'} gap={1}>
                                    <Button
                                        bgColor={'red'}
                                        p={1}
                                        px={2}
                                        mt={0}
                                        borderRadius={'lg'}
                                        color={'white'}
                                        onClick={() => handleDelete(td.dataset_id, "Delete Dataset", "Are you sure you want to delete this dataset?", "dataset")}
                                    >
                                        Delete</Button>
                                </Text>
                            </HStack>
                        )
                    }
                </VStack>
            </TableContainer>

        </div>
    );
}

export default DashboardDatasetInput;