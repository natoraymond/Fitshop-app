import  { useState } from 'react'
import Styles from '../../pages/home/Home.module.css'
import Card from '../cards/Card';
// import ProductCard from '../product/ProductCard';






// const images = [
//     { id: 1, name: 'image 1', price: 10, image: './images/card1.png' },
//     { id: 2, name: 'image 2', price: 20, image: './images/card2.png' },
//     { id: 3, name: 'image 3', price: 20, image: './images/card3.png' },
//     { id: 4, name: 'image 4', price: 20, image: './images/card4.png' },
//     // Add more products as needed
//   ];


//   const products = [
//     { id: 1, name: 'Product 1', price: 10, image: '/images/product1.jpg' },
//     { id: 2, name: 'Product 2', price: 20, image: '/images/product2.jpg' },
//     // Add more products as needed
//   ];

function Home() {
  return (
    <>
        <div className={Styles.home_content}>
            <h1>Hello, Welcome to Fit shop!</h1>
            <p>Elevate your fashion with premium quality outfit at the lowest price.</p>
        </div>
        <div className={Styles.social_icons}>
            <img src="./images/home/so1.png" alt="" />
            <img src="./images/home/so2.png" alt="" />
            <img src="./images/home/so3.png" alt="" />
        </div>
        <Card />
        {/* <div className="image-list">
          {image.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div> 
         <ProductCard /> */}
    </>
  );
}

export default Home;
