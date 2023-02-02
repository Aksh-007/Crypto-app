import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container, HStack } from "@chakra-ui/react";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";
import Error from "./Error";

const Exchange = () => {
  const [exchangesData, setExchangesdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchangesData = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        console.log(data);
        setExchangesdata(data);
        setLoading(false);
      } catch (error) {
        // console.log(error.message);
        setError(true)
        setLoading(false);
      }
    };
    fetchExchangesData();
  }, []);

  if (error) return <Error Message="error while fetching Exchanges" />;
 
  return (
    <Container maxW={"full"} pt={'3rem'}  bgColor={"#1A202C"} color={"#FFFFFF"}>{loading 
    ? (<Loader />) 
    : (<>
       <HStack wrap={'wrap'} justifyContent="space-evenly" >
         {exchangesData.map((i)=>(
             <ExchangeCard 
             key={i.id}
             name={i.name}
             image={i.image}
             rank={i.trust_score_rank}
             url={i.url}
             yearlaunch={i.year_established}
             />
          )
          )
          }
       </HStack>
    </>)}
    </Container>
  );
};

export default Exchange;
