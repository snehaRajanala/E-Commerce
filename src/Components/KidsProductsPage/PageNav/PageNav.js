import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./PageNav.css"

export default function NavNextPage() {
  return (
    <Stack spacing={6} className="NavNextPage">
      <Pagination count={20}   />
    </Stack>
  );
}
