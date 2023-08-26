import {
  Image,
  Box,
  Flex,
  Text,
  Button,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { CartContext } from "../components/context/Cartcontext";
import Rating from "../components/Rating";
import "../index.css";
export default function ProductUnit() {
  const a = useContext(CartContext);
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ]);
  const [added, setadd] = useState(false);
  return (
    <div>
      <Flex style={{ color: "black" }} className="big">
        <Box flex="0 0 40%">
          <Box m={isSmallScreen ? "2" : "10"}>
            <Image
              className="prod"
              src={a.product.url}
              borderRadius="5%"
              m={isSmallScreen ? "1" : "5"}
            />
          </Box>
        </Box>
        <Box flex="0 0 60%">
          <Text
            w="-webkit-fit-content"
            borderRadius="10"
            fontSize={isSmallScreen ? "lg" : "5xl"}
            m={isSmallScreen ? "1" : "5"}
            mb="1"
          >
            {a.product.title}
          </Text>
          <Flex direction="row">
            <Text fontSize={isSmallScreen ? "2xs" : "xl"} ml="5">
              {a.product.rating.rate}
            </Text>
            <Rating rating={a.product.rating} />
          </Flex>
          <Box h="1px" bg="gray.400" my={4} />
          <Text
            fontSize={isSmallScreen ? "sm" : "2xl"}
            m={isSmallScreen ? "1" : "5"}
          >
            {a.product.description}
          </Text>
          <Flex alignItems="center">
            <Button
              variant="solid"
              size={isSmallScreen ? "sm" : "md"}
              colorScheme={added ? "teal" : "green"}
              m={isSmallScreen ? "1" : "5"}
              onClick={() => {
                a.Addtocart({
                  title: a.product.title,
                  url: a.product.url,
                  quantity: 1,
                  price: a.product.price,
                  id: a.product.id,
                });
                setadd(true);
              }}
            >
              {!added && <span>Add to cart</span>}
              {added && <span>Added</span>}
            </Button>
            <Text
              fontSize={isSmallScreen ? "sm" : "4xl"}
              w="-webkit-fit-content"
              color="green.400"
              mr="10"
            >
              ${a.product.price}
            </Text>
          </Flex>
        </Box>
        <Box></Box>
      </Flex>
    </div>
  );
}
