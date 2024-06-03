import React, { useEffect, useState } from 'react';
import {
    Container,
    HStack,
    Text,
    TableContainer,
    VStack,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Image,
    FormControl,
    FormLabel,
    Input,
    Box,
    Textarea,
} from '@chakra-ui/react';
import { Form, useNavigate } from 'react-router-dom';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import DeleteDialog from '../Components/DeleteDialog';

import { useDispatch, useSelector } from 'react-redux';
import { allUsersData, userData, userDelete } from '../Redux/Thunk/UserManagement';
import { allDatasetsData, uploadInputDataset, uploadDataset, datasetDelete } from '../Redux/Thunk/DatasetManagement';
import { allCustomDatasetsData, approveCustomDataset, downloadCustomDataset } from '../Redux/Thunk/CustomDatasetManagement';
import { lineReviewAction, reviewingLine, finalTranslation } from '../Redux/Thunk/ReviewManagement';
import { selectToken, selectID, selectAllUserData, selectSingleUser, selectAllDatasetsData, selectAllCustomDatasetsData, selectReviewedLineData } from '../Redux/Reducer';
import toast from 'react-hot-toast';


const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector(state => selectToken(state));
    const user_id = useSelector(state => selectID(state));

    // for initial data load
    const userTableData = useSelector(state => selectAllUserData(state));
    const allDatasetManagementData = useSelector(state => selectAllDatasetsData(state));
    const customDatasetsTableData = useSelector(state => selectAllCustomDatasetsData(state));
    const reviewedLine = useSelector(state => selectReviewedLineData(state));
    useEffect(() => {
        dispatch(allUsersData(user_id, token));
        dispatch(allDatasetsData(0, 5, token));
        dispatch(allCustomDatasetsData(user_id, token));
        dispatch(reviewingLine(token));
    }, [dispatch, token, user_id]);

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


    // for modal/alert 

    // for specific user show
    const { isOpen, onOpen, onClose } = useDisclosure();
    // for withdraw specific data show modal 
    const { isOpen: isWithdrawOpen, onOpen: onWithdrawOpen, onClose: onWithdrawClose } = useDisclosure();
    // for delete user/dataset 
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();

    // for dynamic delete system
    const [deleteId, setDeleteId] = useState(null);
    const [deleteTitle, setDeleteTitle] = useState('');
    const [deleteMessage, setDeleteMessage] = useState('');
    const [deleteOption, setDeleteOption] = useState('');
    const handleDelete = (id, title, message, option) => {
        // Set the delete info
        setDeleteId(id);
        setDeleteTitle(title);
        setDeleteMessage(message);
        setDeleteOption(option);
        // open the delete dialog
        onDeleteOpen();
    };
    const deleteFunction = (id, option) => {
        if (option === "user") {
            dispatch(userDelete(id, token));
        }
        else if (option === "dataset") {
            dispatch(datasetDelete(id, token));
        }
        setDeleteId(null);
        setDeleteTitle('');
        setDeleteMessage('');
        setDeleteOption('');
        // for specific user delete modal close
        onClose();
    };


    // for specific user see
    const [selectedUser, setSelectedUser] = useState('');
    const selectedUserInfo = useSelector(state => selectSingleUser(state));
    const handleUserView = (user_id) => {
        dispatch(userData(user_id, token));
        // console.log(user_id);
        onOpen();
        setSelectedUser('');
    };
    // for specific user withdraw history 
    const handleView = (user_id) => {
        // console.log(user_id);
        if (user_id) {
            // window.location.href = `/dashboard/withdraw/history/${user_id}`;
            navigate(`/dashboard/withdraw/history/${user_id}`);
            setSelectedUser('');
        }
    };
    // delete user 


    // Dataset management 
    const [startInput, setStartInput] = useState(false);
    const [datasetName, setDatasetName] = useState('');
    const [datasetLanguage, setDatasetLanguage] = useState('');
    const [datasetInput, setDatasetInput] = useState('');
    const [datasetDescription, setDatasetDescription] = useState('');
    const [datasetRemarks, setDatasetRemarks] = useState('');
    const linesArray = datasetInput.split(/[\r\n.]+ ?/).filter(Boolean);
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


    // custom dataset management
    const handleApproveCustomDataset = (dataset_id) => {
        // console.log(dataset_id);
        dispatch(approveCustomDataset(dataset_id, token));
    };
    const handleDownloadCustomDataset = (dataset_id) => {
        // console.log(dataset_id);
        dispatch(downloadCustomDataset(dataset_id, token));
    };


    // for approve translate 
    const [start, setStart] = useState(false);
    const [nextFlag, setNextFlag] = useState(false);
    const [status, setStatus] = useState('');
    const handleSubmit = (event) => {
        // event.preventDefault();
        // reviewedLine.success = '';
        // setNextFlag(false);
        if (event) {
            dispatch(lineReviewAction(reviewedLine.parallelsentence_id, user_id, status, reviewedLine.times_reviewed ? reviewedLine.times_reviewed + 1 : 1, finalTranslateInput, token));
        }
        else {
            dispatch(lineReviewAction(reviewedLine.parallelsentence_id, user_id, status, reviewedLine.times_reviewed ? reviewedLine.times_reviewed + 1 : 1, finalTranslateInput, token));
        }
    };
    const handleSubmitNext = (event) => {
        // event.preventDefault();
        setNextFlag(true);
        if (event) {
            dispatch(lineReviewAction(reviewedLine.parallelsentence_id, user_id, status, reviewedLine.times_reviewed ? reviewedLine.times_reviewed + 1 : 1, finalTranslateInput, token));
        }
        else {
            dispatch(lineReviewAction(reviewedLine.parallelsentence_id, user_id, status, reviewedLine.times_reviewed ? reviewedLine.times_reviewed + 1 : 1, finalTranslateInput, token));
        }
    };
    const [finalTranslateStart, setFinalTranslateStart] = useState(false);
    const [finalTranslateInput, setFinalTranslateInput] = useState('');
    const handleFinalTranslateInputChange = (e) => setFinalTranslateInput(e.target.value);
    const handleFinalTranslateInputSubmit = event => {
        event.preventDefault();
        dispatch(lineReviewAction(reviewedLine.parallelsentence_id, user_id, status, reviewedLine.times_reviewed ? reviewedLine.times_reviewed + 1 : 1, finalTranslateInput, token));
    };


    useEffect(() => {
        if (reviewedLine.success === 'parallelsentence updated' && !nextFlag && !finalTranslateInput) {
            toast.success(reviewedLine.success);
            setStart(false);
            // setNextFlag(false);
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

    useEffect(() => {
        if (reviewedLine.success === 'parallelsentence updated' && status === ('accepted' || 'reviewed')) {
            dispatch(finalTranslation(reviewedLine.line, reviewedLine.source_language, status === 'accepted' ? reviewedLine.translated_line : finalTranslateInput, reviewedLine.destination_language, reviewedLine.dataset_id, reviewedLine.dataset_name, reviewedLine.datastream_id, reviewedLine.line_number, reviewedLine.translator_id, user_id, token));
            console.log('done');
        }
    }, [dispatch, finalTranslateInput, reviewedLine.dataset_id, reviewedLine.dataset_name, reviewedLine.datastream_id, reviewedLine.destination_language, reviewedLine.line, reviewedLine.line_number, reviewedLine.source_language, reviewedLine.success, reviewedLine.translated_line, reviewedLine.translator_id, status, token, user_id]);


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
        <Container
            pb={{ base: '2', md: '4', }}
            px={{ base: '3', md: '8', }}
            maxWidth={"1400px"}
            mx={'auto'}
        >
            <Text
                fontSize="lg"
                fontWeight="bold"
                color='black'
                textAlign={'center'}
                my={2}
                p={3}
            >
                Admin Dashboard</Text>


            {/* specific user show modal */}
            <Modal isOpen={isOpen} onClose={onClose}>
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
                        User Data for User No. : {selectedUserInfo?.profile?.user_id}</ModalHeader>

                    {/* <ModalCloseButton /> */}
                    {
                        selectedUserInfo ?
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
                                    <Text>
                                        <Image
                                            boxSize='50px'
                                            objectFit='cover'
                                            borderRadius='full'
                                            src={selectedUserInfo?.profile?.image_url}
                                            alt={selectedUserInfo?.profile?.userName}
                                        />
                                    </Text>
                                    <Text>Name: {selectedUserInfo?.profile?.userName}</Text>
                                    <Text>Email : {selectedUserInfo?.profile?.user_email}</Text>
                                    <Text>Birthday : {selectedUserInfo?.profile?.birthday}</Text>
                                    <Text>Address : {selectedUserInfo?.profile?.address}</Text>
                                    <Text>Joining Date : {selectedUserInfo?.profile?.join_date}</Text>
                                    <Text>Balance : {selectedUserInfo?.profile?.balance}</Text>

                                    <HStack justify={'space-between'}>
                                        <Text >
                                            <Button
                                                bgColor={'blue'}
                                                p={1}
                                                px={2}
                                                mt={0}
                                                borderRadius={'lg'}
                                                color={'white'}
                                                onClick={() => handleView(selectedUserInfo.profile.user_id)}
                                            >
                                                View Withdraw History</Button>
                                        </Text>

                                        <Text w={'60px'} gap={1}>
                                            <Button
                                                bgColor={'red'}
                                                p={1}
                                                px={2}
                                                mt={0}
                                                borderRadius={'lg'}
                                                color={'white'}
                                                onClick={() => handleDelete(selectedUserInfo.profile.user_id, "Delete User", "Are you sure you want to delete this user?", "user")}
                                            >
                                                Delete</Button>
                                        </Text>
                                    </HStack>
                                </VStack>
                            </ModalBody>
                            :
                            <Text
                                fontSize="lg"
                                fontWeight="bold"
                                color='black'
                                textAlign={'center'}
                                my={2}
                                p={3}
                            >
                                Invalid User Id, No data Found</Text>
                    }

                    <ModalFooter>
                        <Button
                            bgColor={'black'}
                            p={1}
                            px={2}
                            mt={0}
                            borderRadius={'lg'}
                            color={'white'}
                            onClick={onClose}
                        >
                            Close
                        </Button>
                        {/* <Button variant='ghost'>Secondary Action</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>

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

            {/* delete modal */}
            <DeleteDialog
                isOpen={isDeleteOpen}
                onClose={onDeleteClose}
                title={deleteTitle}
                message={deleteMessage}
                deleteFunction={deleteFunction}
                id={deleteId}
                option={deleteOption}
            />


            <Tabs >
                <TabList mb='1em'>
                    <Tab
                        px={[null, 3, 12,]}
                        py={2}
                        _selected={{
                            px: 12,
                            py: 2,
                            borderX: '2px',
                            borderTop: '2px',
                            borderColor: 'gray',
                            borderRadius: 7
                        }}
                    >
                        All User</Tab>

                    <Tab
                        px={[null, 3, 12,]}
                        py={2}
                        _selected={{
                            px: 12,
                            py: 2,
                            borderX: '2px',
                            borderTop: '2px',
                            borderColor: 'gray',
                            borderRadius: 7
                        }}
                    >
                        Dataset Input</Tab>

                    <Tab
                        px={[null, 3, 12,]}
                        py={2}
                        _selected={{
                            px: 12,
                            py: 2,
                            borderX: '2px',
                            borderTop: '2px',
                            borderColor: 'gray',
                            borderRadius: 7
                        }}
                    >
                        Custom Dataset</Tab>

                    <Tab
                        px={[null, 3, 12,]}
                        py={2}
                        _selected={{
                            px: 12,
                            py: 2,
                            borderX: '2px',
                            borderTop: '2px',
                            borderColor: 'gray',
                            borderRadius: 7
                        }}
                    >
                        Approve Translate</Tab>

                    <Tab
                        px={[null, 3, 12,]}
                        py={2}
                        _selected={{
                            px: 12,
                            py: 2,
                            borderX: '2px',
                            borderTop: '2px',
                            borderColor: 'gray',
                            borderRadius: 7
                        }}
                    >
                        Withdraw Request</Tab>
                </TabList>

                <TabPanels>
                    {/* All user  */}
                    <TabPanel>
                        <Text
                            fontSize="lg"
                            fontWeight="bold"
                            color='black'
                            textAlign={'center'}
                            my={1}
                            p={1}
                        >
                            User Management</Text>

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
                                Search for Specific User</Text>

                            <Form>
                                <FormControl isRequired>
                                    <HStack>
                                        <FormLabel htmlFor="selectedUser" fontWeight={'bold'} >User ID</FormLabel>
                                        <Input
                                            id="selectedUser"
                                            type="text"
                                            placeholder='User ID'
                                            px={2}
                                            w={'300px'}
                                            onChange={(e) => setSelectedUser(e.target.value)}
                                            value={selectedUser}
                                            isRequired
                                        />

                                        <Button
                                            bgColor={selectedUser ? 'blue' : 'gray'}
                                            p={1}
                                            borderRadius={'lg'}
                                            color={'white'}
                                            isDisabled={selectedUser ? false : true}
                                            onClick={() => handleUserView(selectedUser)}
                                        >
                                            Show</Button>
                                    </HStack>
                                </FormControl>
                            </Form>
                        </Box>

                        {/* user table  */}
                        <TableContainer >
                            <VStack mx={'auto'} minWidth={"1200px"}>
                                <HStack
                                    justify={'space-evenly'}
                                    textAlign={'center'}
                                    fontWeight={'bold'}
                                    gap={6}
                                    whiteSpace="break-spaces"
                                >
                                    <Text w={'70px'} >No.</Text>
                                    <Text w={'60px'} >User ID</Text>
                                    <Text w={'60px'} >Photo</Text>
                                    <Text w={'120px'} >Name</Text>
                                    <Text w={'130px'} >Email</Text>
                                    <Text w={'120px'} >Birthday</Text>
                                    <Text w={'140px'} >Address</Text>
                                    <Text w={'120px'} >Joining Date</Text>
                                    <Text w={'70px'} >Balance</Text>
                                    <Text w={'75px'} >Withdraw History</Text>
                                    <Text w={'60px'} >Action</Text>
                                </HStack>

                                {
                                    userTableData &&
                                    userTableData.map((td, i) =>
                                        <HStack key={i}
                                            justify={'space-evenly'}
                                            textAlign={'center'}
                                            gap={6}
                                            whiteSpace="break-spaces"
                                        >
                                            <Text w={'70px'}>{i + 1}</Text>
                                            <Text w={'60px'} >{td?.profile?.user_id}</Text>
                                            <Text w={'60px'} >
                                                <Image
                                                    boxSize='50px'
                                                    objectFit='cover'
                                                    borderRadius='full'
                                                    src={td?.profile?.image_url}
                                                    alt={td?.profile?.userName}
                                                />
                                            </Text>
                                            <Text w={'120px'} >{td?.profile?.userName}</Text>
                                            <Text w={'130px'} >{td?.profile?.user_email}</Text>
                                            <Text w={'120px'} >{td?.profile?.birthday}</Text>
                                            <Text w={'140px'} >{td?.profile?.address}</Text>
                                            <Text w={'120px'} >{td?.profile?.join_date}</Text>
                                            <Text w={'70px'} >{td?.profile?.balance}</Text>
                                            <Text w={'75px'} gap={1}>
                                                {/* <Link href='/dashboard/withdraw/history/:id'> */}
                                                <Button
                                                    bgColor={'blue'}
                                                    p={1}
                                                    px={2}
                                                    mt={0}
                                                    borderRadius={'lg'}
                                                    color={'white'}
                                                    onClick={() => handleView(td?.profile?.user_id)}
                                                >
                                                    View</Button>
                                                {/* </Link> */}
                                            </Text>

                                            <Text w={'60px'} gap={1}>
                                                <Button
                                                    bgColor={'red'}
                                                    p={1}
                                                    px={2}
                                                    mt={0}
                                                    borderRadius={'lg'}
                                                    color={'white'}
                                                    onClick={() => handleDelete(td?.profile?.user_id, "Delete User", "Are you sure you want to delete this user?", "user")}
                                                >
                                                    Delete</Button>
                                            </Text>
                                        </HStack>
                                    )
                                }
                            </VStack>
                        </TableContainer>
                    </TabPanel>

                    {/* Dataset input  */}
                    <TabPanel>
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
                    </TabPanel>

                    {/* Custom Dataset  */}
                    <TabPanel>
                        <Text
                            fontSize="lg"
                            fontWeight="bold"
                            color='black'
                            textAlign={'center'}
                            my={1}
                            p={1}
                        >
                            All Custom Datasets Info</Text>

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
                                    <Text w={'60px'} >Dataset ID</Text>
                                    <Text w={'80px'} >Dataset Name</Text>
                                    <Text w={'130px'} >Creating Date</Text>
                                    <Text w={'80px'} >Approval Status</Text>
                                    <Text w={'130px'} >Approval Date</Text>
                                    <Text w={'60px'} >Creator Id</Text>
                                    <Text w={'80px'} >Created By</Text>
                                    <Text w={'60px'} >Total Lines</Text>
                                    <Text w={'120px'} >Remarks</Text>
                                    <Text w={'60px'} ></Text>
                                    <Text w={'60px'} ></Text>
                                </HStack>

                                {
                                    customDatasetsTableData.map((td, i) =>
                                        <HStack key={i}
                                            justify={'space-evenly'}
                                            textAlign={'center'}
                                            gap={6}
                                            whiteSpace="break-spaces"
                                        >
                                            <Text w={'30px'} >{i + 1}</Text>
                                            <Text w={'60px'} >{td?.dataset_id}</Text>
                                            <Text w={'80px'} >{td?.dataset_name}</Text>
                                            <Text w={'130px'} >{td?.create_date}</Text>
                                            <Text w={'80px'} >{td?.approval_status}</Text>
                                            <Text w={'130px'} >{td?.approval_date}</Text>
                                            <Text w={'60px'} >{td?.user_id}</Text>
                                            <Text w={'80px'} >{td?.userName}</Text>
                                            <Text w={'60px'} >{td?.total_lines}</Text>
                                            <Text w={'120px'} >{td?.remarks}</Text>
                                            <Text w={'60px'} gap={1}>
                                                {
                                                    (td.approval_status === 'Pending') ?
                                                        <Button
                                                            bgColor={'green'}
                                                            p={1}
                                                            px={2}
                                                            mt={0}
                                                            borderRadius={'lg'}
                                                            color={'white'}
                                                            onClick={() => handleApproveCustomDataset(td.dataset_id)}
                                                        >
                                                            Approve</Button>
                                                        :
                                                        null
                                                }
                                            </Text>
                                            <Text w={'60px'} gap={1}>
                                                <Button
                                                    bgColor={'blue'}
                                                    p={1}
                                                    px={2}
                                                    mt={0}
                                                    borderRadius={'lg'}
                                                    color={'white'}
                                                    onClick={() => handleDownloadCustomDataset(td.dataset_id)}
                                                >
                                                    Download</Button>
                                            </Text>
                                        </HStack>
                                    )
                                }
                            </VStack>
                        </TableContainer>
                    </TabPanel>

                    {/* approve translate  */}
                    <TabPanel>
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
                                                        setStatus('accepted');
                                                        handleSubmit(1);
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
                                                        setStatus('accepted');
                                                        handleSubmitNext(1);
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
                                                        setStatus('rejected');
                                                        handleSubmit(0);
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
                                                        setStatus('rejected');
                                                        handleSubmitNext(0);
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
                                                            setStatus('reviewed');
                                                            handleFinalTranslateInputSubmit(event);
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
                    </TabPanel>

                    {/* withdraw approve  */}
                    <TabPanel>
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
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container >
    );
};

export default Dashboard;