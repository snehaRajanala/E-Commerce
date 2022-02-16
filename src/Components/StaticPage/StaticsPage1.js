import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

 const SimgleProductPage=()=> {
  return (
    <>
    <ImageList
      sx={{ width: 770, p:2, pr:4}}
      variant="quilted"
      cols={4}
      rowHeight={125}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 124, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </>
  );
}

export default SimgleProductPage;

const itemData = [
  {
    img: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/7/5/035433b1-3bb3-4334-a1f2-e9bcf39acde81625482082410-1.jpg',
    rows: 5,
    cols: 3,
  },
  {
    img: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/7/5/c80bdbf2-7da6-480a-8be9-7f878afa7ec71625482082421-2.jpg',
    rows: 4,
    cols: 2,
  },

  {
    img: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/7/5/e0eb2aa9-b463-4b09-abf4-5ad1d860c22d1625482082429-3.jpg',
    author: '@arwinneil',
    rows: 3,
    cols: 2,
  },
  {
    img: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/7/5/ecceddba-8fcf-4426-b3a9-6f8cde0045111625482082437-4.jpg',
    rows: 4,
    cols: 2,
  },
  
  {
    img: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/7/5/ae1069c0-f3c0-4d19-99c6-ff40e0bc986f1625482082445-5.jpg',
    rows: 4,
    cols: 2,
  },
];
