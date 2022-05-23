import React, { useState } from 'react';
import './Posts.css';
import {
  Box,
  Divider,
  Grid,
  Typography,
  Paper
} from '@mui/material';

import PostFilter from "./postfilters/PostFilter";
import { PostData } from './postReview/PostsData';
import { PostItems } from './postReview/PostItems'

/*
export const PostItems = PostData;

export function renderPostData(author, tag) {
  const filteredItems = []
  PostData.map((post, index) => {
    if (post.author.includes(author)) {
      filteredItems.push(<PostCards key={index} post={post}></PostCards>)
    }
  }
  )
  listItems = filteredItems;
  console.log(listItems)
  return listItems;
}
*/

function PostsReview() {
  const [items, setData] = useState(PostData)

  return (
    <Paper className='Paper'>

      {/*---------------------- Page Tile ----------------------*/}
      <Typography variant='h1' gutterBottom sx={{
        letterSpacing: {
          xs: 0, // 0
          sm: 0, // 600
          md: 0.4, // 900
          lg: 0.75, // 1200
          xl: 1.5, // 1536
        },
        fontSize: '5.2vh', fontWeight: 200, borderBottom: '1px solid #d7d7d7'
      }}
        align="center">Post Revew</Typography>

      {/*============================= Main container =============================*/}
      <Grid container my={2}
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start">

        {/*---------------------- filter component section ----------------------*/}
        <Grid item xs={3}>
          <PostFilter data={{PostData, items, setData}} />

        </Grid>

        {/*---------------------- Posts component section ----------------------*/}
        <Grid item xs={9} className='Posts'>
          <Typography variant='h4' gutterBottom sx={{
            fontFamily: 'Advent Pro',
            letterSpacing: {
              xs: 0, // 0
              sm: 0, // 600
              md: 0.4, // 900
              lg: 0.75, // 1200
              xl: 1.5, // 1536
            },
            fontSize: '5.2vh', fontWeight: 300
          }}
            align="center">Post Cards</Typography>
          <Box sx={{ padding: '16px' }}>
            <Grid container my={4} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              direction="row"
              alignItems="center"
            >
              <PostItems data={{items, setData}} />

            </Grid>
          </Box>
        </Grid>

      </Grid>
      {/* ============================================================================== */}

    </Paper>
  );
}

export default PostsReview;