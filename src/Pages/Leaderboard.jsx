import React, { useEffect } from 'react';
import { Container, HStack, Text, TableContainer, VStack, } from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { fullLeaderboard } from '../Redux/Thunk/Home';
import { selectFullLeaderboard } from '../Redux/Reducer';


const Leaderboard = () => {
	const dispatch = useDispatch();

	const tableData = useSelector(state => selectFullLeaderboard(state));
	useEffect(() => {
		dispatch(fullLeaderboard());
	}, [dispatch]);


	return (
		<Container pb={{ base: '2', md: '4', }} px={{ base: '3', md: '8', }} maxWidth={"1200px"} mx={'auto'} >
			<Text fontSize="lg" fontWeight="bold" color='black' textAlign={'center'} my={2} p={3}
				>Leaderboard Full List
			</Text>

			{/* <Text fontSize="lg" fontWeight="bold" color='black' textAlign={'center'} mb={2} p={3} */}
			{/* >Your Leaderboard No. : 22</Text> */}

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
						tableData &&
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