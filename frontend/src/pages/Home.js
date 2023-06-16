import React, { useState } from 'react'
import Product from '../components/Product'
import Starting from './Starting'
export default function Home() {
  const [catego,setcatego]=useState("")
  const buttonHandler=(e)=>{
    setcatego(e.target.value)
  }
  return (
    <div>
     {!catego && <Starting clicked={buttonHandler}/>}
     {catego && <Product category={catego}/> }
    </div>
  )
}
