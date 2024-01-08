import React, { useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import {
  Box,
  Image,
  Text,
  Input,
  Button,
  useToast,
  Flex
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router";
import { getAuthSuccess } from "../redux/Auth/action";

const initMsg = {
  status: false,
  notice: "",
};



  export default function Login() {
    const [msg, setMsg] = useState(initMsg);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();
    const navigate = useNavigate();
    const dispatch = useDispatch(); // Get the dispatch function
  
    const handleLogin = async () => {
      try {
        const response = await axios.post(
          "https://tiny-tan-termite-ring.cyclic.app/auth/login",
          {
            email: email,
            password: password,
          }
        );
  
        if (response.status === 200) {
          // Login successful
          localStorage.setItem("email", email);
          localStorage.setItem("token", response.data.token);
          toast({
            title: "Login Successful",
            description: "User logged in successfully.",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
  
          // Dispatch the getAuthSuccess action with user data
          dispatch(getAuthSuccess({ firstName: "abcd" }));
  
          // Redirect to the registration page or any other desired page
          navigate("/");
      } else {
        // Handle other cases (e.g., invalid credentials)
        setMsg({ status: true, notice: "Invalid Email or Password" });
      }
      
    } catch (error) {
      console.error("Error during login:", error);
      setMsg({ status: true, notice: "Failed to log in. Please try again." });
    }
  };

  return (
    <>
      <br />
      <br />
      <Box w="90%" m="auto" display={{ lg: "flex" }}>
        <Image margin={{ md: "auto", lg: "0px" }} src="https://www.jiomart.com/msassets/images/login-banner.jpg" />
        <Box ml={{ base: "15px", md: "80px", lg: "200px" }} mt="100px">
          <Text fontSize="27px" fontWeight="bold">
            Login
          </Text>
          <Text fontSize={18} color={"rgb(112,117,121)"}>
            Sign in to access your account.
          </Text>
          <br />

          <Input
            mt={"10px"}
            mb={"10px"}
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            mt={"10px"}
            mb={"10px"}
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Box>
            {msg.status ? (
              <Text fontSize="xs" color="crimson">
                {msg.notice}
              </Text>
            ) : null}
          </Box>

          <Flex justifyContent="flex-end" mt={10}>
            <Button
              fontSize={"30px"}
              width={"50px"}
              size="lg"
              borderRadius="50%"
              colorScheme="blue"
              onClick={handleLogin}
            >
              <ChevronRightIcon />
            </Button>
            <Button
              fontSize={"20px"}
              ml={250}
              mt={1}
              colorScheme="blue"
              onClick={() => {
                navigate("/signup"); // Navigate to the sign-up page
              }}
            >
              Sign Up
            </Button>
          </Flex>

        </Box>
      </Box>
      <Text
        fontWeight={"normal"}
        mt={"10px"}
        fontSize={"sm"}
        textAlign={"center"}
      >
        By continuing you agree to our
        <Text as={"span"} color={"red"}>
          Terms of service
        </Text>{" "}
        <br /> and
        <Text as={"span"} color={"red"}>
          Privacy & Legal Policy.
        </Text>
      </Text>

      <br />
      <br />
    </>
  );
}
