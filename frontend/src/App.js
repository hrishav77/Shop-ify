import { ChakraProvider,extendTheme } from '@chakra-ui/react'
import {BrowserRouter,Routes ,Route} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import Product from './components/Product';
import CartProvider from './components/context/Cartcontext';


const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: ""
      }
    })
  }
});

function App() {
  const [catego,setcatego]=useState("")
  const buttonHandler=(e)=>{
    const customValue = e.target.getAttribute("data-value");
    console.log(customValue)
    setcatego(customValue)
  }
  return (
    <CartProvider>
    <ChakraProvider theme={theme}>
    <div className="routes">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home  buttonHandler={buttonHandler}/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/product" element={<Product category={catego}/>}/>

    </Routes>
    </BrowserRouter>
    </div>
    </ChakraProvider>
    </CartProvider>

  );
}

export default App;
