import React from 'react'
import Product from './Components/Product/Product'
import ShoppingCartContext from './Store/Shopping-cart-context'
import Header from './Components/Header/Header.jsx'
const App = () => {
  return (  
    <>
   
<ShoppingCartContext>
<Header/>  
<Product/>
</ShoppingCartContext>
 
    </>
  )
}

export default App




























































/*

import './App.css';
import  { CartContext } from './Store/Shopping-cart-context.jsx';
import Data from './data.js'
import Product from './Components/Product/Product.jsx';
import Cart from './Components/Cart/Cart.jsx';
import { useState } from 'react';
function App() {
// <Header/> 
//
let [countProduct , setCountProduct]=useState(0)


function print() {
  console.log("hello");
  
}

const increaseCount=(item , car ,count)=>{
  car.filter(product=>product.id === item.id ? item.count=0:'')
  item.count=count;
  console.log(item.count);
  
  setCountProduct(countProduct+1)
}
const pro=()=>{
  console.log('hello');
  
}

let [cart , setCart]=useState([])
const handleClick=(item ,car)=>
  {  
    console.log(cart);
    let existing = false ;
    car.filter(product=>product.id === item.id ?existing = true :'') 
    
     if(existing){
      item.count++
     return ;
   }
   setCart((cart)=>[...cart , item])
  }  

return ( 
<>

<CartContext.Provider value={{ count:0 , pro , handleClick , increaseCount , cart ,setCountProduct , countProduct , proData:[]}}>
<Data/> 
<Cart/>
</CartContext.Provider>  
 </>
) 
    
}    
   

export default App

*/