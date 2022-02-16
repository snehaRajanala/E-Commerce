import React from "react";
import "./Style.css";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function FilterItems() {
  return (
    <div>
      <div className="SortItems">
        <div className="Sections">
          {" "}
          <h4>SECTIONS</h4>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <SearchIcon />
          </IconButton>
        </div>
        {Category.map((item) => {
          return (
            <>
              <div className="SortItemssort">
                <Checkbox {...label} />
                <p>
                  {item.name} <span className="ItemsQuantity1">({item.item})</span>
                </p>
              </div>
            </>
          );
        })}
      </div>
      <center className="ItemsQuantity2">+ 29 more</center>
    </div>
  );
}

export default FilterItems;

const Category = [
  {
    name: "lehanga",
    item: "7865",
  },
  {
    name: "tshirt",
    item: "897",
  },
  {
    name: "Saree",
    item: "986",
  },
  {
    name: "top",
    item: "6744",
  },
  {
    name: "Kurta",
    item: "23345",
  },
  {
    name: "jeans",
    item: "87654",
  },
  {
    name: "sweatshirt",
    item: "675",
  },
];
