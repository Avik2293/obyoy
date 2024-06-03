import React, { useEffect, useState } from 'react';
import { Container, HStack, Text, Box, GridItem, Grid, Link as ChakraLink, Image, Button, Textarea, } from '@chakra-ui/react'
import { Form, Link as ReactRouterLink } from 'react-router-dom';
import { IoArrowForwardCircleOutline } from "react-icons/io5";

import { useDispatch, useSelector } from 'react-redux';
import { leaderboard, datasetCount, translationCount, reviewedCount, customDatasetCount, newLine, translatedLine } from '../Redux/Thunk/Home';
import { selectProfile, selectLeaderboardTop, selectLine, selectToken, selectID, selectBasicCountInfo } from '../Redux/Reducer';
import toast from 'react-hot-toast';


const Home = () => {
	const dispatch = useDispatch();

	const token = useSelector(state => selectToken(state));
	const topTen = useSelector(state => selectLeaderboardTop(state));
	const profile = useSelector(state => selectProfile(state));
	const userId = useSelector(state => selectID(state));
	const basicCountInfo = useSelector(state => selectBasicCountInfo(state));

	const [count, setCount] = useState(0);
	const [start, setStart] = useState(false);
	const [formClose, setFormClose] = useState(false);
	const line = useSelector(state => selectLine(state));

	const [input, setInput] = useState('')
	const handleInputChange = (e) => setInput(e.target.value)

	useEffect(() => {
		dispatch(leaderboard());
		dispatch(datasetCount(token));
		dispatch(translationCount(token));
		dispatch(reviewedCount(token));
		dispatch(customDatasetCount(token));
	}, [dispatch, token]);

	useEffect(() => {
		dispatch(newLine(token));
	}, [count, dispatch, token]);

	const handleSubmit = event => {
		event.preventDefault();
		dispatch(translatedLine(line.dataset_id, line.datastream_id, line.name, line.line_number, line.line, line.source_language, input, token));
		setFormClose(true);
	};
	const handleSubmitNext = event => {
		event.preventDefault();
		dispatch(translatedLine(line.dataset_id, line.datastream_id, line.name, line.line_number, line.line, line.source_language, input, token));
		setFormClose(false);
	};

	useEffect(() => {
		if (line.success === 'parallelsentence created') {
			toast.success(line.success);
			setInput('');
		}
		if (line.error.message) {
			toast.error(line.error.message);
		}
	}, [dispatch, line.error.message, line.success]);

	useEffect(() => {
		if (line.success === 'parallelsentence created' && formClose) {
			setStart(false);
		}
		else if (line.success === 'parallelsentence created' && !formClose) {
			setCount(count + 1);
		}
	}, [count, formClose, line.success]);


	return (
		<Container
			pb={{ base: '2', md: '4', }}
			px={{ base: '3', md: '8', }}
			maxWidth={"1400px"}
			mx={'auto'}
		>
			<Grid
				gap={4}
				templateRows='repeat(3, 1fr)'
				templateColumns='repeat(5, 1fr)'
			>
				{/* left side part */}
				<GridItem
					rowSpan={3}
					colSpan={[5, 5, 2, 2, 1]}
					bg='papayawhip'
					boxShadow='2xl'
					p='6'
					rounded='md'
				>
					<Text
						fontSize="lg"
						fontWeight="bold"
						color='blue'
						textAlign={'center'}
						my={5}
					>
						Leaderboard (Balance)</Text>

					<Text
						fontSize="lg"
						fontWeight="bold"
						color='black'
						textAlign={'center'}
						my={5}
					>
						Top 5</Text>

					{
						<Box
							fontSize="md"
							fontWeight="bold"
							color='black'
							textAlign={'center'}
						>
							{
								topTen?.firstFive?.map((value, key) =>
									<Text key={key}>{key + 1}. {value?.name} ({value?.balance} tk)</Text>
								)
							}
						</Box>
					}

					<Text
						fontSize="lg"
						fontWeight="semibold"
						color='black'
						textAlign={'center'}
						my={5}
					>
						Next Top 5
					</Text>

					{
						<Box
							fontSize="md"
							fontWeight="bold"
							color='black'
							textAlign={'center'}
						>
							{
								topTen?.nextFive?.map((value, key) =>
									<Text key={key}>{key + 6}. {value?.name} ({value?.balance} tk)</Text>
								)
							}
						</Box>
					}

					<Text
						fontSize="md"
						fontWeight="bold"
						color='blue'
						textAlign={'center'}
						mt={10}
						_hover={{ textDecoration: 'underline' }}
					>
						<ChakraLink as={ReactRouterLink} to='/leaderboard' >
							See Full List
						</ChakraLink>
					</Text>
				</GridItem>

				{/* middle part */}
				<GridItem
					rowSpan={3}
					colSpan={[5, 5, 3, 3, 3]}
					boxShadow='dark-lg'
					p='6'
					rounded='md'
				>
					<Text
						fontSize="2xl"
						fontWeight="bold"
						color='black'
						textAlign={'center'}
						mb={2}
					>
						Welcome </Text>

					{/* upper box information */}
					<Grid
						gap={[null, 2, 4]}
						templateRows='repeat(2, 1fr)'
						templateColumns='repeat(4, 1fr)'
						mb={5}
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
							<Text>Total Dataset</Text>
							<Text>{basicCountInfo?.datasetCount}</Text>
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
							<Text>Total Translation</Text>
							<Text>{basicCountInfo?.translationCount}</Text>
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
							<Text>Total Reviewed</Text>
							<Text>{basicCountInfo?.reviewedCount}</Text>
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
							<Text>Custom Dataset</Text>
							<Text>{basicCountInfo?.customDatasetCount}</Text>
						</GridItem>
					</Grid>

					{
						!start &&
						<>
							<Text
								fontSize="lg"
								fontWeight="bold"
								color='black'
								textAlign={'center'}
								my={2}
							>
								Click "Start" to start translate.</Text>

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
									onClick={() => {
										setStart(true);
										setFormClose(false);
										setCount(count + 1);
									}}
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
								Dataset Name: {line?.name}</Text>

							<Text
								fontSize="lg"
								fontWeight="bold"
								color='black'
								textAlign={'center'}
								my={4}
							>
								Dataset Id: {line?.dataset_id}</Text>

							<Text
								fontSize="lg"
								fontWeight="bold"
								color='black'
								textAlign={'center'}
								my={4}
							>
								Datastream Id.: {line?.datastream_id}</Text>

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
								{line?.line}</Text>

							{/* <Form onSubmit={handleSubmit}> */}
							<Form>
								{/* <Input */}
								<Textarea
									name="input"
									id="input"
									variant='filled'
									width='100%'
									p={3}
									my={3}
									placeholder='Type your input here..'
									onChange={handleInputChange}
									required
									value={input}
								// h={[null, '150px', '150px', '100px']}
								/>

								<HStack justify={'space-evenly'}>
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
												if (input) {
													handleSubmit(event);
												}
											}}
										>
											Submit
										</Button>
									</Text>

									<Text textAlign={'end'} my={2}>
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
												if (input) {
													handleSubmitNext(event);
												}
											}}
										>
											Submit & Next
										</Button>
									</Text>
								</HStack>
							</Form>
						</Box>
					}
				</GridItem>

				{/* right side part */}
				<GridItem
					rowSpan={3}
					colSpan={[5, 5, 2, 2, 1]}
					bg='papayawhip'
					boxShadow='2xl'
					p='6'
					rounded='md'
				>
					<Text
						fontSize="lg"
						fontWeight="bold"
						color='blue'
						textAlign={'center'}
						my={5}
					>
						Profile</Text>

					<Image
						borderRadius='full'
						boxSize='50px'
						mx={'auto'}
						src={profile?.image_url}
						alt='Dan Abram'
					/>

					<Text
						fontSize="lg"
						fontWeight="bold"
						color='black'
						textAlign={'center'}
						my={1}
					>
						{profile?.userName}
					</Text>

					<Box
						fontSize="sm"
						fontWeight="bold"
						color='black'
						textAlign={'center'}
					>
						<Text>Date of Join: {profile?.join_date}</Text>
						<Text >Total Working Days: {profile?.total_working_days} days</Text>
					</Box>

					<Box
						fontSize="lg"
						fontWeight="semibold"
						color='black'
						textAlign={'center'}
					>
						<Text mt={6}>Balance</Text>
						<Text my={1}>::: Tk. {profile?.balance} :::</Text>

						<Text mt={6}>For Approve</Text>
						<Text my={1}>::: Tk. {profile?.for_approve} :::</Text>

						<Text mt={6}>Today's Contribution</Text>
						<Text my={1}>::: Tk. {profile?.today_contribution} :::</Text>
					</Box>
				</GridItem>
			</Grid>
		</Container>
	);
};

export default Home;