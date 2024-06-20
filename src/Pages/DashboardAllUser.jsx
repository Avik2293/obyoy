import React, { useEffect, useState } from 'react';
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
    // useDisclosure,
    Image,
    FormControl,
    FormLabel,
    Input,
    Box,
} from '@chakra-ui/react';
import { Form, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { allUsersData, userData } from '../Redux/Thunk/UserManagement';
import { selectToken, selectID, selectAllUserData, selectSingleUser } from '../Redux/Reducer';


const DashboardAllUser = ({ isOpen, onOpen, onClose, handleDelete }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector(state => selectToken(state));
    const user_id = useSelector(state => selectID(state));

    // for initial data load
    const userTableData = useSelector(state => selectAllUserData(state));
    useEffect(() => {
        dispatch(allUsersData(user_id, token));
    }, [dispatch, token, user_id]);

    // for specific user show
    // const { isOpen, onOpen, onClose } = useDisclosure();

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


    return (
        <div>

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
        </div>
    );
}

export default DashboardAllUser;