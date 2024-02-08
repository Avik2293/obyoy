import React, { useState } from 'react';
import { Heading, Container, Image, HStack, VStack, Text, Flex, Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Form, } from 'react-router-dom';


const Profile = () => {
    const [start, setStart] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [birthday, setBirthday] = useState('');

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

        //     alert(`Selected file - ${this.fileInput.current.files[0].name}`);
    };

    const handleSubmit = event => {
        // event.preventDefault();
        setName('');
        setEmail('');
        setAddress('');
        setBirthday('');
        console.log(name, email, address, birthday);
        setStart(!start);
    };

    
    return (
        <Container
            maxWidth={"1200px"}
            mx={'auto'}
            border='4px'
            borderColor='green'
            borderRadius={15}
            my={3}
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

                        <Box fontWeight={'bold'}>
                            <Text>Name : Dummy</Text>
                            <Text>Email : Dummy</Text>
                            <Text>Address : Dummy</Text>
                            <Text>Birthday: 22 March, 1993</Text>

                            <Text textAlign={'center'} my={1}>:: :: ::</Text>
                            <Text>Date of Join : 22 March, 2022</Text>
                            <Text>Total Working Days : 356 Days</Text>
                            <Text>Balance : Tk. 345.56</Text>
                            <Text>Till Now Earning: Tk. 1745.56</Text>
                            <Text>Total Withdraw : Tk. 1345.56</Text>
                            <Text>For Approve : Tk. 35.56</Text>
                            <Text>Today's Contribution : Tk. 5.56</Text>
                        </Box>
                    </VStack>

                    <VStack>
                        <Image
                            boxSize='200px'
                            objectFit='cover'
                            borderRadius='full'
                            src='https://bit.ly/dan-abramov'
                            alt='Dan Abramov'
                        />

                        <Text fontWeight={'bold'} >
                            Learder Board Place : 22
                        </Text>

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

                        {
                            img &&
                            <>
                                <input type="file" onChange={handleFileChange} />
                                <div>{file && `${file.name} - ${file.type}`}</div>
                                <HStack spacing={8}>
                                    <Button
                                        bgColor={'teal'}
                                        p={2}
                                        my={1}
                                        borderRadius={'lg'}
                                        color={'white'}
                                        onClick={handleUploadClick}
                                    >Upload</Button>

                                    <Button
                                        bgColor={'black'}
                                        p={2}
                                        my={1}
                                        borderRadius={'lg'}
                                        color={'white'}
                                        onClick={() => setImg(!img)}
                                    >Cancel</Button>
                                </HStack>
                            </>
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
                            <Heading fontWeight={'bold'} as='h2' fontSize='2xl'>
                                Profile Details
                            </Heading>

                            <FormControl id="name" >
                                <FormLabel fontWeight={'bold'}>Name</FormLabel>
                                <Input
                                    type="name"
                                    placeholder='Your Name'
                                    px={2}
                                    w={'330px'}
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
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </FormControl>

                            <FormControl id="address" >
                                <FormLabel fontWeight={'bold'}>Address</FormLabel>
                                <Input
                                    type="text"
                                    placeholder='Your Address'
                                    px={2}
                                    w={'330px'}
                                    onChange={(e) => setAddress(e.target.value)}
                                    value={address}
                                />
                            </FormControl>

                            <FormControl id="birthday" >
                                <FormLabel fontWeight={'bold'}>Birthday</FormLabel>
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
                                >
                                    Submit</Button>

                                <Button
                                    bgColor={'black'}
                                    p={2}
                                    my={8}
                                    borderRadius={'lg'}
                                    color={'white'}
                                    onClick={() => setStart(!start)}
                                >
                                    Cancel</Button>
                            </HStack>
                        </VStack>
                    </Form>

                    <VStack>
                        <Image
                            boxSize='200px'
                            objectFit='cover'
                            borderRadius='full'
                            src='https://bit.ly/dan-abramov'
                            alt='Dan Abramov'
                        />
                    </VStack>
                </Flex>
            }

        </Container >
    );
};

export default Profile;