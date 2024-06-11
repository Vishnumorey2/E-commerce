import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import Breadcrum from '../components/Breadcrum/Breadcrum.jsx';
import Description from '../components/Desccription/Description';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';



const Product = () => {
   
  const {productid} = useParams();//this useParams hook will send current parameter of Route

  const {all_product} = useContext(ShopContext); //context Api passing data using useContext
  
  

    const product = all_product.find((e)=> e.id == Number(productid));
      
    
  useEffect(()=>{
    console.log('productid:',productid);
    console.log('All Products:', all_product);
    console.log('product',product);
},[productid,all_product,product]);


  return (
    <div>
      <Breadcrum  product = {product}/>
      <ProductDisplay product = {product} />
        <Description/>
        <RelatedProducts />
    </div>
   
  )
}

export default Product