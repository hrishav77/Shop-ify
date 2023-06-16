import { Box, Flex, Input, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      backgroundColor="gray.800"
      color="white"
    >
    
      <Flex width="80%">
      <Box fontSize="2xl" >
       Shopify
      </Box>
        <Input
          type="text"
          placeholder="Search"
          marginLeft="1rem"
          size="md"
        />
        
      </Flex>
      <Button colorScheme="teal" size="sm">
          Cart
        </Button>
    </Flex>
  );
};

export default Navbar;
