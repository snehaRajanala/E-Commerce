import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const SingleCard = ({ multi }) => {
  return (
    <Link to="/staticpage">
    <div className="singleCard">
        <CardMedia
          component="img"
          height="420"
          width="50"
          image={multi.imageURL}
          alt="product-img"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {multi.typography}
          </Typography>

          <Typography>
            {" "}
            {multi.Price} 
          </Typography>
          <Typography
            sx={{
              backgroundColor: "white",
              color: "black",
              fontSize: 18,
              m: 1,
              p: 1,
            }}
          >
            <center>Buy Now</center>
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </div>

    </Link>
    
  );
};

export default SingleCard;
