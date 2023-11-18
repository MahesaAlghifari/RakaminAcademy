import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { registerUser } from "../modules/fetch";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("The password does not match");
      return;
    }

    try {
      await registerUser(e.target.name.value, e.target.email.value, password);
      toast({
        title: "Registered",
        description: "You have successfully registered.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    } catch (e) {
      const errorMessage = e?.message || "An error occurred. Please try again.";
      setError(errorMessage);
      toast({
        title: "An error occurred.",
        description: errorMessage,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex align="center" justify="center" h="100vh">
      <Box p={8} maxW="md" borderWidth={1} borderRadius="lg" boxShadow="lg">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Register
        </Text>

        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            {error && (
              <Text fontSize="sm" color="red.500" textAlign="center">
                {error}
              </Text>
            )}

            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="name" name="name" placeholder="Enter your name" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {password !== confirmPassword && (
                <Text fontSize="xs" color="red.500">
                  The password does not match
                </Text>
              )}
            </FormControl>

            <Button colorScheme="teal" type="submit">
              Register
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default Register;
