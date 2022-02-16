import React from 'react'
import "./Style.css"
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function FilterWithColor() {
    return (
        <div>
        <div className="SortItems">
       <div className="Sections"> <h4>Color</h4>
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
            <div id="blackColor"></div>
            <p>Black  <span className="ItemsQuantity1">(67)</span></p>
            </div>

            <div className= "SortItemssort">
            <Checkbox {...label} />
            <div id="brownColor"></div>
            <p>Brown  <span className="ItemsQuantity1">(58)</span></p>
            </div>

            <div className= "SortItemssort">
            <Checkbox {...label} />
            <div id="pinkColor"></div>
            <p>pink <span className="ItemsQuantity1">(5)</span></p>
            </div>

            <div className= "SortItemssort">
            <Checkbox {...label} />
            <div id="greyColor"></div>
            <p>Grey <span className="ItemsQuantity1">(69)</span></p>
            </div>

            <div className= "SortItemssort">
            <Checkbox {...label} />
            <div id="redColor"></div>
            <p>Red <span className="ItemsQuantity1">(23)</span></p>
            </div>

            <div className= "SortItemssort">
            <Checkbox {...label} />
            <div id="goldColor"></div>
            <p>Gold  <span className="ItemsQuantity1">(5)</span></p>
            </div>

            <div className= "SortItemssort">
            <Checkbox {...label} />
            <div id="greenColor"></div>
            <p>green<span className="ItemsQuantity1">(8)</span></p>
            </div>
        </div>
        </div>
    )
}

export default FilterWithColor;
