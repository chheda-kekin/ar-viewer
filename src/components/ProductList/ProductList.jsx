import React, { useState } from "react";
import ProductItems from "../../data/ProductItems";
import ModelViewer from "../ModelViewer/ModelViewer";
import "./ProductList.css";
import LazyLoad from "react-lazyload";
import Equipment from "../Equipment/Equipment";
import SearchField from "../SearchField/SearchField";


const ProductList = ({ addToWishlist, wishlist, removeFromWishlist }) => {

  // useState(false);

  function viewDetailsHandler() {
    console.log("Equipment is expanded!!");
  }

  return (
    <>
      {/* <section className="list-view">
        {ProductItems.map((item,idx) => (
          <LazyLoad key={idx}>
            <ModelViewer 
              item={item} 
              addToWishlist={addToWishlist} 
              wishlist={wishlist} 
              removeFromWishlist={removeFromWishlist} />
          </LazyLoad>
        ))}
      </section> */}

      <section>
        <SearchField />
        {ProductItems.map(item => {
          return <Equipment item={item} viewDetailsHandler={viewDetailsHandler}  />
        })}
      </section>
    </>
    
  );
};

export default ProductList;