import React, { useState, useEffect } from 'react';
import Item from './Item';
import { Flex } from '@chakra-ui/react';

export default function Product(props) {
  const [items, setItems] = useState("");

  const fetchProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products/category/" + props.category);
    const datajson = await data.json();
    if (data.ok) {
      setItems(datajson);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [props.category]);

  return (
    <div>
      <Flex flexWrap="wrap">
        {items &&
          items.map((item) => (
            <Item
              key={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              url={item.image}
            />
          ))}
      </Flex>
    </div>
  );
}
