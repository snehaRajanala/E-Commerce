import React from "react";
import "./Style.css"
import StaticNav from "./StaticNav";
import SingleProductPage from "./StaticsPage1";
import SingleProductPage2 from "./StaticPage2";
import SingleProductPage3 from "./StaticPage3";
import SingleProductPage4 from "./StaticPage4";
import Rating from "./Rating";
import Review from "./Review";
import Header from '../Header'
const SingleProduct = () => {
  return (
    <>
      <Header/>
      <div>
        <StaticNav />
      </div>
      <div className="products">
        <div className="leftCon">
          <SingleProductPage />
        </div>
        <div className="rightCon">
          <SingleProductPage2 />
          <SingleProductPage3 />
          <SingleProductPage4 />
          <Rating />
        </div>
      </div>

      <div className="review">
        <div className="rightCon">
          <Review />
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
