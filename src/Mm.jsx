
import React, { useContext } from 'react'
import {CartContext} from './Store/Shopping-cart-context'


const Mm = () => {
let pro =useContext(CartContext) 

console.log(pro.product[0].title);
  
    return (
    <div>
        <h1>{pro.product[0].title}</h1>
    </div>
  )
}
    
export default Mm
 