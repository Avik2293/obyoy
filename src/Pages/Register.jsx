import React, { useEffect } from 'react';
import { useState } from "react";
import { Flex, Box, FormControl, FormLabel, Input, InputGroup, HStack, InputRightElement, Stack, Button, Heading, useColorModeValue, chakra, Text, Link } from "@chakra-ui/react";
import { Form, useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { useDispatch } from 'react-redux';
import { signup } from '../Redux/Thunk/Login';

const Logo = (props) => (
	<chakra.svg color="white" height="12" width="auto" viewBox="0 0 89 89" xmlns="http://www.w3.org/2000/svg" {...props}
	>
		<path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
			d="M76.7528 14.9002C83.7459 22.6904 88 32.9894 88 44.282C88 68.5826 68.3005 88.282 44 88.282C35.6893 88.282 27.9167 85.978 21.2863 81.9737L15.3884 87.0521C14.5187 87.801 13.2784 86.7338 13.8892 85.7622L22.556 71.9745L22.5485 71.9656C22.5514 71.9678 22.5544 71.9701 22.5573 71.9724L35.1199 51.9871C35.5385 51.3211 35.0599 50.4549 34.2733 50.4549H19.8769C18.9505 50.4549 18.5222 49.304 19.2231 48.6983L60.245 13.2494C55.3897 10.7025 49.8631 9.26163 44 9.26163C24.6588 9.26163 8.97959 24.9408 8.97959 44.282C8.97959 52.5687 11.8577 60.1831 16.6689 66.1802L11.7467 74.211C4.45724 66.3591 0 55.8411 0 44.282C0 19.9815 19.6995 0.282043 44 0.282043C52.6142 0.282043 60.6502 2.75747 67.4355 7.03577L72.5813 2.58901C73.4507 1.83776 74.6934 2.9057 74.0815 3.87819L53.421 36.7143C53.002 37.3802 53.4806 38.2468 54.2674 38.2468H69.3753C70.3026 38.2468 70.7305 39.3996 70.0278 40.0046L28.5503 75.719C33.2103 78.0136 38.4546 79.3025 44 79.3025C63.3412 79.3025 79.0204 63.6233 79.0204 44.282C79.0204 36.2682 76.3286 28.883 71.7999 22.9813L76.7528 14.9002Z"
		/>
	</chakra.svg>
)

const Register = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	//  after sign up redirect to login page 
	const [registerFlag, setRegisterFlag] = useState(false);
	useEffect(() => {
		if (registerFlag) {
			navigate("/login");
		}
	}, [navigate, registerFlag]);

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	// const name = firstName + ' ' + lastName;

	const handleSubmit = (event) => {
		// event.preventDefault();
		dispatch(signup(firstName, lastName, email, password));
		setFirstName('');
		setLastName('');
		setEmail('');
		setPassword('');

		setRegisterFlag(true);
		console.log(firstName);
	};


	return (
		<Flex
			minH={"100vh"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray", "gray.800")}
		>
			<Stack
				spacing={8}
				mx={"auto"}
				maxW={"lg"}
				py={12}
				px={6}
				bg={'teal'}
				borderRadius={15}
			>
				<Stack align={"center"}>
					<Logo />

					<Text color="fg.muted">
						Have an account?
						<Button
							bgColor={'black'}
							p={1}
							borderRadius={'lg'}
							ml={3}
						>
							<Link href="/login" color={'white'}> Log in</Link>
						</Button>
					</Text>

					<Heading
						fontSize={"2xl"}
						fontWeight={'bold'}
						textAlign={"center"}
					>
						Sign Up
					</Heading>
				</Stack>

				<Box
					rounded={"lg"}
					bg={useColorModeValue("teal", "gray.700")}
					boxShadow={"lg"}
					p={8}
				>
					<Form onSubmit={handleSubmit}>
						<Stack spacing={4}>
							<HStack>
								<Box>
									<FormControl id="firstName" isRequired>
										<FormLabel fontWeight={'bold'}>First Name</FormLabel>
										<Input
											type="text"
											placeholder='Your First Name'
											px={2}
											onChange={(e) => setFirstName(e.target.value)}
											value={firstName}
											isRequired
										/>
									</FormControl>
								</Box>

								<Box>
									<FormControl id="lastName">
										<FormLabel fontWeight={'bold'}>Last Name</FormLabel>
										<Input
											type="text"
											placeholder='Your Last Name'
											px={2}
											onChange={(e) => setLastName(e.target.value)}
											value={lastName}
										/>
									</FormControl>
								</Box>
							</HStack>

							<FormControl id="email" isRequired>
								<FormLabel fontWeight={'bold'}>Email address</FormLabel>
								<Input
									type="email"
									placeholder='Your Email Address'
									px={2}
									w={'400px'}
									onChange={(e) => setEmail(e.target.value)}
									value={email}
									isRequired
								/>
							</FormControl>

							<FormControl id="password" isRequired>
								<FormLabel fontWeight={'bold'}>Password</FormLabel>
								<InputGroup>
									<Input
										type={showPassword ? "text" : "password"}
										placeholder='Type your Password here'
										px={2}
										w={'360px'}
										value={password}
										isRequired
										onChange={(e) => setPassword(e.target.value)}
									/>

									<InputRightElement
										h={"full"}
										color={'white'}
										px={2}
									>
										<Button
											variant={"ghost"}
											onClick={() => setShowPassword((showPassword) => !showPassword)}
										>
											{showPassword ? <ViewIcon /> : <ViewOffIcon />}
										</Button>
									</InputRightElement>
								</InputGroup>
							</FormControl>

							<Stack spacing={10} pt={2}>
								<Button
									loadingText="Submitting"
									size="lg"
									bg={"blue.400"}
									color={"white"}
									_hover={{ bg: "blue.500" }}
									bgColor={'blue'}
									p={1}
									borderRadius={'lg'}
									type='submit'
								>
									Sign up
								</Button>
							</Stack>
						</Stack>
					</Form>
				</Box>
			</Stack>
		</Flex>
	);
};

export default Register;  