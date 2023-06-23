import {React,useState,createContext} from "react";
export const CartContext=createContext();

const CartProvider=(props)=>{

const [Citems, setItems] = useState("");
const [Curl,setUrl]=useState("")
const [Cimage,setimage]=useState("")
const [Ctitle,setTitle]=useState("")

return(
<CartContext.Provider value={{Citems,setItems,Curl,setUrl,Cimage,setimage,Ctitle,setTitle}}>
    {props.children}
</CartContext.Provider>
)
}
export default CartProvider;