import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader";
import CoinCard from "./CoinCard";
import Error from "./Error";

const Coins = () => {
  const [coinsData, setCoinsdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  // console.log(currency);

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoindata = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        // console.log(data);
        setCoinsdata(data);
        setLoading(false);
      } catch (error) {
        // console.log(error.message);
        setError(true);
        setLoading(false);
        // setErrorMessage(error.message);
        // console.log(errorMessage);
      }
    };
    fetchCoindata();
  }, [currency, page]);

  if (error) return <Error Message="error whle fetching Coin" />;

  return (
    <Container maxW={"full"} pt={"2rem"} bgColor={"#1A202C"} color={"#FFFFFF"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
            <HStack spacing={"4"}>
              <Radio value="inr">₹ INR</Radio>
              <Radio value="eur">€ Euro</Radio>
              <Radio value="usd">$ Dollar</Radio>
              {/* {console.log(currency)} */}
            </HStack>
          </RadioGroup>

          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coinsData.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                image={i.image}
                price={i.current_price}
                symbol ={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>

          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {btns.map((item, index) => (
              <Button
              key={index}
                bgColor={"blackAlpha.900"}
                onClick={() => changePage(index + 1)}
                color={"white"}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
