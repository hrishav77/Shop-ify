import {React,useState,createContext} from "react";
export const CartContext=createContext();

const CartProvider=(props)=>{
    const [product, setProduct] = useState({ url: "", id: "", title: "", description: "" ,price:""});
    const [cartCount, setCartCount] = useState(0);
    
    const clickHandler = ({url,title,desc,price,id}) => {
      setProduct({url:url,description:desc,title:title,price:price,id:id})
        console.log("clicked")
    };
    const ChangeQuantity=async({id,adder})=>{
      console.log(id)
      const existingItemResponse = await fetch(`http://localhost:3000/cart/${id}`);
      const existingItem = await existingItemResponse.json();
      console.log(existingItem.user_id)
      if (existingItem.length > 0) 
        console.log("adder")
        // Item already exists, increase the quantity by 1
        const existingItemId = existingItem.user_id;
        const updatedQuantity = existingItem.quantity+adder;
        
        // Update the quantity of the existing item in the cart
        const updateResponse = await fetch(`http://localhost:3000/cart/${existingItemId}`, {
          method: "put",
          body: JSON.stringify({quantity:updatedQuantity }),
          headers: {
            "Content-Type": "application/json"
          }
        });
    
        if (!updateResponse.ok) {
          const updateJson = await updateResponse.json();
          console.log(updateJson.error);
        }
      
  }
    const Addtocart=async({title,url,price,id,quantity})=>{
    
      const existingItemResponse = await fetch(`http://localhost:3000/cart/productid/${id}`);
      const existingItem = await existingItemResponse.json();
    
      if (existingItem.length > 0) {
        // Item already exists, increase the quantity by 1
        const existingItemId = existingItem[0].user_id;
        const updatedQuantity = existingItem[0].quantity + 1;
        
        // Update the quantity of the existing item in the cart
        const updateResponse = await fetch(`http://localhost:3000/cart/${existingItemId}`, {
          method: "put",
          body: JSON.stringify({quantity:updatedQuantity }),
          headers: {
            "Content-Type": "application/json"
          }
        });
    
        if (!updateResponse.ok) {
          const updateJson = await updateResponse.json();
          console.log(updateJson.error);
        }
      } 
      else{
        const data = { title:title,quantity:quantity, image:url, cost:price,user_id:id };
        console.log(data)
        const response=await fetch("http://localhost:3000/cart",{
          method:"post",
          body:JSON.stringify(data),
          headers:{
              "Content-Type":"application/json"
          }
      })
              const json=await response.json()
              setCartCount(cartCount+1)
              
              if(!response.ok){console.log(json.error)}
    }
      }
    
    return (
      <CartContext.Provider value={{ cartCount, setCartCount, product, setProduct, clickHandler,Addtocart,ChangeQuantity}}>
        {props.children}
      </CartContext.Provider>
    );
}
export default CartProvider;