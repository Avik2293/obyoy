import React, { useEffect, useState } from 'react';
import { Grid, Container, GridItem, Button, Text, Box, HStack, TableContainer, VStack, FormControl, FormLabel, Input, Select, Textarea } from '@chakra-ui/react';
import { Form, } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchWithdraws, sendWithdrawRequest, } from '../Redux/Thunk/Withdraw';
import { selectToken, selectID, selectProfile, selectWithdraws } from '../Redux/Reducer';


const Withdraw = () => {
	const dispatch = useDispatch();

	const token = useSelector(state => selectToken(state));
	const user_id = useSelector(state => selectID(state));
	const profile = useSelector(state => selectProfile(state));

	useEffect(() => {
		dispatch(fetchWithdraws(user_id));
	}, [dispatch, user_id]);

	const withdraws = useSelector(state => selectWithdraws(state));

	// for withdraw request send
	const [amount, setAmount] = useState('');
	const [system, setSystem] = useState('');
	const [info, setInfo] = useState('');

	const handleSubmit = (event) => {
		// event.preventDefault();
		dispatch(sendWithdrawRequest(user_id, amount, system, info, token));
		setAmount('');
		setSystem('');
		setInfo('');
		// console.log(user_id);
		// console.log(amount);
		// console.log(system);
		// console.log(info);
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
			>Your Withdraws</Text>

			<Grid
				gap={[null, 2, 4]}
				templateRows='repeat(2, 1fr)'
				templateColumns='repeat(4, 1fr)'
			>
				<GridItem
					rowSpan={[null, 1, 2]}
					colSpan={[null, 2, 1]}
					boxShadow='2xl'
					p='5'
					border='2px'
					borderColor='green'
					borderRadius={15}
					textAlign={'center'}
				>
					<Text>Total Earning</Text>
					<Text>{profile?.total_balance} Tk</Text>
				</GridItem>

				<GridItem
					rowSpan={[null, 1, 2]}
					colSpan={[null, 2, 1]}
					boxShadow='2xl'
					p='5'
					border='2px'
					borderColor='green'
					borderRadius={15}
					textAlign={'center'}
				>
					<Text>Current Balance</Text>
					<Text>{profile?.balance} Tk</Text>
				</GridItem>

				<GridItem
					rowSpan={[null, 1, 2]}
					colSpan={[null, 2, 1]}
					boxShadow='2xl'
					p='5'
					border='2px'
					borderColor='green'
					borderRadius={15}
					textAlign={'center'}
				>
					<Text>Total Withdraw</Text>
					<Text>{profile?.total_withdraw} Tk</Text>
				</GridItem>

				<GridItem
					rowSpan={[null, 1, 2]}
					colSpan={[null, 2, 1]}
					boxShadow='2xl'
					p='5'
					border='2px'
					borderColor='green'
					borderRadius={15}
					textAlign={'center'}
				>
					<Text>For Approval</Text>
					<Text>{profile?.for_approve} Tk</Text>
				</GridItem>
			</Grid>

			<Box
				marginY={12}
				marginX={'5'}
				maxWidth={"400px"}
				mx={'auto'}
				boxShadow='2xl'
				p='5'
				border='2px'
				borderColor='green'
				borderRadius={15}
			>
				<Form onSubmit={handleSubmit}>
					<FormControl isRequired my={3}>
						<FormLabel htmlFor="amount" fontWeight={'bold'} > Withdraw Amount</FormLabel>
						<Input
							id="amount"
							type="number"
							placeholder='Your Desired Withdraw Amount'
							px={2}
							w={'360px'}
							onChange={(e) => setAmount(e.target.value)}
							value={amount}
							isRequired
						/>
					</FormControl>

					<FormControl isRequired my={3}>
						<FormLabel htmlFor="system" fontWeight={'bold'} >Withdraw System</FormLabel>
						<Select
							id="system"
							placeholder='Select Your Desired System'
							px={2}
							w={'360px'}
							value={system}
							onChange={(e) => setSystem(e.target.value)}
							isRequired
						>
							<option value='Bank Transfer'>Bank Transfer</option>
							<option value='Bkash'>Bkash</option>
							<option value='Nagad'>Nagad</option>
						</Select>
					</FormControl>

					<FormControl isRequired my={3}>
						<FormLabel htmlFor="info" fontWeight={'bold'} >System Info</FormLabel>
						<Textarea
							id="info"
							type="text"
							placeholder='Mobile Banking No./ Bank Name+Branch+Account No.'
							px={2}
							w={'360px'}
							h={'50px'}
							onChange={(e) => setInfo(e.target.value)}
							value={info}
							isRequired
						/>
					</FormControl>

					<Button
						bgColor={'blue'}
						p={1}
						px={2}
						mt={3}
						borderRadius={'lg'}
						color={'white'}
						type='submit'
					>Send Withdraw Request</Button>
				</Form>
			</Box>

			<Text
				fontSize="lg"
				fontWeight="bold"
				color='black'
				textAlign={'center'}
				my={2}
				p={3}
			>Withdraw History</Text>

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
						<Text w={'75px'} >Withdraw System</Text>
						<Text w={'170px'} >Withdraw Info</Text>
						<Text w={'80px'} >Status</Text>
						<Text w={'130px'} >Remarks</Text>
					</HStack>

					{
						withdraws &&
						withdraws.map((td, i) =>
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
								<Text w={'75px'} >{td?.withdraw_system}</Text>
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