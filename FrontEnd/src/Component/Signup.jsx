import React, { useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Image,
  Text,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router";

const initMsg = {
  status: false,
  notice: "",
};

export default function Login() {
  const [msg, setMsg] = useState(initMsg);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "https://tiny-tan-termite-ring.cyclic.app/auth/signup",
        {
          name: name,
          email: email,
          password: password,
        }
      );

      if (response.status === 200) {
        // Signup successful
        toast({
          title: "Signup Successful",
          description: "User registered successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });

        navigate("/");
      } else {
        // Handle other cases (e.g., duplicate email)
        setMsg({ status: true, notice: "Email id already exists." });
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setMsg({ status: true, notice: "Failed to register the user. Please try again." });
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
            Sign in
          </Text>
          <Text fontSize={18} color={"rgb(112,117,121)"}>
            Sign in to access your Orders, Offers, and Wishlist.
          </Text>
          <br />

          <Input
            mt={"10px"}
            mb={"10px"}
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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

          <Box mt={"10"} pl={"65%"}>
            <Button
              fontSize={"30px"}
              width={"50px"}
              size="lg"
              borderRadius="50%"
              colorScheme="blue"
              onClick={handleSignup}
            >
              <ChevronRightIcon />
            </Button>
          </Box>
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
