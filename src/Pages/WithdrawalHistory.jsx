import React, { useEffect } from 'react';
import { HStack, VStack, Text, TableContainer } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { userWithdraws } from '../Redux/Thunk/UserManagement';
import { selectToken, selectUserWithdraws } from '../Redux/Reducer';

const WithdrawalHistory = () => {
	const dispatch = useDispatch();

	const token = useSelector(state => selectToken(state));
	// const user_id = useSelector(state => selectID(state));

	const { id } = useParams(); // Get the dynamic ID from the URL
	const userWithdrawalData = useSelector(state => selectUserWithdraws(state));
	useEffect(() => {
		dispatch(userWithdraws(id, token));
	}, [dispatch, token, id]);


	return (
		<>
			<Text
				fontSize="lg"
				fontWeight="bold"
				color='black'
				textAlign={'center'}
				my={1}
				p={1}
			>Withdraw Data for User ID: {id}</Text>

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
						<Text w={'80px'} >Withdraw System</Text>
						<Text w={'170px'} >Withdraw Info</Text>
						<Text w={'80px'} >Status</Text>
						<Text w={'130px'} >Remarks</Text>
					</HStack>

					{
						userWithdrawalData.map((td, i) =>
							<HStack
								key={i}
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
								<Text w={'80px'} >{td?.withdraw_system}</Text>
								<Text w={'170px'} >{td?.withdraw_info}</Text>
								<Text w={'80px'} >{td?.status}</Text>
								<Text w={'130px'} >{td?.remarks}</Text>
							</HStack>
						)
					}
				</VStack>
			</TableContainer>
		</>
	)
};

export default WithdrawalHistory;