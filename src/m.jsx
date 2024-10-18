import React, { useEffect, useState } from 'react'
import imgOne from '../../images/car-four.jpg';
import Cart from './Cart';

import React, { useState } from 'react'
import Data from './data'

const Cart = () => {
    const [productsCart , setProductsCart]=useState([]);
    const [productsCart2 , setProductsCart2]=useState([]);

const [ totalProductPrice , setTotalProductPrice] =useState()
//onsole.log( "setProductsCart((productNew=>[...productNew , productCart]))")
//  count === 0 ? setProductsCart((product)=>[...product , productCart]):    

const increase =(productCart , count)=>{ 
 /* setProductsCart2((product)=>[...product, productCart]) 
 if( productsCart2.length!==0 ){
  console.log(productsCart2.find( product => product))
  setTotalProductPrice(productCart.price)
 } */
//productCart.count=== 0 ?
/*
console.log(count);
  

  setProductsCart(count === 0 ? (product)=>[...product , productCart ] : console.log('p')
  )     

}      
 const SumProductPrice=(price , count)=>
{
  setTotalProductPrice( price * count ) 
}
console.log(productsCart2.length);

    console.log(productsCart);


   
    return (
    <div>
    <Data increase={increase} SumProductPrice={SumProductPrice}/>  
    <h2>{totalProductPrice}</h2>
    </div>
  )
}

export default Cart



productData.count= count2;

  //console.log(count);
 
 //console.log(productData);
 


  return (

    <>
    <div className={Style.productWrapper }>
      <h3>{productData.title}</h3>
      <h4>$ {productData.price}</h4>
      <button onClick={()=>{
        increase(productData , count2)
        count===0 ? setCount(count+1):
        setCount2((count=>count+1))
        SumProductPrice(productData.price , count)
       }
      }
      className={Style.btn}>buy</button>
      <button className={Style.btn}>details</button>
      <p className={Style.paragraph}>{productData.description}</p>
      <button onClick={()=>{setCount((count)=>count+1)}}>+</button>
          <h6>{count}</h6>
          <button>-</button>
      <i class="fa-solid fa-plus"></i>

    </div>

</>
  )
    

}


data old 
/*
           return (
  /*
 <div className='productsCover'>
        { 
           productsData.map((productData)=>         
           <div key={productData.id}>
             <Product productData={productData} setCart={setCart} cart={cart} />
           </div>   
        )    
}
    </div>
  )
 
 }
  */

  

  
  
  /*
  
  return (
    <>
    <h2>mo</h2>
      {data!==0?
        <div className={Style.productWrapper}>
          <img src={data.images[0]} alt='car' width={225} height={225}/>
          <h4>$ {data.price}</h4>
          <button className={Style.btn}>buy</button>
          <button className={Style.btn}>{data.details}</button>
          <p className={Style.paragraph}>{data.description}</p>
          <button className={Style.buttonsCart}>+</button>
          <h1>dataSave</h1>
          <h2>count</h2>
          <button className={Style.buttonsCart}>-</button>
        </div>
     :'' }
    </>
  );

  //const [productPriceTotal , setProductPriceTotal ] =useState(1);
  /*
  let {storeProductsData}  = useContext(CartContext) 

  console.log(storeProductsData);
  
  useEffect(()=>{
    const getstoreProductsData=()=>setCount(storeProductsData)
    getstoreProductsData();
  } , []) 
         
  console.log(count , storeProductsData);
 */

  //  const [pro ,setPro] =useState()
  /// setPro(pr2o)

  /* cart

{
  <Cart 
  product={cart} 
  count={count}  
  productPriceTotal = {productPriceTotal}
  getProductPriceTotal= {getProductPriceTotal}
  countProductIncrease={countProductIncrease}
  />
     
} 
 */
  //console.log(productData);
  /*

console.log(print);


//handle.onclickChange=increaseCount 





//  <h3>{productData.proData.title}</h3>
/*onClick=</div>{()=>handleClick(productData)}  buy 

onClick={()=>{
    countProductIncrease();
    getProductPriceTotal(productData.proData.price , count );
  } 
 }
+
 */
};