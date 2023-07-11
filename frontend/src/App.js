import { ChakraProvider,extendTheme } from '@chakra-ui/react'
import {BrowserRouter,Routes ,Route} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from './components/Navbar';
import React, {  useState } from 'react'
import Product from './components/Product';
import ProductUnit from './pages/ProductUnit';

import Checkout from './pages/Checkout';
import Search from './pages/Search';

import SignupForm from './pages/Signup';
import LoginForm from './pages/Login';
import { useAuthContext } from './components/hooks/useAuthContext';

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
  const {user}=useAuthContext()
  const [catego,setcatego]=useState("")
  const buttonHandler=(e)=>{
    const customValue = e.target.getAttribute("data-value");
    console.log(customValue)
    setcatego(customValue)
  }

  return (
 
    <ChakraProvider theme={theme}>
    <div className="routes">
    <BrowserRouter>
   <Navbar buttonHandler={buttonHandler}/>
    <Routes>
      <Route path="/" element={user?<Home buttonHandler={buttonHandler}/>:<SignupForm/>}/>
      <Route path="/cart" element={user?<Cart/>:<SignupForm/>}/>
      <Route path="/product" element={user?<Product category={catego}/>:<SignupForm/>}/>
      <Route path="/singleproduct" element={user?<ProductUnit/>:<SignupForm/>}/>
      <Route path="/checkout" element={user?<Checkout/>:<SignupForm/>}/>
      <Route path="/search" element={user?<Search/>:<SignupForm/>}/>
      <Route path="/signup" element={user?<Home buttonHandler={buttonHandler}/>:<SignupForm/>}/>
      <Route path="/login" element={user?<Home buttonHandler={buttonHandler}/>:<LoginForm />}/>


    </Routes>
    </BrowserRouter>
    </div>
    </ChakraProvider>
 
  );
}

export default App;
