import { Box, Button, HStack, Text, Textarea } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-router-dom';
import { selectID, selectReviewedLineData, selectToken } from '../Redux/Reducer';
import toast from 'react-hot-toast';
import { lineReviewAction, reviewingLine } from '../Redux/Thunk/ReviewManagement';


const DashboardReviewTranslate = () => {

    const dispatch = useDispatch();

    const token = useSelector(state => selectToken(state));
    const user_id = useSelector(state => selectID(state));
    const reviewedLine = useSelector(state => selectReviewedLineData(state));

    // for initial data load
    useEffect(() => {
        dispatch(reviewingLine(token));
    }, [dispatch, token]);

    // for approve translate 
    const [start, setStart] = useState(false);
    const [nextFlag, setNextFlag] = useState(false);
    const [finalTranslateStart, setFinalTranslateStart] = useState(false);
    const [finalTranslateInput, setFinalTranslateInput] = useState('');
    const handleFinalTranslateInputChange = (e) => setFinalTranslateInput(e.target.value);
    const handleSubmit = (status) => {
        // event.preventDefault();
        // if (event) {
        //     setNextFlag(true);
        // }
        dispatch(lineReviewAction(reviewedLine.parallelsentence_id, user_id, status, reviewedLine.times_reviewed ? reviewedLine.times_reviewed + 1 : 1, finalTranslateInput, token, reviewedLine.line, reviewedLine.source_language, reviewedLine.translated_line, reviewedLine.destination_language, reviewedLine.dataset_id, reviewedLine.dataset_name, reviewedLine.datastream_id, reviewedLine.line_number, reviewedLine.translator_id));
    };

    useEffect(() => {
        if (reviewedLine.success === 'parallelsentence updated' && !nextFlag && !finalTranslateInput) {
            dispatch(reviewingLine(token));
            toast.success(reviewedLine.success);
            setStart(false);
        }
        if (reviewedLine.success === 'parallelsentence updated' && nextFlag && !finalTranslateInput) {
            dispatch(reviewingLine(token));
            toast.success(reviewedLine.success);
            setNextFlag(false);
        }
        if (reviewedLine.success === 'parallelsentence updated' && finalTranslateInput) {
            dispatch(reviewingLine(token));
            toast.success(reviewedLine.success);
            setStart(false);
            setFinalTranslateStart(false);
            setFinalTranslateInput('');
        }

        if (reviewedLine.error.message) {
            toast.error(reviewedLine.error.message);
        }
    }, [dispatch, finalTranslateInput, nextFlag, reviewedLine.error.message, reviewedLine.success, token]);

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
                Translate Management</Text>

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
                        ...</Text>

                    <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color='black'
                        textAlign={'center'}
                        my={2}
                    >
                        Click "Start" to start approving translate.</Text>

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
                            onClick={() => setStart(true)}
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
                        Dataset Name: {reviewedLine?.dataset_name}</Text>

                    <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color='black'
                        textAlign={'center'}
                        my={4}
                    >
                        Dataset Id: {reviewedLine?.dataset_id}</Text>

                    <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color='black'
                        textAlign={'center'}
                        my={4}
                    >
                        Line No.: {reviewedLine?.line_number}</Text>

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
                    // h={[null, '150px', '150px', '100px']}
                    >
                        {reviewedLine?.line}</Text>

                    <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color='black'
                        textAlign={'center'}
                        my={4}
                    >
                        Translated Line</Text>

                    <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color='black'
                        textAlign={'center'}
                        my={4}
                    >
                        Translated By:  Id:- {reviewedLine?.translator_id}</Text>

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
                    // h={[null, '150px', '150px', '100px']}
                    >
                        {reviewedLine?.translated_line}</Text>

                    {
                        !finalTranslateStart &&
                        <>
                            <HStack justify={'space-evenly'}>
                                <Text textAlign={'center'} my={2}>
                                    <Button
                                        size="lg"
                                        bg={"green"}
                                        color={"white"}
                                        _hover={{ bg: "blue.500" }}
                                        px={4}
                                        py={1}
                                        borderRadius={'lg'}
                                        onClick={() => {
                                            handleSubmit('accepted');
                                        }}
                                    >
                                        Approve
                                    </Button>
                                </Text>

                                <Text textAlign={'end'} my={2}>
                                    <Button
                                        size="lg"
                                        bg={"green"}
                                        color={"white"}
                                        _hover={{ bg: "blue.500" }}
                                        px={4}
                                        py={1}
                                        borderRadius={'lg'}
                                        onClick={() => {
                                            setNextFlag(true);
                                            handleSubmit('accepted');
                                        }}
                                    >
                                        Approve & Next
                                    </Button>
                                </Text>

                                <Text textAlign={'center'} my={2}>
                                    <Button
                                        size="lg"
                                        bg={"red"}
                                        color={"white"}
                                        _hover={{ bg: "blue.500" }}
                                        px={4}
                                        py={1}
                                        borderRadius={'lg'}
                                        onClick={() => {
                                            handleSubmit('rejected');
                                        }}
                                    >
                                        Reject
                                    </Button>
                                </Text>

                                <Text textAlign={'end'} my={2}>
                                    <Button
                                        size="lg"
                                        bg={"red"}
                                        color={"white"}
                                        _hover={{ bg: "blue.500" }}
                                        px={4}
                                        py={1}
                                        borderRadius={'lg'}
                                        onClick={() => {
                                            setNextFlag(true);
                                            handleSubmit('rejected');
                                        }}
                                    >
                                        Reject & Next
                                    </Button>
                                </Text>
                            </HStack>

                            <Text
                                fontSize="lg"
                                fontWeight="bold"
                                color='black'
                                textAlign={'center'}
                                my={2}
                                mt={5}
                            >
                                Click "Final" to start Final Translate Input.</Text>

                            <Text textAlign={'center'} my={2} mb={5}>
                                <Button
                                    rightIcon={<IoArrowForwardCircleOutline />}
                                    size="lg"
                                    bg={"blue"}
                                    color={"white"}
                                    _hover={{ bg: "blue.500" }}
                                    px={4}
                                    py={1}
                                    borderRadius={'lg'}
                                    onClick={() => setFinalTranslateStart(!finalTranslateStart)}
                                >
                                    Final
                                </Button>
                            </Text>

                        </>
                    }

                    {
                        finalTranslateStart &&
                        <Box>
                            {/* <Form onSubmit={handleSubmit}> */}
                            <Form>
                                <Textarea
                                    name="finalTranslateInput"
                                    id="finalTranslateInput"
                                    variant='filled'
                                    width='100%'
                                    p={3}
                                    my={3}
                                    placeholder='Type your input here..'
                                    onChange={handleFinalTranslateInputChange}
                                    required
                                    value={finalTranslateInput}
                                // h={[null, '150px', '150px', '100px']}
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
                                            if (finalTranslateInput) {
                                                handleSubmit('reviewed');
                                            }
                                        }}
                                    >
                                        Final Submit
                                    </Button>
                                </Text>
                            </Form>
                        </Box>
                    }

                </Box>
            }
        </div>
    );
}

export default DashboardReviewTranslate;