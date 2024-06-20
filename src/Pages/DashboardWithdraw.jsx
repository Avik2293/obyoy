import React, { useState } from 'react';
import {
    HStack,
    Text,
    TableContainer,
    VStack,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    Box,
} from '@chakra-ui/react';
import { Form } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectToken } from '../Redux/Reducer';

const DashboardWithdraw = ({ isWithdrawOpen, onWithdrawOpen, onWithdrawClose }) => {

    // const dispatch = useDispatch();

    // const token = useSelector(state => selectToken(state));

    const [withdrawTableData, setWithdrawTableData] = useState([
        {
            withdraw_id: 533,
            withdraw_date: '25 January, 2022',
            prev_balance: 5233,
            withdraw_amount: 233,
            update_balance: '',
            withdraw_system: 'Bkash',
            withdraw_info: '01758727366',
            status: 'Pending',
            remarks: 'okay',
        },
        {
            withdraw_id: 534,
            withdraw_date: '26 January, 2022',
            prev_balance: 523,
            withdraw_amount: 33,
            update_balance: 500,
            withdraw_system: 'bank',
            withdraw_info: 'Bank Asia - 23234017343458727366',
            status: 'Rejected',
            remarks: 'Fault input',
        },
        {
            withdraw_id: 543,
            withdraw_date: '25 March, 2022',
            prev_balance: 5323,
            withdraw_amount: 533,
            update_balance: 5300,
            withdraw_system: 'Nagad',
            withdraw_info: '01755723366',
            status: 'Completed',
            remarks: 'Problem was two times, but then.',
        },
        {
            withdraw_id: 57342423343,
            withdraw_date: '25 April, 2022',
            prev_balance: 5232323,
            withdraw_amount: 233,
            update_balance: '',
            withdraw_system: 'Devit-card',
            withdraw_info: '323dfdd501758727366',
            status: 'Pending',
            remarks: '',
        },
        {
            withdraw_id: 593,
            withdraw_date: '25 June, 2022',
            prev_balance: 5233,
            withdraw_amount: 23343433433,
            update_balance: 5000,
            withdraw_system: 'Credit-Card',
            withdraw_info: 'adhadud, adasdis, 01758727366',
            status: 'Rejected',
            remarks: 'okay',
        },
    ]);

    // for withdraw specific data show modal 
    // const { isOpen: isWithdrawOpen, onOpen: onWithdrawOpen, onClose: onWithdrawClose } = useDisclosure();

    // remaining work for later ***
    // for specific withdraw see
    const [selectedWithdraw, setSelectedWithdraw] = useState("");
    const [selectedWithdrawInfo, setSelectedWithdrawInfo] = useState();
    const handleWithdrawView = (withdraw_id) => {
        setSelectedWithdrawInfo({
            withdraw_id: 533,
            withdraw_date: '25 January, 2022',
            prev_balance: 5233,
            withdraw_amount: 233,
            update_balance: '',
            withdraw_system: 'Bkash',
            withdraw_info: '01758727366',
            status: 'Pending',
            remarks: 'okay',
        });
        console.log(withdraw_id);

        onWithdrawOpen();
        setSelectedWithdraw('');
    };
    const handleWithdrawApprove = (withdraw_id) => {
        console.log(withdraw_id);
    };
    const handleWithdrawReject = (withdraw_id) => {
        console.log(withdraw_id);
    };
    const handleWithdrawDelete = (withdraw_id) => {
        console.log(withdraw_id);
        // onDeleteOpen();
    };


    return (
        <div>
            {/* specific withdraw data show modal */}
            <Modal isOpen={isWithdrawOpen} onClose={onWithdrawClose}>
                <ModalOverlay
                    bg='blackAlpha.300'
                    backdropFilter='blur(10px) hue-rotate(90deg)'
                />
                <ModalContent
                    bg={'gray'}
                    maxWidth={'400px'}
                    mx={'auto'}
                    my={'auto'}
                    borderRadius={10}
                    padding={5}
                >
                    <ModalHeader
                        fontSize='lg'
                        fontWeight='bold'
                        textAlign={'center'}
                        color={'white'}
                    >
                        User Data for User No. : {selectedWithdrawInfo?.withdraw_id}</ModalHeader>

                    {/* <ModalCloseButton /> */}

                    <ModalBody
                        fontWeight='semibold'
                        textAlign={'center'}
                        my={3}
                    >
                        <VStack
                            justify={'space-evenly'}
                            textAlign={'center'}
                            whiteSpace="break-spaces"
                        >
                            <Text>Withdraw Date : {selectedWithdrawInfo?.withdraw_date}</Text>
                            <Text>Previous Balance : {selectedWithdrawInfo?.prev_balance}</Text>
                            <Text>Withdraw Amount : {selectedWithdrawInfo?.withdraw_amount}</Text>
                            <Text>Update Balance : {selectedWithdrawInfo?.update_balance}</Text>
                            <Text>Withdraw System : {selectedWithdrawInfo?.withdraw_system}</Text>
                            <Text>Withdraw Info : {selectedWithdrawInfo?.withdraw_info}</Text>
                            <Text>Status : {selectedWithdrawInfo?.status}</Text>
                            <Text>Remarks : {selectedWithdrawInfo?.remarks}</Text>

                            <HStack justify={'space-between'}>
                                <Text>
                                    <Button
                                        bgColor={'green'}
                                        p={1}
                                        px={2}
                                        mt={0}
                                        borderRadius={'lg'}
                                        color={'white'}
                                        onClick={() => handleWithdrawApprove(selectedWithdrawInfo.withdraw_id)}
                                    >
                                        Approve</Button>
                                </Text>

                                <Text>
                                    <Button
                                        bgColor={'red'}
                                        p={1}
                                        px={2}
                                        mt={0}
                                        borderRadius={'lg'}
                                        color={'white'}
                                        onClick={() => handleWithdrawReject(selectedWithdrawInfo.withdraw_id)}
                                    >
                                        Reject</Button>
                                </Text>

                                <Text>
                                    <Button
                                        bgColor={'red'}
                                        p={1}
                                        px={2}
                                        mt={0}
                                        borderRadius={'lg'}
                                        color={'white'}
                                        onClick={() => handleWithdrawDelete(selectedWithdrawInfo.withdraw_id)}
                                    >
                                        Delete</Button>
                                </Text>
                            </HStack>
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            bgColor={'black'}
                            p={1}
                            px={2}
                            mt={0}
                            borderRadius={'lg'}
                            color={'white'}
                            onClick={onWithdrawClose}
                        >
                            Close
                        </Button>
                        {/* <Button variant='ghost'>Secondary Action</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Text
                fontSize="lg"
                fontWeight="bold"
                color='black'
                textAlign={'center'}
                my={1}
                p={1}
            >
                Withdraw Management</Text>

            {/* for search  */}
            <Box
                p={'4'}
                mb={6}
                boxShadow={'md'}
                maxWidth={'500px'}
                mx={'auto'}
            >
                <Text
                    fontSize="lg"
                    fontWeight="semibold"
                    color='black'
                    textAlign={'center'}
                    my={1}
                    p={1}
                >
                    Search for Specific Withdraw</Text>

                <Form>
                    <FormControl isRequired>
                        <HStack>
                            <FormLabel
                                htmlFor="selectedWithdraw"
                                fontWeight={'bold'}
                            >
                                Withdraw ID</FormLabel>

                            <Input
                                id="selectedWithdraw"
                                type="text"
                                placeholder='Withdraw ID'
                                px={2}
                                w={'250px'}
                                onChange={(e) => setSelectedWithdraw(e.target.value)}
                                value={selectedWithdraw}
                                isRequired
                            />

                            <Button
                                bgColor={selectedWithdraw ? 'blue' : 'gray'}
                                p={1}
                                borderRadius={'lg'}
                                color={'white'}
                                isDisabled={selectedWithdraw ? false : true}
                                onClick={() => handleWithdrawView(selectedWithdraw)}
                            >
                                History</Button>
                        </HStack>
                    </FormControl>
                </Form>
            </Box>

            {/* withdraw table  */}
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
                        <Text w={'80px'} >Withdraw ID</Text>
                        <Text w={'120px'} >Withdraw Date</Text>
                        <Text w={'60px'} >Prev. Balance</Text>
                        <Text w={'80px'} >Withdraw Amount</Text>
                        <Text w={'60px'} >Update Balance</Text>
                        <Text w={'70px'} >Withdraw System</Text>
                        <Text w={'170px'} >Withdraw Info</Text>
                        <Text w={'80px'} >Status</Text>
                        <Text w={'130px'} >Remarks</Text>
                        <Text w={'60px'} ></Text>
                        <Text w={'40px'} ></Text>
                        <Text w={'40px'} ></Text>
                    </HStack>

                    {
                        withdrawTableData.map((td, i) =>
                            <HStack key={i}
                                justify={'space-evenly'}
                                textAlign={'center'}
                                gap={6}
                                whiteSpace="break-spaces"
                            >
                                <Text w={'30px'}>{i + 1}</Text>
                                <Text w={'80px'} >{td?.withdraw_id}</Text>
                                <Text w={'120px'} >{td?.withdraw_date}</Text>
                                <Text w={'60px'} >{td?.prev_balance}</Text>
                                <Text w={'80px'} >{td?.withdraw_amount}</Text>
                                <Text w={'60px'} >{td?.update_balance}</Text>
                                <Text w={'70px'} >{td?.withdraw_system}</Text>
                                <Text w={'170px'} >{td?.withdraw_info}</Text>
                                <Text w={'80px'} >{td?.status}</Text>
                                <Text w={'130px'} >{td?.remarks}</Text>
                                <Text w={'60px'} >
                                    <Button
                                        bgColor={'green'}
                                        p={1}
                                        px={2}
                                        mt={0}
                                        borderRadius={'lg'}
                                        color={'white'}
                                        onClick={() => handleWithdrawApprove(td.withdraw_id)}
                                    >
                                        Approve</Button>
                                </Text>

                                <Text w={'40px'} >
                                    <Button
                                        bgColor={'red'}
                                        p={1}
                                        px={2}
                                        mt={0}
                                        borderRadius={'lg'}
                                        color={'white'}
                                        onClick={() => handleWithdrawReject(td.withdraw_id)}
                                    >
                                        Reject</Button>
                                </Text>

                                <Text w={'40px'} >
                                    <Button
                                        bgColor={'red'}
                                        p={1}
                                        px={2}
                                        mt={0}
                                        borderRadius={'lg'}
                                        color={'white'}
                                        onClick={() => handleWithdrawDelete(td.withdraw_id)}
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

export default DashboardWithdraw;