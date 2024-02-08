import React, { useState } from 'react';
import { Grid, Container, GridItem, Button, Text, Box, HStack, TableContainer, VStack, FormControl, FormLabel, Input, Select, Textarea } from '@chakra-ui/react';
import { Form, } from 'react-router-dom';
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


const Withdraw = () => {
    const [amount, setAmount] = useState('');
    const [system, setSystem] = useState('');
    const [info, setInfo] = useState('');

    const tableData = [
        {
            withdraw_id: 533,
            withdraw_date: '25 January, 2022',
            prev_balance: 5233,
            withdraw_amount: 233,
            update_balance: 5000,
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
            update_balance: 50324200,
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
    ];

    const handleSubmit = (event) => {
        // event.preventDefault();
        setAmount('');
        setSystem('');
        setInfo('');

        // withdraw_amount, withdraw_system, withdraw_info
        console.log(amount);
        console.log(system);
        console.log(info);
    };


    return (
        <Container pb={{ base: '2', md: '4', }} px={{ base: '3', md: '8', }} maxWidth={"1400px"} mx={'auto'} >
            <Text fontSize="lg" fontWeight="bold" color='black' textAlign={'center'} my={2} p={3}
            >Withdraw</Text>

            <Grid gap={[null, 2, 4]} templateRows='repeat(2, 1fr)' templateColumns='repeat(4, 1fr)'
            >
                <GridItem rowSpan={[null, 1, 2]} colSpan={[null, 2, 1]} boxShadow='2xl' p='5' border='2px' borderColor='green' borderRadius={15} textAlign={'center'}>
                    <Text>Total Earning</Text>
                    <Text>4635535</Text>
                </GridItem>

                <GridItem rowSpan={[null, 1, 2]} colSpan={[null, 2, 1]} boxShadow='2xl' p='5' border='2px' borderColor='green' borderRadius={15} textAlign={'center'}>
                    <Text>Current Balance</Text>
                    <Text>4535</Text>
                </GridItem>

                <GridItem rowSpan={[null, 1, 2]} colSpan={[null, 2, 1]} boxShadow='2xl' p='5' border='2px' borderColor='green' borderRadius={15} textAlign={'center'}>
                    <Text>Total Withdraw</Text>
                    <Text>465535</Text>
                </GridItem>

                <GridItem rowSpan={[null, 1, 2]} colSpan={[null, 2, 1]} boxShadow='2xl' p='5' border='2px' borderColor='green' borderRadius={15} textAlign={'center'}>
                    <Text>For Approval</Text>
                    <Text>535</Text>
                </GridItem>
            </Grid>

            <Box marginY={12} marginX={'5'} maxWidth={"400px"} mx={'auto'} boxShadow='2xl' p='5' border='2px' borderColor='green' borderRadius={15}>
                <Form onSubmit={handleSubmit}>
                    <FormControl isRequired my={3}>
                        <FormLabel htmlFor="amount" fontWeight={'bold'} > Withdraw Amount</FormLabel>
                        <Input id="amount" type="number" placeholder='Your Desired Withdraw Amount' px={2} w={'360px'} onChange={(e) => setAmount(e.target.value)} value={amount} isRequired />
                    </FormControl>

                    <FormControl isRequired my={3}>
                        <FormLabel htmlFor="system" fontWeight={'bold'} >Withdraw System</FormLabel>

                        <Select id="system" placeholder='Select Your Desired System' px={2} w={'360px'} value={system} onChange={(e) => setSystem(e.target.value)} isRequired>
                            <option value='Bank Transfer'>Bank Transfer</option>
                            <option value='Bkash'>Bkash</option>
                            <option value='Nagad'>Nagad</option>
                        </Select>
                    </FormControl>

                    <FormControl isRequired my={3}>
                        <FormLabel htmlFor="info" fontWeight={'bold'} >System Info</FormLabel>
                        <Textarea id="info" type="text" placeholder='Mobile Banking No./ Bank Name+Branch+Account No.' px={2} w={'360px'} onChange={(e) => setInfo(e.target.value)} value={info} isRequired />
                    </FormControl>

                    <Button bgColor={'blue'} p={1} px={2} mt={3} borderRadius={'lg'} color={'white'} type='submit' 
                    >Send Withdraw Request</Button>
                </Form>
            </Box>

            <Text fontSize="lg" fontWeight="bold" color='black' textAlign={'center'} my={2} p={3}
            >Withdraw History</Text>

            <TableContainer >
                <VStack mx={'auto'} minWidth={"1200px"}>
                    <HStack justify={'space-evenly'} textAlign={'center'} fontWeight={'bold'} gap={6} whiteSpace="break-spaces">
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
                    </HStack>

                    {
                        tableData.map((td, i) =>
                            <HStack key={i} justify={'space-evenly'} textAlign={'center'} gap={6} whiteSpace="break-spaces">
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
                            </HStack>
                        )
                    }
                </VStack>
            </TableContainer>
        </Container >
    );
};

export default Withdraw;