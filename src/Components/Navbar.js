import React, { useState } from 'react';
import { Link, Box, Flex, Text, Button, Stack, Menu, MenuButton, MenuList, MenuDivider, MenuItem } from "@chakra-ui/react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { TiThMenuOutline } from "react-icons/ti";

import { useDispatch, useSelector } from 'react-redux';
import { logout, } from '../Redux/Thunk/Login';
import { selectIsAdmin, selectToken, selectID } from '../Redux/Reducer';


const Navbar = () => {
	const dispatch = useDispatch();

	const isAdmin = useSelector(state => selectIsAdmin(state));
	const token = useSelector(state => selectToken(state));
	const user_id = useSelector(state => selectID(state));

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const handleLogOut = () => {
		dispatch(logout(user_id, token));
	};

	return (
		<Box bg='gray'>
			<Flex
				as="nav"
				align="center"
				justify="space-between"
				wrap="wrap"
				w="100%"
				mb={3}
				px={5}
				py='3'
				maxWidth={"1350px"}
				mx={'auto'}
			>

				<Text
					w="100px"
					fontSize="lg"
					fontWeight="bold"
					color='white'
				>
					Logo
				</Text>

				<Box
					display={{ base: "block", md: "none" }}
					onClick={toggle}
				>
					{
						isOpen ?
							<IoMdCloseCircleOutline size="35" color='white' title='Close' />
							:
							<TiThMenuOutline size="27" color='white' title='Menu' />
					}
				</Box>

				<Box
					display={{ base: isOpen ? "block" : "none", md: "block" }}
					flexBasis={{ base: "100%", md: "auto" }}
				>
					<Stack
						spacing={8}
						align="center"
						pt={[4, 4, 0, 0]}
						justify={["center", "space-between", "flex-end", "flex-end"]}
						direction={["column", "row", "row", "row"]}
					>
						{/* if logged in  */}
						<Link href='/'>
							<Text display="block" color='white'>Home</Text>
						</Link>

						{/* if logged in  */}
						<Menu>
							<MenuButton as={Button} color='white'>
								Profile
							</MenuButton>

							<MenuList bg={'gray'}>
								{/*  switch between user and admin */}

								{/* <MenuGroup title='Profile'> */}
								{
									<>
										<MenuItem px={3} py={1}>
											<Link href='/profile'>
												<Text display="block" color='white'> My Profile</Text>
											</Link>
										</MenuItem>

										<MenuItem px={3} py={1}>
											<Link href='/withdraw'>
												<Text display="block" color='white'>Withdraw</Text>
											</Link>
										</MenuItem>

										<MenuItem px={3} py={1}>
											<Link href='/custom'>
												<Text display="block" color='white'>Custom</Text>
											</Link>
										</MenuItem>

										{
											isAdmin &&
											<MenuItem px={3} py={1}>
												<Link href='/dashboard'>
													<Text display="block" color='white'>Dashboard</Text>
												</Link>
											</MenuItem>
										}
									</>
								}
								{/* </MenuGroup> */}

								<MenuDivider />

								{/* <MenuGroup title='Help'> */}
								{/* <MenuItem px={3} py={2}>
									<Link onClick={handleLogOut}>
										<Text display="block" color='pink'>Logout</Text>
									</Link>
								</MenuItem> */}
								{/* </MenuGroup> */}
							</MenuList>
						</Menu>

						{/* if logged in  */}
						<Link onClick={handleLogOut}>
							<Button
								size="sm"
								fontWeight='bold'
								rounded="md"
								color='green'
								p='1'
								bg="white"
								_hover={{ bg: "green", color: "white" }}
							>
								Log Out
							</Button>
						</Link>
					</Stack>
				</Box>
			</Flex>
		</Box>
	);
};

export default Navbar;