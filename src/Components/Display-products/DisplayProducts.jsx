import React, { useContext } from 'react'
import Style from './Display.module.css';
import { CartContext } from '../../Store/Shopping-cart-context';
const DisplayProducts = ({productData}) => {
const {productQuantity , getAddAndUpdate , addProductCart }=useContext(CartContext)
const quantity = productQuantity(productData.id);
const available = false ; 


console.log(quantity);

const ChickQuantity=(quantity)=>{
  
   return quantity === 1 ? available === false : true
} 

return (
  <>
  <div className={Style.productWrapper}> 
        <img src={productData.images[0]} alt='car' width={225} height={225}/>
        <h4>${productData.title}</h4>
        <button className={Style.btn } onClick={()=>{getAddAndUpdate(productData.id , productData ,'buy')
        ChickQuantity(quantity)}}>buy</button>        
        {available ? <h3>added product in cart</h3> : ''}
        <h4>{productData.price}</h4>
        <p className={Style.paragraph}>{productData.description}</p>
        <button onClick={()=>getAddAndUpdate(productData.id ,productData ,'increment')} className={Style.buttonsCart}>
        <i className={`plus fa-sharp-duotone fa-solid fa-plus`}></i>
        </button>
        <h5>{quantity}</h5>
        
        <button className={Style.buttonsCart} onClick={()=>getAddAndUpdate(productData.id ,productData)}>
          <i className={`minus fa-solid fa-minus`}></i></button>     
        </div>
    </>
  )
    
}

export default DisplayProducts
