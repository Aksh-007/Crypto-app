import { Box, Container, RadioGroup,HStack,Radio } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../index";
import Loader from "./Loader";
//for parameter
import { useParams } from "react-router-dom";
import Error from "./Error";

const CoinsDetails = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  //for params

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        console.log(data);
        setCoin(data);
        setLoading(false);

      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchDetails();
  },[params.id]);

  if (error) return <Error Message="error whle fetching Coin" />
 
  return <Container maxW={'container.xl'}>
    {loading ?( <Loader/>) :(
        <>
        
        <Box
        borderWidth={1}
        width={'full'}
        >
              Coin details``
        </Box>

        <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
            <HStack spacing={"4"}>
              <Radio value="inr">₹ INR</Radio>
              <Radio value="eur">€ Euro</Radio>
              <Radio value="usd">$ Dollar</Radio>
              {/* {console.log(currency)} */}
            </HStack>
          </RadioGroup>
        </>
      )
    }
  </Container>
};

export default CoinsDetails;
