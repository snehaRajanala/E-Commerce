import React from 'react'
import "./Style.css"
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function FilterWithBrand() {
    return (
        <div>
        <div className="SortItems">
       <div className="Sections"> <h4>BRANDS</h4>
       <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
          >
             <SearchIcon />
          </IconButton></div>
            <div className= "SortItemssort">
            <Checkbox {...label} />
            <p>Adidas <span className="ItemsQuantity1">(89)</span></p>
            </div>

            <div className= "SortItemssort">
            <Checkbox {...label} />
            <p>Air <span className="ItemsQuantity1">(67)</span></p>
            </div>

            <div className= "SortItemssort">
            <Checkbox {...label} />
            <p>Forever<span className="ItemsQuantity1">(45)</span></p>
            </div>

            <div className= "SortItemssort">
            <Checkbox {...label} />
            <p>Jordan<span className="ItemsQuantity1">(57)</span></p>
            </div>

            <div className= "SortItemssort">
            <Checkbox {...label} />
            <p>Maxx<span className="ItemsQuantity1">(98)</span></p>
            </div>

            <center className="ItemsQuantity2">+ 18 more</center>
        </div>
        </div>
    )
}

export default FilterWithBrand;
