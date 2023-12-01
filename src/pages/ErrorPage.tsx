import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={6}>
        <Heading>OOops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "To be or not to be; this page is not to be"
            : "An error of divine proportion has occured"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
