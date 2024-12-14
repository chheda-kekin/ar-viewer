import React from "react";
import ProductItems from "../../data/ProductItems";
import "./EquipmentList.css";
import LazyLoad from "react-lazyload";
import Equipment from "../Equipment/Equipment";
import SearchField from "../SearchField/SearchField";


const EquipmentList = ({ addToWishlist, wishlist, removeFromWishlist }) => {

  function viewDetailsHandler() {
    console.log("Equipment is expanded!!");
  }

  return (
    <>
      <section>
        <SearchField />
        {ProductItems.map(item => {
          return <Equipment item={item} viewDetailsHandler={viewDetailsHandler}  />
        })}
      </section>
    </>
  );
};

export default EquipmentList;