import React from 'react';
import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Button, Text } from '@chakra-ui/react';

const DeleteDialog = ({ isOpen, onClose, title, message, deleteFunction, id, option }) => {
    const cancelRef = React.useRef();

    const handleDelete = () => {
        // Call the delete function
        deleteFunction(id, option);
        // Close the dialog
        onClose();
    };

    return (
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px) hue-rotate(90deg)'
            >
                <AlertDialogContent
                    bg={'gray'}
                    maxWidth={'400px'}
                    mx={'auto'}
                    my={'auto'}
                    borderRadius={10}
                    padding={5}
                >
                    <AlertDialogHeader
                        fontSize='lg'
                        fontWeight='bold'
                        textAlign={'center'}
                        color={'white'}
                    >
                        {title}
                    </AlertDialogHeader>

                    <AlertDialogBody
                        fontWeight='semibold'
                        textAlign={'center'}
                        my={3}
                    >
                        <Text>{message}</Text>
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button
                            ref={cancelRef}
                            bgColor={'black'}
                            p={1}
                            px={2}
                            mt={0}
                            borderRadius={'lg'}
                            color={'white'}
                            onClick={onClose}
                        >
                            Cancel
                        </Button>

                        <Button
                            bgColor={'red'}
                            p={1}
                            px={2}
                            mt={0}
                            borderRadius={'lg'}
                            color={'white'}
                            onClick={handleDelete}
                            ml={3}
                        >
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
};

export default DeleteDialog;
