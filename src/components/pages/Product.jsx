import { useContext } from "react"
import { ShopContext } from '../Context/ShopContext'
import { useParams } from "react-router-dom";
import Breadcrum from "../Breadcrums/Breadcrum";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import Description from "../DescriptionBox/Description";
import RelatedProducts from "../RelatedProducts/RelatedProducts";

const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  console.log("all_product:", all_product);
  console.log("productId:", productId);

  const product = all_product.find((e)=> e.id === Number(productId));
 
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProducts/>
    </div>
  )
}

export default Product
