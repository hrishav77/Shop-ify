import {React,useState,useEffect } from 'react'
import Item from './Item'
import { Flex } from '@chakra-ui/react'
export default function Product(props) {
    const [items,setitem]=useState("")
    const fetchProducts=async()=>{
        const data=await fetch("https://fakestoreapi.com/products/category/"+props.category)
          const datajson=await data.json()
          if(data.ok){
            // setGoals(goaljson)
            setitem(datajson)
          }
    }
    useEffect(()=>{
        fetchProducts()
    },[props.category])
  return (
    <div>
        <Flex>
        {items && items.map((item)=>(
        <Item title={item.title} price={item.price} description={item.description} url={item.image}/>))}
        </Flex>
    </div>
  )
}
