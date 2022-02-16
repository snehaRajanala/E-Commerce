import React from "react";
import "./Clothes.css";
import ProductsObj from "./ProductsDetails";
import SingleProduct from "./SingleProduct";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Clothes = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="items">
      <Grid container spacing={4}>
        {ProductsObj.map((obj) => {
          return (
            <>
              <Grid item xs={3}>
                <Item>
                  <SingleProduct multi={obj} />{" "}
                </Item>
              </Grid>
            </>
          );
        })}
      </Grid>
    </div>
  );
};
export default Clothes;
