import React, { useEffect } from 'react';
import {
    HStack,
    Text,
    TableContainer,
    VStack,
    Button,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { allCustomDatasetsData, approveCustomDataset, downloadCustomDataset } from '../Redux/Thunk/CustomDatasetManagement';
import { selectToken, selectID, selectAllCustomDatasetsData } from '../Redux/Reducer';

const DashboardCustomDataset = () => {

    const dispatch = useDispatch();

    const token = useSelector(state => selectToken(state));
    const user_id = useSelector(state => selectID(state));

    // for initial data load
    const customDatasetsTableData = useSelector(state => selectAllCustomDatasetsData(state));
    useEffect(() => {
        dispatch(allCustomDatasetsData(user_id, token));
    }, [dispatch, token, user_id]);

    // custom dataset management
    const handleApproveCustomDataset = (dataset_id) => {
        // console.log(dataset_id);
        dispatch(approveCustomDataset(dataset_id, token));
    };
    const handleDownloadCustomDataset = (dataset_id) => {
        // console.log(dataset_id);
        dispatch(downloadCustomDataset(dataset_id, token));
    };


    return (
        <div>
            <Text
                fontSize="lg"
                fontWeight="bold"
                color='black'
                textAlign={'center'}
                my={1}
                p={1}
            >
                All Custom Datasets Info</Text>

            {/* file table  */}
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
                        <Text w={'60px'} >Dataset ID</Text>
                        <Text w={'80px'} >Dataset Name</Text>
                        <Text w={'130px'} >Creating Date</Text>
                        <Text w={'80px'} >Approval Status</Text>
                        <Text w={'130px'} >Approval Date</Text>
                        <Text w={'60px'} >Creator Id</Text>
                        <Text w={'80px'} >Created By</Text>
                        <Text w={'60px'} >Total Lines</Text>
                        <Text w={'120px'} >Remarks</Text>
                        <Text w={'60px'} ></Text>
                        <Text w={'60px'} ></Text>
                    </HStack>

                    {
                        customDatasetsTableData.map((td, i) =>
                            <HStack key={i}
                                justify={'space-evenly'}
                                textAlign={'center'}
                                gap={6}
                                whiteSpace="break-spaces"
                            >
                                <Text w={'30px'} >{i + 1}</Text>
                                <Text w={'60px'} >{td?.dataset_id}</Text>
                                <Text w={'80px'} >{td?.dataset_name}</Text>
                                <Text w={'130px'} >{td?.create_date}</Text>
                                <Text w={'80px'} >{td?.approval_status}</Text>
                                <Text w={'130px'} >{td?.approval_date}</Text>
                                <Text w={'60px'} >{td?.user_id}</Text>
                                <Text w={'80px'} >{td?.userName}</Text>
                                <Text w={'60px'} >{td?.total_lines}</Text>
                                <Text w={'120px'} >{td?.remarks}</Text>
                                <Text w={'60px'} gap={1}>
                                    {
                                        (td.approval_status === 'Pending') ?
                                            <Button
                                                bgColor={'green'}
                                                p={1}
                                                px={2}
                                                mt={0}
                                                borderRadius={'lg'}
                                                color={'white'}
                                                onClick={() => handleApproveCustomDataset(td.dataset_id)}
                                            >
                                                Approve</Button>
                                            :
                                            null
                                    }
                                </Text>
                                <Text w={'60px'} gap={1}>
                                    <Button
                                        bgColor={'blue'}
                                        p={1}
                                        px={2}
                                        mt={0}
                                        borderRadius={'lg'}
                                        color={'white'}
                                        onClick={() => handleDownloadCustomDataset(td.dataset_id)}
                                    >
                                        Download</Button>
                                </Text>
                            </HStack>
                        )
                    }
                </VStack>
            </TableContainer>
        </div>
    );
}

export default DashboardCustomDataset;