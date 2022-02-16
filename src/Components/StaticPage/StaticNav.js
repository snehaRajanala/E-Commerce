import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const StaticNav=()=> {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="static-nav"  sx={{p:4}}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/"
        >
          Clothing
        </Link>

        <Link
          underline="hover"
          color="inherit"
          href="/"
        >
          kid's Clothing
        </Link>

        <Link
          underline="hover"
          color="inherit"
          href="/"
        >
          Frocks
        </Link>

        <Typography color="text.primary">kid's Lehenga</Typography>
      </Breadcrumbs>
    </div>
  );
}

export default StaticNav;
