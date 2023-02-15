import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ExchangeCard = ({ name , image, rank, url, yearlaunch }) => {
  
  // const [noData, setNoData] = useState('No data available');

  return (
  <a href={url} target={"blank"} >
    <VStack
     w={['60',"58"]}
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
        <Image src={image} 
        w={'10'} h={'10'}
        objectFit={'contain'}
        alt={'Exchange'} 
         />
         <Heading size={"md"} noOfLines={1}>
            {rank}
         </Heading>
         <Text noOfLines={1}>
                {name}
         </Text>
         <Text>
          {(yearlaunch === null) ? `No data` : yearlaunch}
         </Text>
    </VStack>
  </a>
  );
};

export default ExchangeCard;
