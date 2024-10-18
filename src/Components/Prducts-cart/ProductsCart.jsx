import React, { useContext } from 'react';
import Style from './ProductsCart.module.css';
import { CartContext } from '../../Store/Shopping-cart-context';
const ProductsCart = ({cartProduct}) => {

const{getAddAndUpdate , removeCartProducts }=useContext(CartContext)
console.log(cartProduct.quantity);

return (
    <> 
     <div className={Style.cartContent}>
     <img className={Style.cartProductImages} src={cartProduct.productData.images[0]} alt='car' width={60} height={60}/>     
     <div>
       <h6 className={Style.title}>${cartProduct.productData.price}</h6>
       <h6 className={Style.title}>${cartProduct.productData.price * cartProduct.quantity}</h6>
     </div>  
     <h2 className={Style.title}>{cartProduct.productData.title}</h2>
   
    </div>        
    <div> 
    <button className={Style.buttonsCart} onClick={()=>getAddAndUpdate(cartProduct.id ,null ,'increment')}><i className={`plus fa-sharp-duotone fa-solid fa-plus`}></i></button>  
    <span>{cartProduct.quantity}</span>
    <button className={Style.buttonsCart} onClick={()=>getAddAndUpdate(cartProduct.id)}>
    <i className={`minus fa-solid fa-minus`}></i></button> 
    <button className={Style.btnRemove} onClick={()=>removeCartProducts(cartProduct.id )}>remove</button>
    </div>  
    </>
  )

  }

export default ProductsCart
