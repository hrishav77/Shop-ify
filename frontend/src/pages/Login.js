import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Heading, Input, Stack,Center} from '@chakra-ui/react';
import { useLogin } from '../components/hooks/useLogin';
import BeatLoader from "react-spinners/BeatLoader";

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login,error,isLoading}=useLogin()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await login(email,password)
    // await signup(email,password)
    
  };

  return (
    <Box
    width={['80%', '400px']}
    p={4}
    // bg="gray.100"
    borderRadius="md"
    boxShadow="lg"
    margin="0 auto"
    mt={20}
    // backgroundColor= "yellow.100"
   

    >
      <Heading as="h2" size="md" fontSize="3xl" textAlign="center" mb={4} color="blackAlpha.800">
        Login
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl>
            <FormLabel fontWeight="bold">Email:</FormLabel>
            <Input type="email" value={email} onChange={handleEmailChange} />
          </FormControl>
          <FormControl>
            <FormLabel fontWeight="bold">Password:</FormLabel>
            <Input type="password" value={password} onChange={handlePasswordChange} />
          </FormControl>
          <Button type="submit" colorScheme="yellow"  disabled={isLoading} fontWeight="bold">Log in</Button>
          {error && <Box bg="red.100" color="red" borderRadius="3" p="1" border="red solid 1px" fontSize="sm">{error}</Box>}
        </Stack>
      </form>
      {isLoading && <Center><BeatLoader color="#36d7b7" size={15} margin="5px" aria-label='loading'cssOverride={{margin: "5px",colour:"teal"}}/></Center>}
    </Box>
  );
};

export default LoginForm;
