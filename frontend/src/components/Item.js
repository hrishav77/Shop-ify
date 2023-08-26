import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "./context/Cartcontext";
import { Link } from "react-router-dom";
import Rating from "./Rating";
export default function Item(props) {
  const a = useContext(CartContext);
  // const cartObject={props.title,props}
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ]);

  return (
    <div className="skill-card">
      <Card
        className="card-content"
        m="2"
        borderRadius="5%"
        w={isSmallScreen ? "95px" : "280px"}
        h={isSmallScreen ? "220px" : "500px"}
        border="#E1E1E5 2px solid"
        bg="white.200"
        boxShadow="lg"
      >
        <CardBody m={isSmallScreen ? "" : "5"}>
          <Link to="/singleproduct">
            <Image
              src={props.url}
              borderRadius="lg"
              w="100%"
              h={isSmallScreen ? "75px" : "250px"}
              onClick={() =>
                a.clickHandler({
                  url: props.url,
                  title: props.title,
                  price: props.price,
                  desc: props.description,
                  id: props.id,
                  rating: props.rating,
                })
              }
            />
          </Link>
          <Stack mt="3" spacing="3">
            <Heading size="md" fontSize={isSmallScreen ? "3xs" : "xl"}>
              {props.title.slice(0, 20)}...
            </Heading>
            {/* <Text> */}
            {/* {props.description.slice(0, 50)}... */}
            {/* <ItemOverlay desc={props.description} url={props.url} title={props.title}/> */}

            <Rating rating={props.rating} />

            {/* </Text> */}
            <Text color="blue.600" fontSize={isSmallScreen ? "xs" : "2xl"}>
              ${props.price}
            </Text>
          </Stack>
          <Divider />
          <ButtonGroup spacing="2">
            <Link to="/cart">
              <Button
                variant="solid"
                size={isSmallScreen ? "2xs" : "md"}
                colorScheme="blue"
                fontSize={isSmallScreen ? "5px" : "lg"}
                onClick={() =>
                  a.Addtocart({
                    title: props.title,
                    url: props.url,
                    quantity: 1,
                    price: props.price,
                    id: props.id,
                  })
                }
              >
                Buy now
              </Button>
            </Link>
            <Link to="/singleproduct">
              <Button
                colorScheme="teal"
                size={isSmallScreen ? "2xs" : "md"}
                fontSize={isSmallScreen ? "5px" : "lg"}
                onClick={() =>
                  a.clickHandler({
                    url: props.url,
                    title: props.title,
                    price: props.price,
                    desc: props.description,
                    id: props.id,
                    rating: props.rating,
                  })
                }
              >
                View
              </Button>
            </Link>
          </ButtonGroup>
        </CardBody>
      </Card>
    </div>
  );
}
