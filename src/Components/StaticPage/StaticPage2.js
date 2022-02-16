import React from "react";
import "./StaticPage2.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

function SingleProductPage2() {
  return (
    <>
      <Button href="#LehengeCholi" color="primary">
        Brand: Anayas
      </Button>
      <h1>Lehenga Choli</h1>
      <p>
        Anayasa Net's Net Semi-Stitched Lehenga Choli. Embroidered ||
      </p>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            "& > *": {
              p: 2,
            },
          }}
        >
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>
              4.2
              <StarIcon />
            </Button>
            <Button>2k Ratings</Button>
          </ButtonGroup>
        </Box>
        <hr />
      </div>
    </>
  );
}

export default SingleProductPage2;
