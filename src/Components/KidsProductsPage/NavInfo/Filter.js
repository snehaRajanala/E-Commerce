import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const sortings = [
  {
    value: 'Price high',
    label: 'Price : High To Low',
  },
  {
    value: 'Price low',
    label: 'Price : Low To High',
  },
];

const Filter=()=> {
  const [sort, setsort] = useState('Value');

  const handleChange = (event) => {
    setsort(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {width: '25ch', ml: 2 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-select-currency"
          select
          label="Select"
          value={sort}
          onChange={handleChange}
          variant="standard"

        >
          {sortings.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}

export default Filter;
