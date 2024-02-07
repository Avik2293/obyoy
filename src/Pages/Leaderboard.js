import React from 'react';
import { Container, HStack, Text, TableContainer, VStack, } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
// import { Link as ReactRouterLink } from 'react-router-dom';


const Leaderboard = () => {

    const tableData = [
        {
            name: 'dummy1',
            joining_date: '21 January, 2022',
            total_working_days: 342,
            total_balance: 3452,
        },
        {
            name: 'dummy2',
            joining_date: '22 January, 2022',
            total_working_days: 341,
            total_balance: 3451,
        },
        {
            name: 'dummy3',
            joining_date: '23 January, 2022',
            total_working_days: 343,
            total_balance: 3450,
        },
        {
            name: 'dummy4',
            joining_date: '24 January, 2022',
            total_working_days: 344,
            total_balance: 3445,
        },
        {
            name: 'dummy5',
            joining_date: '25 January, 2022',
            total_working_days: 354,
            total_balance: 3441,
        },
    ];

    return (
        <Container pb={{ base: '2', md: '4', }} px={{ base: '3', md: '8', }} maxWidth={"1200px"} mx={'auto'} >
            <Text fontSize="lg" fontWeight="bold" color='black' textAlign={'center'} my={2} p={3}
            >Leaderboard Full List</Text>

            <Text fontSize="lg" fontWeight="bold" color='black' textAlign={'center'} mb={2} p={3}
            >Your Leaderboard No. : 22</Text>

            < TableContainer >
                <VStack mx={'auto'} minWidth={"800px"}>
                    <HStack justify={'space-between'} textAlign={'center'} fontWeight={'bold'}>
                        <Text w={'30px'} >No.</Text>
                        <Text w={'170px'}>Name</Text>
                        <Text w={'170px'}>Since</Text>
                        <Text w={'140px'}>Work Days</Text>
                        <Text w={'140px'}>Total Balance</Text>
                    </HStack>

                    {
                        tableData.map((td, i) =>
                            <HStack key={i} justify={'space-evenly'} textAlign={'center'}>
                                <Text w={'30px'}>{i + 1}</Text>
                                <Text w={'170px'}>{td.name + ' ' + (i + 1)}</Text>
                                <Text w={'170px'}>{td.joining_date}</Text>
                                <Text w={'140px'}>{td.total_working_days}</Text>
                                <Text w={'140px'}>{td.total_balance}</Text>
                            </HStack>
                        )
                    }

                    {
                        tableData.map((td, i) =>
                            <HStack key={i} justify={'space-evenly'} textAlign={'center'}>
                                <Text w={'30px'}>{i + 1}</Text>
                                <Text w={'170px'}>{td.name + ' ' + (i + 1)}</Text>
                                <Text w={'170px'}>{td.joining_date}</Text>
                                <Text w={'140px'}>{td.total_working_days}</Text>
                                <Text w={'140px'}>{td.total_balance}</Text>
                            </HStack>
                        )
                    }
                </VStack>
            </TableContainer>
        </Container >
    );
};

export default Leaderboard;