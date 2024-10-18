import React, { useContext }  from 'react';
import Style from "./cart.module.css";
import { CartContext } from '../../Store/Shopping-cart-context';
import ProductsCart from '../Prducts-cart/ProductsCart';
const Cart = () => {
const {cartProducts , closeCart }=useContext(CartContext)
const totalPrice = cartProducts.reduce((quantity , item)=> ( item?.productData.price * item.quantity ) + quantity,0 )

return (
<> 
<div>
<h2>...</h2>
</div>
   <div className={Style.cartStyle} >  
     <i className={`${Style.closeCart} fa-solid fa-xmark`} onClick={()=>closeCart()}></i>
     <h3 className={Style.totalPrice}> {totalPrice===0? "dont products in cart " : `$ ${totalPrice} Total`} </h3>
     {cartProducts.length!==0? cartProducts.map((cartProduct)=>
     <div key={cartProduct.id} className={Style.cartProductCover}> 
        <ProductsCart cartProduct={cartProduct}/>
     </div>
     ):''}    

    </div>
</>
  )
} 
export default Cart
