import { Button, HStack, Image,Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo.png";

const Header = () => {
  return (
      <HStack
        p={"4"}
        shadow={"base"}
        bgColor={"#46B2E0"}
        pos={"sticky"}
        top={"0"}
        backdropBlur={"2px"}
        zIndex={"10"}
        color={"#000"}
      >
         <Image src={logo} alt="Dan Abramov" w={['20%','10%']} filter={'grayscale(100%)'}/>
         
        <Button variant={"unstyle"}>
          <Link to="/">Home</Link>
        </Button>

        <Button variant={"unstyle"}>
          <Link to="/coins">Coins</Link>
        </Button>

        <Button variant={"unstyle"}>
          <Link to="/exchange">Exchanges</Link>
        </Button>

        {/* <Button 
    variant={'unstyle'}
    color={'white'}
    >
        <Link to='/coins/:id'>CoinsDetails</Link>
    </Button> */}
      </HStack>
  );
};

export default Header;
