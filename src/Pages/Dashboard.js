import React from 'react';
import { Container, HStack, Text, TableContainer, VStack, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';


const Dashboard = () => {

    return (
        <Container pb={{ base: '2', md: '4', }} px={{ base: '3', md: '8', }} maxWidth={"1400px"} mx={'auto'} >
            <Text fontSize="lg" fontWeight="bold" color='black' textAlign={'center'} my={2} p={3} >Admin Dashboard</Text>

            <Tabs >
                <TabList mb='1em'>
                    <Tab px={12} py={2} _selected={{ px: 12, py: 2, borderX: '2px', borderTop: '2px', borderColor: 'gray', borderRadius: 7 }}>All User</Tab>
                    <Tab px={12} py={2} _selected={{ px: 12, py: 2, borderX: '2px', borderTop: '2px', borderColor: 'gray', borderRadius: 7 }}>File Input</Tab>
                    <Tab px={12} py={2} _selected={{ px: 12, py: 2, borderX: '2px', borderTop: '2px', borderColor: 'gray', borderRadius: 7 }}>Approve Translate</Tab>
                    <Tab px={12} py={2} _selected={{ px: 12, py: 2, borderX: '2px', borderTop: '2px', borderColor: 'gray', borderRadius: 7 }}>Withdraws</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>


        </Container >
    );
};

export default Dashboard;