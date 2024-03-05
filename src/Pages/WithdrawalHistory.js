import React, { useState } from 'react';
import { HStack, VStack, Text, TableContainer } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const WithdrawalHistory = () => {

	const [userWithdrawalData, setUserWithdrawalData] = useState([
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
	]);

	const { id } = useParams(); // Get the dynamic ID from the URL
    // need to fetch data against the id for admin see 

	return (
		<>
			<Text 
				fontSize="lg" 
				fontWeight="bold" 
				color='black' 
				textAlign={'center'} 
				my={1} 
				p={1}
			>
				Withdraw Data for User ID: {id}
			</Text>

			<TableContainer >
				<VStack mx={'auto'} minWidth={"1200px"}>
					<HStack justify={'space-evenly'} textAlign={'center'} fontWeight={'bold'} gap={6} whiteSpace="break-spaces">
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
							<HStack key={i} justify={'space-evenly'} textAlign={'center'} gap={6} whiteSpace="break-spaces">
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