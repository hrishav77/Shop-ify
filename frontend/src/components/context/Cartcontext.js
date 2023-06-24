import {React,useState,createContext} from "react";
export const CartContext=createContext();

const CartProvider=(props)=>{

const [Citems, setItems] = useState("");
const [Curl,setUrl]=useState("")
const [Cimage,setimage]=useState("")
const [Cartcount,setCartcount]=useState(0)

return(
<CartContext.Provider value={{Citems,setItems,Curl,setUrl,Cimage,setimage,Cartcount,setCartcount}}>
    {props.children}
</CartContext.Provider>
)
}
export default CartProvider;