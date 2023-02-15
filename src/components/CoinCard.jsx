import React from 'react'
import { VStack, Image, Heading, Text} from '@chakra-ui/react'
import { Link } from "react-router-dom";

const CoinCard = ({id,name, image,symbol, price,
   currencySymbol="₹" }) =>  (
    <Link to={`/coin/${id}`}>
    <VStack
     w={['60',"58"]}
   //   w={"52"}
     shadow={'lg'}
     p={'10'}
     borderRadius={'lg'}
     transition={'all 0.5s'}
     m={'4'}
     bgColor={'purple'}
     css={{
        "&:hover":{
            transform:"scale(1.1)",
        } ,
     }}
    >
        <Image 
        src={image} 
        w={'10'} h={'10'}
        objectFit={'contain'}
        alt={'Exchange'} 
         />
         <Heading size={"md"} noOfLines={1}>
            {symbol}
         </Heading>
         <Text noOfLines={1}>
                {name}
         </Text>
         <Text>
         <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
         </Text>
    </VStack>
  </Link>
  )


export default CoinCard;
