import React, {  useState } from 'react';
import Styles from '../product/ProductCard.module.css';




const ProductCard = ({ product, addToCart }) => {
  
  // const product = [product, setProduct] = useState()

  // useEffect{
  //   setProduct(product)
  // }
  
  return (
    <div className={Styles.product_card}>
      {/* <img src={product.image} alt={product.name} /> */}
      <img src={product.images} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
