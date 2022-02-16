import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleApp from "../Images/Google.png";
import AppStore from "../Images/app store.png";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AppsIcon from "@mui/icons-material/Apps";
import Footer2 from "./Footer2";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div>
          <h3>ONLINE SHOPPING</h3>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <p>Home & Living</p>
          <p>Beauty</p>
          <p>Gift Cards</p>
          <p>Myntra Insider New</p>
        </div>
        <div className="Footerinfo">
          <h3>USEFUL LINKS</h3>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>T&C</p>
          <p>Terms Of Use</p>
          <p>Track Orders</p>
          <p>Shipping</p>
          <p>Cancellation</p>
          <p>Returns</p>
          <p>Whitehat</p>
          <p>Site Map</p>
        </div>
        <div className="Footerinfo">
          <h3>EXPERIENCE MYNTRA APP ON MOBILE</h3>
          <div className="app">
            <img
              src={GoogleApp}
              alt="info"
              width="136px"
              className="googleApp"
            />
            <img src={AppStore} alt="app" className="googleplay-appStore" width="120px" />
          </div>
          <h3 className="more">KEEP IN TOUCH</h3>
          <div>
            <FacebookIcon className="logo1"></FacebookIcon>
            <TwitterIcon className="logo1"></TwitterIcon>
            <YouTubeIcon className="logo1"></YouTubeIcon>
            <InstagramIcon className="logo1"></InstagramIcon>
          </div>
        </div>
        <div className="Footerinfo">
          <div className="serial">
            <AppsIcon />
            <p className="promise">
              <b>100% ORIGINAL</b> 
            </p>
          </div>
          <div className="serial">
            <AutorenewIcon />
            <p className="promise">
              <b> Return within 30days of receiving your order</b>
            </p>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};
export default Footer;
