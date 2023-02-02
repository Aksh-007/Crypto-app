import {
  Box,
  Container,
  RadioGroup,
  HStack,
  Radio,
  VStack,
  Text,
  Image,
  Stat,
  StatNumber,
  StatLabel,
  StatHelpText,
  StatArrow,
  Badge,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../index";
import Loader from "./Loader";
//for parameter
import { useParams } from "react-router-dom";
import Error from "./Error";
import CustomBar from "./CustomBar";
import Item from "./Item";

const CoinsDetails = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  //for params

  //currencysymbol
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

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
  }, [params.id]);

  if (error) return <Error Message="error whle fetching Coin" />;

  return (
    <Container maxW={"full"} h={["130vh", "100vh"]}  bgColor={"#1A202C"} color={"#FFFFFF"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <Box borderWidth={1} width={"full"}></Box> */}

          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"4"}>
              <Radio value="inr">₹ INR</Radio>
              <Radio value="eur">€ Euro</Radio>
              <Radio value="usd">$ Dollar</Radio>
              {/* {console.log(currency)} */}
            </HStack>
          </RadioGroup>

          <VStack alignItems={"center"} spacing={"4"} p={"3"}>
            <Text fontSize={"small"} alignSelf={"center"} opacity={"0.7"}>
              Last Updated on{" "}
              {Date(coin.market_data.last_updated).split("G")[0]}
            </Text>
            <Image src={coin.image.large} w={[28, 40]} objectFit={"contain"} />

            <Stat textAlign={"center"}>
              <StatLabel fontSize={"40"}>{coin.name}</StatLabel>
              <StatNumber>
                {currencySymbol}
                {coin.market_data.current_price[currency]}
              </StatNumber>
              <StatHelpText>
                <StatArrow
                  type={
                    coin.market_data.price_change_percentage_24h > 0
                      ? "increase"
                      : "decrease"
                  }
                />
                {coin.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>

            <Text fontSize={"xl"}>Market Rank</Text>
            <Badge fontSize={"2xl"} bgColor={"blackAlpha.900"} color={"white"}>
              {`#${coin.market_cap_rank}`}
            </Badge>

            <CustomBar
              high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
              low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
            />

            <Box w={["70%", "25%"]} p={"4"} maxW={"full"} bgColor={"#1A202C"} color={"#FFFFFF"}>
              <Item title={"Max Supply"} value={coin.market_data.max_supply} />
              <Item
                title={"Circulating Supply"}
                value={coin.market_data.circulating_supply}
              />
              <Item
                title={"Market Supply"}
                value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}
              />

              <Item
                title={"All time Low"}
                value={`${currencySymbol}${coin.market_data.atl[currency]}`}
              />

              <Item
                title={"All time High"}
                value={`${currencySymbol}${coin.market_data.atl[currency]}`}
              />
            </Box>
          </VStack>
        </>
      )}
    </Container>
  );
};

export default CoinsDetails;
