import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Cart from "../Components/Cart/Cart";

export const CartContext = createContext({ 
  storeProductsData:[],
  cartProducts:[]
});

const ShoppingCartContext = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [storeProductsData , setStoreProductsData] = useState([]) ;
  const [cartProducts , setCartProducts] = useState([]);
  
  const storeProducts = storeProductsData
  const storeCartProducts =cartProducts

  useEffect(() => {
    const getStoreProductsData = async () => {
      
      return setStoreProductsData(await axios("https://dummyjson.com/products"));
    };  
    getStoreProductsData();
  }, []);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const productQuantity = (id) => {
  return cartProducts.find((item) => item.id === id)?.quantity || 0;
  };
  


  const removeCartProducts = (id) => {
    return setCartProducts(cartProducts.filter((product) => product.id !== id));
  };
    
  
  
  
  const getAddAndUpdate = (id, productData, update) => {
    setCartProducts((cartProduct) => {
      if (cartProduct.find((item) => item.id === id) == null) {
        return  [...cartProduct, { id, productData, quantity: 1 }];
      } else {
        return cartProduct.map((item) => {
          if (item.id === id) {
            if (update === "increment") {              
              return  {...item , quantity: item.quantity + 1 };
            } else if (update === "buy") {
              return item.id === id
                ?  { ...item, quantity: item.quantity }
                : { ...item, quantity: item.quantity + 1 };
            } else {
              return item.quantity > 1 && item.quantity !== 0
                ? { ...item, quantity: item.quantity - 1 }
                : { ...item, quantity: (item.quantity = 1) };
            }
          } else {
            return item;
          }
        });
      }
    });
  };
  
  

  return (
    <>
      <CartContext.Provider
        value={{
          getAddAndUpdate,
          removeCartProducts,
          openCart,
          closeCart,
          storeProductsData:storeProducts ,
          cartProducts:storeCartProducts ,
          productQuantity,
        }}
      >
        {children}
        { isOpen ?<Cart /> : ""}
      </CartContext.Provider>
    </>
  );
}
export default ShoppingCartContext;

/*


incrementCartQuantity

const incrementCartQuantity =(id , productData , update)=>{
setCartProducts((cartProduct)=>{
  if(cartProduct.find((item)=>item.id ===id) == null){
   return [...cartProduct ,{ id , productData ,  quantity:1}]; 
  }else{
  return cartProduct.map((item)=>{
  if(item.id===id){
    if(update==='increment'){
      return {...item , quantity:item.quantity + 1 }
    }
    else if(update==='buy'){
     return item.id === id ?   
    {...item , quantity:item.quantity } : {...item , quantity:item.quantity + 1 }
    }
    else{
      return ( item.quantity> 1 && item.quantity!==0)? {...item , quantity:item.quantity - 1 }: 
      {...item , quantity:item.quantity = 1 }
        
    }
   
  }
  else{ 
    return item;
   } 
  })
  }

})

}
/*

decrementCartQuantity

const decrementCartQuantity =(id ,productData)=>{
  setCartProducts((cartProduct)=>{ 
  if(cartProduct.find((item)=>item.id ===id) == null){
    return [...cartProduct , { id , productData , quantity:1}]; 
  }else{
   return cartProduct.map((item)=>{
   if(item.id===id){
   return  ( item.quantity> 1 && item.quantity!==0)? {...item , quantity:item.quantity - 1 }:{...item , quantity: 1 }
  }
   else{ 
     return item;
    }
   })
  }
 
  })
}
  


const getAddAndUpdate = (id, productData, update) => {
    setCartProducts((cartProduct) => {
      if (cartProduct.find((item) => item.id === id) == null) {
        return  [...cartProduct, { id, productData, quantity: 1 }];
      } else {
        return cartProduct.map((item) => {
          if (item.id === id) {
            if (update === "increment") {
              return  { ...item, quantity: item.quantity + 1 };
            } else if (update === "buy") {
              return item.id === id
                ?  { ...item, quantity: item.quantity }
                : { ...item, quantity: item.quantity + 1 };
            } else {
              return item.quantity > 1 && item.quantity !== 0
                ? { ...item, quantity: item.quantity - 1 }
                : { ...item, quantity: (item.quantity = 1) };
            }
          } else {
            return item;
          }
        });
      }
    });
  };
  
  
  const removeCartProducts = (id) => {
    return setCartProducts(cartProducts.filter((product) => product.id !== id));
  };
  */
