import axios from 'axios';
import React , {  useContext, useEffect, useState } from 'react'
//import {CartContext} from './Store/Shopping-cart-context.jsx'
import Product from './Components/Product/Product.jsx';
const Data = () => { 
//let proData = useContext(CartContext)
 const [storeProductsData , setStoreProductsData]= useState([]) 



console.log(storeProductsData);


return<>

{
(storeProductsData.length!==0)?
 <div className='productsCover'>{
storeProductsData.map((product)=>{
  return(<>
  <Product productData={product} key={product.id}/> 
{product.count=0}
  
  </>)
})
}</div>
:''

}   
 

</>
}
export default Data
