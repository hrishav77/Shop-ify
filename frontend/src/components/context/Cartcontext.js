import {React,useState,createContext} from "react";
export const CartContext=createContext();

const CartProvider=(props)=>{
const [cart,setcart]=useState([]);
const Addtocart=(newItem)=>{
    setcart((prevCartItems) => [...prevCartItems, newItem])
    console.log("hello")
}
return(
<CartContext.Provider value={{cart,Addtocart}}>
    {props.children}
</CartContext.Provider>
)
}
export default CartProvider;