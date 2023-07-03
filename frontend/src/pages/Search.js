import React, { useState, useEffect, useContext } from 'react';
import Item from '../components/Item';
import { Flex } from '@chakra-ui/react';
import { CartContext } from '../components/context/Cartcontext';

export default function Search(props) {
  const [items, setItems] = useState([]);
  let filteredItems=items
const a=useContext(CartContext)
  const fetchProducts = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const datajson = await data.json();
    if (data.ok) {
      setItems(datajson);
    }
  };
  

  useEffect(() => {
    fetchProducts();
  }, []);
  
  filteredItems = items.filter((item) =>
  item.title.toLowerCase().includes(a.searchQuery.toLowerCase())
);

  return (
    <div>
      <Flex flexWrap="wrap"  justifyContent="center">
        {filteredItems &&
        filteredItems.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              url={item.image}
              rating={item.rating}
            />
          ))}
      </Flex>
    </div>
  );
}
