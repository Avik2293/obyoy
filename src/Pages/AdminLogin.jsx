import React, { useEffect, useState } from 'react';
import { forwardRef, useRef } from 'react';
import { chakra, IconButton, InputGroup, InputRightElement, useDisclosure, useMergeRefs, Button, Box, Checkbox, Container, FormControl, FormLabel, Heading, HStack, Input, Stack } from '@chakra-ui/react';
import { Form, useNavigate } from 'react-router-dom';
import { HiEye, HiEyeOff } from 'react-icons/hi';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/Thunk/Login';
import { selectIsLoggedIn } from '../Redux/Reducer';


const Logo = (props) => (
    <chakra.svg
        color="white"
        height="12"
        width="auto"
        viewBox="0 0 89 89"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M76.7528 14.9002C83.7459 22.6904 88 32.9894 88 44.282C88 68.5826 68.3005 88.282 44 88.282C35.6893 88.282 27.9167 85.978 21.2863 81.9737L15.3884 87.0521C14.5187 87.801 13.2784 86.7338 13.8892 85.7622L22.556 71.9745L22.5485 71.9656C22.5514 71.9678 22.5544 71.9701 22.5573 71.9724L35.1199 51.9871C35.5385 51.3211 35.0599 50.4549 34.2733 50.4549H19.8769C18.9505 50.4549 18.5222 49.304 19.2231 48.6983L60.245 13.2494C55.3897 10.7025 49.8631 9.26163 44 9.26163C24.6588 9.26163 8.97959 24.9408 8.97959 44.282C8.97959 52.5687 11.8577 60.1831 16.6689 66.1802L11.7467 74.211C4.45724 66.3591 0 55.8411 0 44.282C0 19.9815 19.6995 0.282043 44 0.282043C52.6142 0.282043 60.6502 2.75747 67.4355 7.03577L72.5813 2.58901C73.4507 1.83776 74.6934 2.9057 74.0815 3.87819L53.421 36.7143C53.002 37.3802 53.4806 38.2468 54.2674 38.2468H69.3753C70.3026 38.2468 70.7305 39.3996 70.0278 40.0046L28.5503 75.719C33.2103 78.0136 38.4546 79.3025 44 79.3025C63.3412 79.3025 79.0204 63.6233 79.0204 44.282C79.0204 36.2682 76.3286 28.883 71.7999 22.9813L76.7528 14.9002Z"
        />
    </chakra.svg>
)


const AdminLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // after sign in direct to home page 
    const isLoggedIn = useSelector(state => selectIsLoggedIn(state));
    useEffect(() => {
        if (isLoggedIn) {
            // window.location.href = '/';
            navigate("/");
        };
    }, [isLoggedIn, navigate]);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // for password field
    const { isOpen, onToggle } = useDisclosure()
    const inputRef = useRef(null)
    const mergeRef = useMergeRefs(inputRef, forwardRef.ref)
    const onClickReveal = () => {
        onToggle()
        if (inputRef.current) {
            inputRef.current.focus({
                preventScroll: true,
            })
        }
    }

    const handleSubmit = (event) => {
        // event.preventDefault();
        dispatch(login(email, password, 'admin'));
        setEmail('');
        setPassword('');
        // console.log(email);
        // console.log(password);
    };

    return (
        <Box bg={'gray'}>
            <Container
                maxW="lg"
                mx={'auto'}
                py={{ base: '12', md: '12', }}
                px={{ base: '0', sm: '8', }}
            >
                <Stack
                    spacing="4"
                    border='2px'
                    borderColor='green'
                    pt={3}
                    bg={'teal'}
                    borderRadius={15}
                >
                    <Stack spacing="6">
                        <Logo />

                        <Stack spacing={{ base: '2', md: '3', }} textAlign="center">
                            <Heading fontSize={{ base: 'lg', md: 'xl', }} fontWeight={'bold'}>
                                Admin Login
                            </Heading>
                        </Stack>
                    </Stack>

                    <Box
                        py={{ base: '0', sm: '8', }}
                        px={{ base: '4', sm: '10', }}
                        bg={{ base: 'transparent', sm: 'bg.surface', }}
                        boxShadow={{ base: 'none', sm: 'md', }}
                        borderRadius={{ base: 'none', sm: 'xl', }}
                    >
                        <Form onSubmit={handleSubmit}>
                            <Stack spacing="4">
                                <Stack spacing="2" >
                                    <FormControl isRequired>
                                        <FormLabel htmlFor="email" fontWeight={'bold'} >Email</FormLabel>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder='Your Email Address'
                                            px={2} w={'360px'}
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                            isRequired
                                        />
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel htmlFor="password" fontWeight={'bold'}>Password</FormLabel>

                                        <InputGroup>
                                            <InputRightElement color={'white'} p={1} >
                                                <IconButton
                                                    variant="text"
                                                    aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                                                    icon={isOpen ? <HiEyeOff /> : <HiEye />}
                                                    onClick={onClickReveal}
                                                />
                                            </InputRightElement>

                                            <Input
                                                id="password"
                                                ref={mergeRef}
                                                name="password"
                                                type={isOpen ? 'text' : 'password'}
                                                autoComplete="current-password"
                                                placeholder='Type your Password here'
                                                px={2}
                                                w={'330px'}
                                                onChange={(e) => setPassword(e.target.value)}
                                                value={password}
                                                isRequired
                                            />
                                        </InputGroup>
                                    </FormControl>
                                </Stack>

                                <HStack justify="space-between">
                                    <Checkbox defaultChecked color={'white'} >Remember me</Checkbox>

                                    <Button variant="text" size="sm" color={'red'}>
                                        Forgot password ?
                                    </Button>
                                </HStack>

                                <Stack spacing="4">
                                    <Button
                                        bgColor={'blue'}
                                        p={1}
                                        borderRadius={'lg'}
                                        color={'white'}
                                        type='submit'
                                    >
                                        Sign in</Button>
                                </Stack>
                            </Stack>
                        </Form>
                    </Box>
                </Stack >
            </Container >
        </Box >
    );
};

export default AdminLogin;