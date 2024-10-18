import React, { useContext } from 'react';
import Style from './Header.module.css';
import { CartContext } from '../../Store/Shopping-cart-context';
const Header = () => {

  const {openCart , cartProducts }= useContext(CartContext);

  let cartQuantity = cartProducts.reduce((quantity , item)=>  item.quantity + quantity , 0 );
  
  return (
    <header className={Style.Header}>
    <nav className={Style.Nav}>
      <ul>
        <li className={Style.m}>Home</li>
        <li>about</li>
        <li>product</li>
      </ul>
    <h2 className={Style.cartQuantity} onClick={()=> openCart() }><i className={`${cartQuantity===0? Style.showCart: Style.viewCartAfterAdding} fa-solid fa-cart-shopping`}></i> {cartQuantity}</h2>
    </nav>

    </header>
   
  )
    
}

export default Header
