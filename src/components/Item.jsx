import { HStack,Text } from '@chakra-ui/react'
import React from 'react'

const Item = ({title, value}) => {
  return (
   <HStack justifyContent={"space-between"}  my={'4'} gap={'40px'} maxW={"full"} bgColor={"#1A202C"} color={"#FFFFFF"}>
        <Text
        fontFamily={"Kalam"}
        letterSpacing={'widest'}
        >
          {title}
        </Text>

        <Text>
          {value}
        </Text>
   </HStack>
  )
}

export default Item
