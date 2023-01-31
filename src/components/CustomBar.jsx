import { 
    Badge, 
    HStack,
    Progress,
    VStack,Text
 } from '@chakra-ui/react';

import React from 'react'

const CustomBar = ({high, low}) => {
  return (
   <VStack w={['55%','25%']}>
     <Progress value={50} colorScheme={'teal'} w={'full'}/>
     <HStack justifyContent={"space-between"} w={'full'}>
        <Badge children={low} colorScheme={'red'}/>
            <Text fontSize={['l','18']}>24H range</Text>
        <Badge children={high} colorScheme={'green'}/>
     </HStack>
   </VStack>
  )
}

export default CustomBar;
