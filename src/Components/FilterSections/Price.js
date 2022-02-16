import React from 'react'
import "./Style.css"
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function FilterWithPrice() {
    return (
        <div>
        <div className="SortItems">
       <div className="Sections"> <h4>PRICE</h4>
       <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
             <SearchIcon />
          </IconButton></div>

            <div className= "SortItemssort">
            <Checkbox {...label} />
            <p>Rs. 99 to Rs. 499 <span className="ItemsQuantity1">(75)</span></p>
            </div>

            <div className= "SortItemssort">
            <Checkbox {...label} />
            <p>Rs. 299 to Rs. 499 <span className="ItemsQuantity1">(45)</span></p>
            </div>

            <div className= "SortItemssort">
            <Checkbox {...label} />
            <p>Rs. 999 to Rs. 1499 <span className="ItemsQuantity1">(98)</span></p>
            </div>

            <div className= "SortItemssort">
            <Checkbox {...label} />
            <p>Rs.999 to Rs.2999 <span className="ItemsQuantity1">(32)</span></p>
            </div>
        </div>
        </div>
    )
}

export default FilterWithPrice;
