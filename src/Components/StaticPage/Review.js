import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReportIcon from "@mui/icons-material/Report";
import { Button } from "@mui/material";

const ProductReview2 = () => {
  return (
    <>
      <h2>Customer Rewiews(45)</h2>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "Right",
            paddingBottom: "1rem",
            paddingTop: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "green",
              color:"white",
              fontWeight: "bold",
              padding: "3px 7px 3px 7px",
              margin: "10px",
              marginBottom:"2rem"
            }}
          >
            <p>4</p>
            <StarBorderIcon />
          </div>
          <p>
            Really nice product but is large to my daughter so i return it.. Will order it soon
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            color="success"
            size="small"
            startIcon={<FavoriteBorderIcon />}
          >
            HelpFull
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="error"
            startIcon={<ReportIcon />}
            sx={{ mx: 1 }}
          >
            Report abuse
          </Button>
          <h5>156 votes.</h5>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ProductReview2;
