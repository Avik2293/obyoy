import React, { useState } from 'react';
import { Heading, Container, Image, HStack, VStack, Text, Flex, Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Form, } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { profileUpdate } from '../Redux/Thunk/Login';
import { selectProfile, selectToken } from '../Redux/Reducer';


const Profile = () => {
	const dispatch = useDispatch();

	const token = useSelector(state => selectToken(state));
	const profile = useSelector(state => selectProfile(state));

	const [start, setStart] = useState(false);

	const [name, setName] = useState(profile?.userName);
	const [email, setEmail] = useState(profile?.user_email);
	const [phone, setPhone] = useState(profile?.user_phone);
	const [address, setAddress] = useState(profile?.address);
	const [birthday, setBirthday] = useState(profile?.birthday);

	// image upload 
	const [img, setImg] = useState(false);
	const [file, setFile] = useState();
	const handleFileChange = (e) => {
		if (e.target.files) {
			setFile(e.target.files[0]);
		}
	};
	const handleUploadClick = () => {
		if (!file) {
			return;
		}

		// 👇 Uploading the file using the fetch API to the server
		// fetch('https://httpbin.org/post', {
		//     method: 'POST',
		//     body: file,
		//     // 👇 Set headers manually for single file upload
		//     headers: {
		//         'content-type': file.type,
		//         'content-length': `${file.size}`, // 👈 Headers need to be a string
		//     },
		// })
		//     .then((res) => res.json())
		//     .then((data) => console.log(data))
		//     .catch((err) => console.error(err));

		// alert(`Selected file - ${this.fileInput.current.files[0].name}`);
	};

	const handleSubmit = event => {
		// event.preventDefault();
		dispatch(profileUpdate(name, email, phone, address, birthday, token));
		setName('');
		setEmail('');
		setPhone('');
		setAddress('');
		setBirthday('');
		// console.log(name, email, phone, address, birthday);
		setStart(!start);
	};

	return (
		<Container
			maxWidth={"1200px"}
			mx={'auto'}
			border='4px'
			borderColor='green'
			borderRadius={15} my={3}
		>
			{
				!start &&
				<Flex
					mx={'auto'}
					my={3}
					align={"center"}
					justify={"space-evenly"}
					direction={[null, 'column-reverse', 'row',]}
				>
					<VStack my={[null, 1, 8]}>
						<Heading fontWeight={'bold'} as='h2' fontSize='2xl'>
							Profile Details
						</Heading>

						<Box>
							<Text fontWeight={'bold'} >Name : {profile?.userName}</Text>
							<Text fontWeight={'bold'} >Email : {profile?.user_email}</Text>
							<Text fontWeight={'bold'} >Phone : {profile?.user_phone}</Text>
							<Text fontWeight={'bold'}>Address : {profile?.address}</Text>
							<Text fontWeight={'bold'} >Birthday: {profile?.birthday}</Text>

							<Text fontWeight={'bold'} textAlign={'center'} my={1}>:: :: ::</Text>
							<Text fontWeight={'bold'} >Date of Join : {profile?.join_date}</Text>
							<Text fontWeight={'bold'} >Total Working Days : {profile?.total_working_days} Days</Text>
							<Text fontWeight={'bold'} >Balance : Tk. {profile?.balance}</Text>
							<Text fontWeight={'bold'} >Till Now Earning: Tk. {profile?.total_balance}</Text>
							<Text fontWeight={'bold'} >Total Withdraw : Tk. {profile?.total_withdraw}</Text>
							<Text fontWeight={'bold'} >For Approve : Tk. {profile?.for_approve}</Text>
							<Text fontWeight={'bold'} >Today's Contribution : Tk. {profile?.today_contribution}</Text>
						</Box>
					</VStack>

					<VStack>
						<Image
							boxSize='200px'
							objectFit='cover'
							borderRadius='full'
							src={profile?.image_url}
							alt={profile?.userName}
						/>

						<Text fontWeight={'bold'} >
							Leader Board Place : {profile?.leaderboard_place}
						</Text>

						{
							img ?
								<>
									<Text
										bgColor={'teal'}
										p={2}
										my={1}
										borderRadius={'lg'}
										color={'white'}
									>
										Choose a Photo file for Upload
									</Text>

									<input type="file" onChange={handleFileChange} />

									<div>{file && `${file.name} - ${file.type}`}</div>

									<HStack spacing={8}>
										<button onClick={handleUploadClick}>Upload</button>
										<button onClick={() => setImg(!img)}>Cancel</button>
									</HStack>
								</>
								:
								<Button
									bgColor={'teal'}
									p={2}
									my={1}
									borderRadius={'lg'}
									color={'white'}
									onClick={() => setImg(!img)}
								>
									Change Your Photo
								</Button>
						}

						<Button
							bgColor={'blue'}
							p={2}
							my={8}
							borderRadius={'lg'}
							color={'white'}
							onClick={() => setStart(!start)}
						>
							Edit Personal Info
						</Button>
					</VStack>
				</Flex>
			}

			{
				start &&
				<Flex
					mx={'auto'}
					my={3}
					align={"center"}
					justify={"space-evenly"}
					direction={[null, 'column-reverse', 'row',]}
				>
					<Form onSubmit={handleSubmit}>
						<VStack my={[null, 1, 8]}>
							<Heading
								fontWeight={'bold'}
								as='h2'
								fontSize='2xl'
							>
								Profile Details
							</Heading>

							<FormControl id="name" >
								<FormLabel fontWeight={'bold'}>Name</FormLabel>
								<Input
									type="text"
									placeholder='Your Name'
									px={2}
									w={'330px'}
									required
									onChange={(e) => setName(e.target.value)}
									value={name}
								/>
							</FormControl>

							<FormControl id="email" >
								<FormLabel fontWeight={'bold'}>Email</FormLabel>
								<Input
									type="email"
									placeholder='Your Email'
									px={2}
									w={'330px'}
									required
									onChange={(e) => setEmail(e.target.value)}
									value={email}
								/>
							</FormControl>

							<FormControl id="phone" >
								<FormLabel fontWeight={'bold'}>Phone No.</FormLabel>
								<Input
									type="tel"
									placeholder='Your Phone No.'
									px={2}
									w={'330px'}
									required
									onChange={(e) => setPhone(e.target.value)}
									value={phone}
								/>
							</FormControl>

							<FormControl id="address" >
								<FormLabel fontWeight={'bold'}>Address</FormLabel>
								<Input
									type="address"
									placeholder='Your Address'
									px={2}
									w={'330px'}
									required
									onChange={(e) => setAddress(e.target.value)}
									value={address}
								/>
							</FormControl>

							<FormControl id="birthday" >
								<FormLabel fontWeight={'bold'}>Birthday</FormLabel>
								<Text>{birthday} (for change, click below calender)</Text>
								<Input
									// type="datetime-local"
									type="date"
									placeholder='Your Birthday'
									px={2}
									w={'330px'}
									onChange={(e) => setBirthday(e.target.value)}
									value={birthday}
								/>
							</FormControl>

							<HStack justify={'space-between'} spacing={16}>
								<Button
									bgColor={'blue'}
									p={2}
									my={8}
									borderRadius={'lg'}
									color={'white'}
									type='submit'
								>Submit</Button>

								<Button
									bgColor={'black'}
									p={2}
									my={8}
									borderRadius={'lg'}
									color={'white'}
									onClick={() => setStart(!start)}
								>Cancel</Button>
							</HStack>
						</VStack>
					</Form>

					<VStack>
						<Image
							boxSize='200px'
							objectFit='cover'
							borderRadius='full'
							src={profile?.image_url}
							alt={profile?.userName}
						/>
					</VStack>
				</Flex>
			}
		</Container >
	);
};

export default Profile;