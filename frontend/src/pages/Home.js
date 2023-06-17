import Product from '../components/Product'
import Starting from './Starting'
import {BrowserRouter,Routes ,Route,Navigate } from "react-router-dom";

export default function Home({buttonHandler}) {
  
  return (
    <div>
     <Starting clicked={buttonHandler} />
    </div>
  )
}
