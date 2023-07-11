import React, { useState, useEffect, useContext } from 'react';
import Item from './Item';
import { Flex } from '@chakra-ui/react';
import { CartContext } from './context/Cartcontext';
import { useAuthContext } from './hooks/useAuthContext';

export default function Product(props) {
  const [items, setItems] = useState("");
  const a=useContext(CartContext)

  const fetchProducts = async () => {
    if(props.category==="all"){
      const data = await fetch("https://fakestoreapi.com/products");
      const datajson = await data.json();
    if (data.ok) {
      setItems(datajson);
    }
    }
    else{
      const data = await fetch("https://fakestoreapi.com/products/category/" +props.category);
      const datajson = await data.json();
    if (data.ok) {
      setItems(datajson);
    }
    } 
    
  };

  useEffect(() => {
    fetchProducts();
    a.fetchcart()
  }, [props.category]);

  return (
    <div>
      <Flex flexWrap="wrap" justifyContent="center" >
        {items &&
          items.map((item) => (
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
