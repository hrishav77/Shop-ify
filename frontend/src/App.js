import { ChakraProvider,extendTheme } from '@chakra-ui/react'
import {BrowserRouter,Routes ,Route} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
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
  
  return (
    <ChakraProvider theme={theme}>
    <div className="routes">
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </div>

    </ChakraProvider>
  );
}

export default App;
