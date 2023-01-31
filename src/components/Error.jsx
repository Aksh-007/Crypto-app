import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const ErrorComponent = ({ Message }) => {
  return (
    <Alert
      status="error"
      position={"fixed"}
      top={"100"}
      left={"50%"}
      transform={"translateX(-50%)"}
      w={"container.lg"}
      justifyContent={'center'}
    >
      <AlertIcon />
      {Message}
    </Alert>
  );
};

export default ErrorComponent;