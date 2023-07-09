import {React,useState,createContext} from "react";
import { useAuthContext } from "../hooks/useAuthContext";
export const CartContext=createContext();

const CartProvider=(props)=>{
    const [product, setProduct] = useState({ url: "", id: "", title: "", description: "" ,price:"",rating:""});//this is for the single product page
    const [cartCount, setCartCount] = useState(0);
    const [cartItem,setItem]=useState("")
    const [totalCost, setTotalCost] = useState(0);
     const [searchQuery, setSearchQuery] = useState('');
    const {user}=useAuthContext()
    const fetchcart=async()=>{
      const data=await fetch("http://localhost:4000/cart",{
        headers:{
          'Authorization':`Bearer ${user.token}`
        }
      })
      const cartjson=await data.json()
      if(data.ok){
        setItem(cartjson)
      }
     
    }
   
    
    const clickHandler = ({url,title,desc,price,id,rating}) => {
      setProduct({url:url,description:desc,title:title,price:price,id:id,rating:rating})
        // console.log("clicked")
    };
    const ChangeQuantity=async({id,adder})=>{
      // console.log(id)
      const existingItemResponse = await fetch(`http://localhost:4000/cart/${id}`,{
        headers:{
          'Authorization':`Bearer ${user.token}`
        }});
      const existingItem = await existingItemResponse.json();
      // console.log(existingItem.prod_id)
    

        // Item already exists, increase the quantity by 1
        const existingItemId = existingItem.prod_id;
        const updatedQuantity = existingItem.quantity+adder;
        
        // Update the quantity of the existing item in the cart
        const updateResponse = await fetch(`http://localhost:4000/cart/${existingItemId}`, {
          method: "put",
          body: JSON.stringify({quantity:updatedQuantity }),
          headers: {
            "Content-Type": "application/json",
            'Authorization':`Bearer ${user.token}`
          }
        });
    
        if (!updateResponse.ok) {
          const updateJson = await updateResponse.json();
          console.log(updateJson.error);
        }
      
  }
    const Addtocart=async({title,url,price,id,quantity})=>{
      
      const existingItemResponse = await fetch(`http://localhost:4000/cart/productid/${id}`,{
        headers:{
          'Authorization':`Bearer ${user.token}`
        }});
      const existingItem = await existingItemResponse.json();
      
      if (existingItem.length > 0) {
        // Item already exists, increase the quantity by 1
        const existingItemId = existingItem[0].prod_id;
        const updatedQuantity = existingItem[0].quantity + 1;
        
        // Update the quantity of the existing item in the cart
        const updateResponse = await fetch(`http://localhost:4000/cart/${existingItemId}`, {
          method: "put",
          body: JSON.stringify({quantity:updatedQuantity }),
          headers: {
            "Content-Type": "application/json",
            'Authorization':`Bearer ${user.token}`
          }
        });
    
        if (!updateResponse.ok) {
          const updateJson = await updateResponse.json();
          console.log(updateJson.error);
        }
      } 
      else{
        const data = { title:title,quantity:quantity, image:url, cost:price,prod_id:id };
        // console.log(data)
        const response=await fetch("http://localhost:4000/cart",{
          method:"post",
          body:JSON.stringify(data),
          headers:{
              "Content-Type":"application/json",
              'Authorization':`Bearer ${user.token}`
          }
      })
              const json=await response.json()
              setCartCount(cartCount+1)
              
              if(!response.ok){console.log(json.error)}
    }
      }
    
    return (
      <CartContext.Provider value={{searchQuery, setSearchQuery,totalCost, setTotalCost,cartCount, setCartCount, product, setProduct, clickHandler,Addtocart,ChangeQuantity,fetchcart,cartItem,setItem}}>
        {props.children}
      </CartContext.Provider>
    );
}
export default CartProvider;