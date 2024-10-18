import { useContext } from "react";
import { CartContext } from "../../Store/Shopping-cart-context";
import DisplayProducts from "../Display-products/DisplayProducts";

const Product = () => {
const{storeProductsData }=useContext(CartContext)



 return<>

<div className="productsCover">
{
storeProductsData.data?.products.map((productData)=>
<DisplayProducts productData={productData} key={productData.id}/>
)
}
 </div>
  </>

} 

export default Product;
