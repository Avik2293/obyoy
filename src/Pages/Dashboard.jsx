import React, { useState } from 'react';
import {
    Container,
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    useDisclosure,
} from '@chakra-ui/react';
import DeleteDialog from '../Components/DeleteDialog';

import { useDispatch, useSelector } from 'react-redux';
import { userDelete } from '../Redux/Thunk/UserManagement';
import { datasetDelete } from '../Redux/Thunk/DatasetManagement';
import { selectToken } from '../Redux/Reducer';

import DashboardAllUser from './DashboardAllUser';
import DashboardDatasetInput from './DashboardDatasetInput';
import DashboardCustomDataset from './DashboardCustomDataset';
import DashboardReviewTranslate from './DashboardReviewTranslate';
import DashboardWithdraw from './DashboardWithdraw';


const Dashboard = () => {
    const dispatch = useDispatch();

    const token = useSelector(state => selectToken(state));

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
                        <DashboardAllUser props={{ isOpen, onOpen, onClose, handleDelete }}></DashboardAllUser>
                        {/* <DashboardAllUser props={handleDelete} isOpen={isOpen} onOpen={onOpen} onClose={onClose}></DashboardAllUser> */}
                    </TabPanel>

                    {/* Dataset input  */}
                    <TabPanel>
                        <DashboardDatasetInput props={handleDelete}></DashboardDatasetInput>
                    </TabPanel>

                    {/* Custom Dataset  */}
                    <TabPanel>
                        <DashboardCustomDataset props={{}}></DashboardCustomDataset>
                    </TabPanel>

                    {/* approve translate  */}
                    <TabPanel>
                        <DashboardReviewTranslate ></DashboardReviewTranslate>
                    </TabPanel>

                    {/* withdraw approve  */}
                    <TabPanel>
                        <DashboardWithdraw props={{ isWithdrawOpen, onWithdrawOpen, onWithdrawClose }}></DashboardWithdraw>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container >
    );
};

export default Dashboard;