import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Heading, Input, Stack,Center,useMediaQuery} from '@chakra-ui/react';
import { useSignup } from '../components/hooks/useSignup';
import BeatLoader from "react-spinners/BeatLoader";


const FormSignup = () => {
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ])
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, isLoading, error }=useSignup()//use signup returns theses states and also dispatch the login action
 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
 
    await signup(email,password)
    
  };

  return (
    
    <Box
    width={['80%', '400px']}
    height="30%"
    p={4}
    bg="gray.100"
    borderRadius="md"
    boxShadow="lg"
    ml={isSmallScreen?"8":"20"}
    mt={isSmallScreen?"4":"25"}
    backgroundColor="lightyellow"
    border="2px solid gold"
    >
        
      <Heading as="h2" size="md" textAlign="center" mb={4} color="blackAlpha.800">
        Signup
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl>
            <FormLabel fontWeight="bold">Email:</FormLabel>
            <Input type="email" value={email} onChange={handleEmailChange} bg="white"/>
          </FormControl>
          <FormControl>
            <FormLabel fontWeight="bold">Password:</FormLabel>
            <Input type="password" value={password} onChange={handlePasswordChange} bg="white"/>
          </FormControl>
          <Button type="submit" colorScheme="yellow" variant="outline" fontWeight="bold">Sign Up</Button>
          {error && <Box bg="red.100" color="red" borderRadius="3" p="1" border="red solid 1px" fontSize="sm">{error}</Box>}
          
        </Stack>
      </form>
      {isLoading && <Center><BeatLoader color="#36d7b7" size={15} margin="5px" aria-label='loading'cssOverride={{margin: "5px",colour:"teal"}}/></Center>}
    </Box>
  );
};

export default FormSignup;
