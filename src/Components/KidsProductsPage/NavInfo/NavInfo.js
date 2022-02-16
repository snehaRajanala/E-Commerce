import React from "react";
import "./NavInfo.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Filter from "./Filter";

const MiniNavbar = () => {
  return (
    <div className="Nav-Short">
      <p>
       <Link to="/" style={{textDecoration:"none"}} ><b>Home</b></Link> / <b>Kids's  Store</b>
      </p>
      <p className="KidsStore">
        Kid's Fashion Store <span className="num-item">- 7895 Products</span>
      </p>

      <div className="filter">
        <div>
          <h3>Filters</h3>
        </div>
        <div>
          <Button variant="text" endIcon={<KeyboardArrowDownIcon />} sx={{mr: 3 }
      }>   Categories
          </Button>
          <Button variant="text" endIcon={<KeyboardArrowDownIcon />} sx={{mr: 4 }}>
            Store
          </Button>
          {/* <Button variant="text" endIcon={<KeyboardArrowDownIcon />}>
            Bundles
          </Button> */}
        </div>
        <div>
            <Filter />
        </div>
      </div>
    </div>
  );
};

export default MiniNavbar;
