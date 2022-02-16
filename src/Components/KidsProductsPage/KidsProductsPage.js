import React from "react";
import "./KidsProductsPage.css"
import NavInfo from "./NavInfo/NavInfo";
import Items from "../FilterSections/Items";
import Brands from "../FilterSections/Brands";
import Color from "../FilterSections/Color";
import PageNav from "./PageNav/PageNav";
import Clothes from "./KidsFashion/Clothes";
import Offer from "../FilterSections/Offer";
import Price from "../FilterSections/Price";



const KidsProductsPage = () => {
  return (
    <>
      <NavInfo />
      <div className="body2">
        <div className="leftSide">
          <Items />
          <Brands />
          <Price />
          <Color />
          <Offer />
        </div>
        <div className="rightSide">
         <Clothes />
         <PageNav />
        </div>
      </div>
    </>
 
  );
};

export default KidsProductsPage;
