import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

function ProductReview() {
  return (
    <>
      <div style={{ display: "flex", paddingTop: "2rem",paddingButtom: "2rem"  }}>
        <h3>RATINGS</h3>
        <span style={{ color: "#ff3e6c" }}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
          <StarBorderIcon />
        </span>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <div style={{ display: "flex", textAlign:"center" }}>
            <h1>4.5</h1>
            <StarIcon style={{ color: "green" }} />
          </div>
          <p>988 Verified Buyers</p>
        </div>
        <div style={{ display: "flex", justifyContent:"space-between", marginLeft:"10rem", paddingLeft:"5rem", borderLeft:"3px solid silver"}}>
        <div style={{ margin:"5px"}}>
        <div style={{ display: "flex",textAlign:"center", alignItems:"center"}}>
            <p>5</p>
            <StarBorderIcon />
            <div style={{padding:"1px",paddingRight:"3rem", backgroundColor:"silver", borderRadius:"5px"}}><div style={{padding:"2px",paddingRight:"4.5rem", backgroundColor:"green"}}></div></div>58
            
            </div>
            <div style={{ display: "flex",textAlign:"center", alignItems:"center" }}>
            <p>4</p>
            <StarBorderIcon />
            <div style={{padding:"1px",paddingRight:"5rem", backgroundColor:"silver", borderRadius:"5px"}}><div style={{padding:"2px",paddingRight:"3rem", backgroundColor:"#40ff00"}}></div></div>32
            
            </div>
            <div style={{ display: "flex",textAlign:"center", alignItems:"center"}}>
            <p>3</p>
            <StarBorderIcon />
            <div style={{padding:"1px",paddingRight:"6rem", backgroundColor:"silver", borderRadius:"5px"}}><div style={{padding:"2px",paddingRight:"2rem", backgroundColor:"#bfff00"}}></div></div>46
            
            </div>
            <div style={{ display: "flex",textAlign:"center", alignItems:"center" }}>
            <p>2</p>
            <StarBorderIcon />
            <div style={{padding:"1px",paddingRight:"6.5rem", backgroundColor:"silver", borderRadius:"5px"}}><div style={{padding:"2px",paddingRight:"1.7rem", backgroundColor:"orange"}}></div></div>2
            
            </div>
            <div style={{ display: "flex",textAlign:"center", alignItems:"center" }}>
            <p>1</p>
            <StarBorderIcon />
            <div style={{padding:"1px",paddingRight:"7.5rem", backgroundColor:"silver", borderRadius:"5px"}}><div style={{padding:"2px",paddingRight:".8rem", backgroundColor:"red"}}></div></div>23   
            </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default ProductReview;
